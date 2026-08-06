import { z } from "zod";

export const PROJECT_TYPES = [
  "TVC / Advertisement",
  "Feature Film",
  "Web Series",
  "Music Video",
  "Serial / TV Show",
  "Short Film",
  "Corporate Film",
  "Ecommerce / UGC",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under ₹1 Lakh",
  "₹1 – 5 Lakh",
  "₹5 – 15 Lakh",
  "₹15 – 50 Lakh",
  "₹50 Lakh+",
  "Prefer to discuss",
] as const;

/** B2B casting brief — agencies/brands/directors submitting a role requirement. */
export const castingBriefSchema = z.object({
  companyName: z.string().min(2, "Company / production name is required").max(120),
  contactName: z.string().min(2, "Contact name is required").max(80),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  projectType: z.enum(PROJECT_TYPES),
  projectTitle: z.string().min(2, "Project title is required").max(150),
  roleRequirements: z
    .string()
    .min(20, "Describe the role(s) you're casting for in at least 20 characters")
    .max(3000),
  numberOfRoles: z.coerce.number().int().min(1).max(500),
  shootLocation: z.string().min(2, "Shoot location is required").max(150),
  timeline: z.string().min(2, "Timeline / shoot dates are required").max(150),
  budgetRange: z.enum(BUDGET_RANGES),
  additionalNotes: z.string().max(2000).optional().or(z.literal("")),
});

export type CastingBriefInput = z.infer<typeof castingBriefSchema>;
