import type { ContactEnquiryInput } from "@/lib/schemas/contact-enquiry";
import { renderNotificationEmail } from "@/lib/email-templates/render";

export function contactEnquiryEmail(input: ContactEnquiryInput): { subject: string; html: string } {
  return {
    subject: `New Contact Enquiry: ${input.subject}`,
    html: renderNotificationEmail({
      heading: "New General Enquiry",
      intro: "A visitor has submitted the general contact form.",
      rows: [
        { label: "Name", value: input.name },
        { label: "Email", value: input.email },
        { label: "Phone", value: input.phone ?? "" },
        { label: "Subject", value: input.subject },
        { label: "Message", value: input.message },
      ],
    }),
  };
}
