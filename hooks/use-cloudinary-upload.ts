"use client";

import * as React from "react";

export interface UploadState {
  status: "idle" | "uploading" | "success" | "error";
  progress: number;
  url: string | null;
  error: string | null;
}

interface UseCloudinaryUploadOptions {
  resourceType: "image" | "video";
  folder: string;
}

const initialState: UploadState = { status: "idle", progress: 0, url: null, error: null };

/**
 * Uploads directly from the browser to Cloudinary's unsigned upload endpoint via XHR,
 * so we get real progress events and avoid routing large reel files through our own
 * serverless function. Requires NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME + an unsigned preset.
 */
export function useCloudinaryUpload({ resourceType, folder }: UseCloudinaryUploadOptions) {
  const [state, setState] = React.useState<UploadState>(initialState);

  const upload = React.useCallback(
    (file: File) => {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        setState({
          status: "error",
          progress: 0,
          url: null,
          error: "Uploads are not configured yet. Please contact us directly via WhatsApp.",
        });
        return;
      }

      setState({ status: "uploading", progress: 0, url: null, error: null });

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("folder", folder);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setState((prev) => ({ ...prev, progress }));
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText) as { secure_url: string };
            setState({ status: "success", progress: 100, url: response.secure_url, error: null });
          } catch {
            setState({ status: "error", progress: 0, url: null, error: "Upload response was invalid." });
          }
        } else {
          setState({ status: "error", progress: 0, url: null, error: "Upload failed. Please try again." });
        }
      };

      xhr.onerror = () => {
        setState({ status: "error", progress: 0, url: null, error: "Network error during upload." });
      };

      xhr.send(formData);
    },
    [resourceType, folder],
  );

  const reset = React.useCallback(() => setState(initialState), []);

  return { ...state, upload, reset };
}
