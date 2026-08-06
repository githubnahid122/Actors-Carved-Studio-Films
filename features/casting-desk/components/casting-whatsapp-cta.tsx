import { WhatsAppButton } from "@/components/shared/whatsapp-button";

interface CastingWhatsAppCtaProps {
  variant: "brief" | "registration";
}

export function CastingWhatsAppCta({ variant }: CastingWhatsAppCtaProps) {
  const message =
    variant === "brief"
      ? "Hi Actors Carved Studio, I'd like to discuss a casting brief for an upcoming production."
      : "Hi Actors Carved Studio, I'd like to register as an actor on your casting desk.";

  return (
    <div className="flex flex-col items-start gap-3 rounded-md border border-border bg-surface p-6">
      <p className="text-sm text-muted">Prefer to talk it through directly?</p>
      <WhatsAppButton message={message} />
    </div>
  );
}
