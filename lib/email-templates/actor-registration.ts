import type { ActorRegistrationInput } from "@/lib/schemas/actor-registration";
import { renderNotificationEmail } from "@/lib/email-templates/render";

export function actorRegistrationEmail(input: ActorRegistrationInput): {
  subject: string;
  html: string;
} {
  return {
    subject: `New Actor Registration: ${input.fullName}`,
    html: renderNotificationEmail({
      heading: "New Actor Registration",
      intro: "A new actor has registered with the casting talent pool.",
      rows: [
        { label: "Full Name", value: input.fullName },
        { label: "Email", value: input.email },
        { label: "Phone", value: input.phone },
        { label: "Age", value: String(input.age) },
        { label: "Gender", value: input.gender },
        { label: "City", value: input.city },
        { label: "Experience", value: input.experienceLevel },
        { label: "Languages", value: input.languages },
        { label: "Height (cm)", value: input.heightCm ? String(input.heightCm) : "" },
        {
          label: "Headshot",
          value: `<a href="${input.headshotUrl}" style="color:#c9a24b;">View headshot</a>`,
        },
        {
          label: "Showreel",
          value: input.reelUrl ? `<a href="${input.reelUrl}" style="color:#c9a24b;">View reel</a>` : "",
        },
        { label: "Instagram", value: input.instagramHandle ?? "" },
        { label: "About", value: input.aboutYou ?? "" },
      ],
    }),
  };
}
