import { z } from "zod";

export const contactEnquirySchema = z.object({
  name: z.string().min(2, "Name is required").max(80),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .max(20)
    .regex(/^[0-9+\-\s()]*$/, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(2, "Subject is required").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactEnquiryInput = z.infer<typeof contactEnquirySchema>;
