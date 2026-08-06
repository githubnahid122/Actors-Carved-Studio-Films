"use client";

import * as React from "react";
import { toast } from "sonner";

import type { ApiResponse } from "@/types/api";

/**
 * POSTs a JSON payload to an API route and surfaces success/error state via toast —
 * the shared plumbing behind every form on the site (casting brief, actor registration,
 * academy enquiry, contact).
 */
export function useApiFormSubmit<TInput>(endpoint: string) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const submit = React.useCallback(
    async (payload: TInput, onSuccess?: () => void): Promise<boolean> => {
      setIsSubmitting(true);
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = (await response.json()) as ApiResponse;

        if (result.success) {
          toast.success(result.message);
          onSuccess?.();
          return true;
        }

        toast.error(result.message);
        return false;
      } catch {
        toast.error("Something went wrong. Please check your connection and try again.");
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [endpoint],
  );

  return { submit, isSubmitting };
}
