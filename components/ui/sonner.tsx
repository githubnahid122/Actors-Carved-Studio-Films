"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-card! text-card-foreground! border-border! shadow-lg! rounded-sm!",
          description: "text-muted!",
          actionButton: "bg-gold! text-primary-foreground!",
          cancelButton: "bg-secondary! text-secondary-foreground!",
          error: "border-destructive/60!",
          success: "border-gold/60!",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
