import type { AcademyEnquiryInput } from "@/lib/schemas/academy-enquiry";
import { renderNotificationEmail } from "@/lib/email-templates/render";

export function academyEnquiryEmail(input: AcademyEnquiryInput): { subject: string; html: string } {
  return {
    subject: `New Academy Enquiry: ${input.name} (${input.courseInterest})`,
    html: renderNotificationEmail({
      heading: "New Academy Enquiry",
      intro: "A prospective student has enquired about the Acting Academy.",
      rows: [
        { label: "Name", value: input.name },
        { label: "Email", value: input.email },
        { label: "Phone", value: input.phone },
        { label: "Course Interest", value: input.courseInterest },
        { label: "Message", value: input.message ?? "" },
      ],
    }),
  };
}
