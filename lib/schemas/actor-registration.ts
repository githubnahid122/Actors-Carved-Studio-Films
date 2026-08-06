import { z } from "zod";

export const EXPERIENCE_LEVELS = [
  "Fresher / No experience",
  "0 – 2 years",
  "2 – 5 years",
  "5+ years",
] as const;

export const GENDER_OPTIONS = ["Male", "Female", "Non-binary", "Prefer not to say"] as const;

/** B2C actor registration — individuals joining the casting talent pool. */
export const actorRegistrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(80),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  age: z.coerce.number().int().min(3, "Enter a valid age").max(90),
  gender: z.enum(GENDER_OPTIONS),
  city: z.string().min(2, "City is required").max(80),
  experienceLevel: z.enum(EXPERIENCE_LEVELS),
  languages: z.string().min(2, "List at least one language").max(200),
  heightCm: z.coerce.number().int().min(90).max(230).optional(),
  headshotUrl: z.string().url("Upload a headshot photo before submitting"),
  reelUrl: z.string().url().optional().or(z.literal("")),
  instagramHandle: z.string().max(60).optional().or(z.literal("")),
  aboutYou: z.string().max(1500).optional().or(z.literal("")),
});

export type ActorRegistrationInput = z.infer<typeof actorRegistrationSchema>;
