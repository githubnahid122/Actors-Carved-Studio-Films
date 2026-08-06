import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const isResendConfigured = Boolean(apiKey);

export const resend = apiKey ? new Resend(apiKey) : null;

export const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Actors Carved Studio <notifications@actorscarved.com>";
