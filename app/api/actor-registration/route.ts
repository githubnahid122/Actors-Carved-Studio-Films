import { NextResponse, type NextRequest } from "next/server";

import { actorRegistrationSchema } from "@/lib/schemas/actor-registration";
import { actorRegistrationEmail } from "@/lib/email-templates/actor-registration";
import { resend, isResendConfigured, RESEND_FROM_EMAIL } from "@/lib/resend/client";
import { SITE } from "@/lib/constants";
import { sanitizeFields } from "@/lib/sanitize";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import type { ApiResponse } from "@/types/api";

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  const ip = getClientIp(request.headers);
  const { success: withinLimit } = rateLimit(`actor-registration:${ip}`, {
    limit: 5,
    windowMs: 60_000,
  });
  if (!withinLimit) {
    return NextResponse.json(
      { success: false, message: "Too many submissions. Please try again in a minute." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = actorRegistrationSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      },
      { status: 422 },
    );
  }

  const data = sanitizeFields(parsed.data);

  if (isResendConfigured && resend) {
    const { subject, html } = actorRegistrationEmail(data);
    try {
      await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: SITE.adminEmail,
        replyTo: data.email,
        subject,
        html,
      });
    } catch (error) {
      console.error("[actor-registration] Resend send failed:", error);
      return NextResponse.json(
        { success: false, message: "We couldn't submit your profile right now. Please try WhatsApp instead." },
        { status: 502 },
      );
    }
  } else {
    console.warn("[actor-registration] RESEND_API_KEY not set — skipping email, logging submission.");
    console.info("[actor-registration] submission:", data);
  }

  return NextResponse.json({
    success: true,
    message: "You're on the talent desk! We'll reach out when a matching role comes up.",
  });
}
