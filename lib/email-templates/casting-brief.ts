import type { CastingBriefInput } from "@/lib/schemas/casting-brief";
import { renderNotificationEmail } from "@/lib/email-templates/render";

export function castingBriefEmail(input: CastingBriefInput): { subject: string; html: string } {
  return {
    subject: `New Casting Brief: ${input.projectTitle} (${input.companyName})`,
    html: renderNotificationEmail({
      heading: "New Casting Brief Received",
      intro: "A production/agency has submitted a casting brief via the Casting Desk.",
      rows: [
        { label: "Company / Production", value: input.companyName },
        { label: "Contact Name", value: input.contactName },
        { label: "Email", value: input.email },
        { label: "Phone", value: input.phone },
        { label: "Project Type", value: input.projectType },
        { label: "Project Title", value: input.projectTitle },
        { label: "Role Requirements", value: input.roleRequirements },
        { label: "Number of Roles", value: String(input.numberOfRoles) },
        { label: "Shoot Location", value: input.shootLocation },
        { label: "Timeline", value: input.timeline },
        { label: "Budget Range", value: input.budgetRange },
        { label: "Additional Notes", value: input.additionalNotes ?? "" },
      ],
    }),
  };
}
