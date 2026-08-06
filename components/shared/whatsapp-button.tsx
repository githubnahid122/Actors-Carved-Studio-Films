import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message: string;
  className?: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
}

export function WhatsAppButton({
  message,
  className,
  label = "Chat on WhatsApp",
  variant = "outline",
}: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} className={cn(className)}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        {label}
      </a>
    </Button>
  );
}
