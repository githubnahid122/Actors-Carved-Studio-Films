import { z } from "zod";

export const COURSE_INTERESTS = [
  "3 Months Weekend Program",
  "6 Months Advanced Program",
  "1 Year Flagship Diploma",
  "Not sure yet — need guidance",
] as const;

export const academyEnquirySchema = z.object({
  name: z.string().min(2, "Name is required").max(80),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  courseInterest: z.enum(COURSE_INTERESTS),
  message: z.string().max(1500).optional().or(z.literal("")),
});

export type AcademyEnquiryInput = z.infer<typeof academyEnquirySchema>;
