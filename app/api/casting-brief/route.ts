import { NextResponse, type NextRequest } from "next/server";

import { castingBriefSchema } from "@/lib/schemas/casting-brief";
import { castingBriefEmail } from "@/lib/email-templates/casting-brief";
import { resend, isResendConfigured, RESEND_FROM_EMAIL } from "@/lib/resend/client";
import { SITE } from "@/lib/constants";
import { sanitizeFields } from "@/lib/sanitize";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import type { ApiResponse } from "@/types/api";

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  const ip = getClientIp(request.headers);
  const { success: withinLimit } = rateLimit(`casting-brief:${ip}`, { limit: 5, windowMs: 60_000 });
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

  const parsed = castingBriefSchema.safeParse(json);
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
    const { subject, html } = castingBriefEmail(data);
    try {
      await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: SITE.adminEmail,
        replyTo: data.email,
        subject,
        html,
      });
    } catch (error) {
      console.error("[casting-brief] Resend send failed:", error);
      return NextResponse.json(
        { success: false, message: "We couldn't send your brief right now. Please try WhatsApp instead." },
        { status: 502 },
      );
    }
  } else {
    console.warn("[casting-brief] RESEND_API_KEY not set — skipping email, logging submission.");
    console.info("[casting-brief] submission:", data);
  }

  return NextResponse.json({
    success: true,
    message: "Your casting brief has been received. Our desk will respond within 48 hours.",
  });
}
