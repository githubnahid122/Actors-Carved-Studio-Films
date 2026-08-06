"use client";

import * as React from "react";
import { UploadCloud, CheckCircle2, XCircle, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { useCloudinaryUpload } from "@/hooks/use-cloudinary-upload";
import { Progress } from "@/components/ui/progress";

interface UploadInputProps {
  id: string;
  label: string;
  resourceType: "image" | "video";
  folder: string;
  accept: readonly string[];
  maxSizeMb: number;
  onUploaded: (url: string) => void;
  required?: boolean;
  className?: string;
}

/** File upload control with client-side type/size validation and live progress. */
export function UploadInput({
  id,
  label,
  resourceType,
  folder,
  accept,
  maxSizeMb,
  onUploaded,
  required,
  className,
}: UploadInputProps) {
  const { status, progress, url, error, upload, reset } = useCloudinaryUpload({
    resourceType,
    folder,
  });
  const [validationError, setValidationError] = React.useState<string | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (status === "success" && url) {
      onUploaded(url);
    }
  }, [status, url, onUploaded]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!accept.includes(file.type)) {
      setValidationError(`Unsupported file type. Accepted: ${accept.join(", ")}`);
      return;
    }
    if (file.size > maxSizeMb * 1024 * 1024) {
      setValidationError(`File is too large. Maximum size is ${maxSizeMb}MB.`);
      return;
    }

    setValidationError(null);
    setFileName(file.name);
    upload(file);
  }

  const combinedError = validationError ?? error;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-input bg-surface px-4 py-6 text-center transition-colors hover:border-gold",
          combinedError && "border-destructive/60",
          status === "success" && "border-gold/60",
        )}
      >
        {status === "success" ? (
          <CheckCircle2 className="size-6 text-gold" />
        ) : status === "error" ? (
          <XCircle className="size-6 text-destructive" />
        ) : status === "uploading" ? (
          <Loader2 className="size-6 animate-spin text-gold" />
        ) : (
          <UploadCloud className="size-6 text-muted" />
        )}
        <span className="text-sm font-medium text-foreground">
          {fileName ?? label}
          {required && <span className="text-gold"> *</span>}
        </span>
        <span className="text-xs text-muted-foreground">
          Max {maxSizeMb}MB &middot; {accept.map((a) => a.split("/")[1]).join(", ")}
        </span>
        <input
          id={id}
          type="file"
          accept={accept.join(",")}
          className="sr-only"
          onChange={handleChange}
          aria-invalid={!!combinedError}
        />
      </label>

      {status === "uploading" && <Progress value={progress} />}

      {combinedError && (
        <p role="alert" className="text-xs font-medium text-destructive">
          {combinedError}
        </p>
      )}
      {status === "success" && (
        <button
          type="button"
          onClick={() => {
            reset();
            setFileName(null);
          }}
          className="self-start text-xs text-muted underline-offset-2 hover:text-gold hover:underline"
        >
          Replace file
        </button>
      )}
    </div>
  );
}
