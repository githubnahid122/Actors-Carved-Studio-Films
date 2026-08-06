import { cloudinary, isCloudinaryConfigured } from "@/lib/cloudinary/config";

export interface CloudinaryUploadResult {
  url: string;
  secureUrl: string;
  publicId: string;
  resourceType: string;
  bytes: number;
  format: string;
}

/**
 * Uploads a server-received file buffer to Cloudinary under a folder scoped to the
 * submission type (headshots vs. showreels), tagged for later moderation/search.
 */
export async function uploadBufferToCloudinary(
  buffer: Buffer,
  options: { folder: string; resourceType: "image" | "video"; filename?: string },
): Promise<CloudinaryUploadResult> {
  if (!isCloudinaryConfigured) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET.",
    );
  }

  const base64 = buffer.toString("base64");
  const resourceMime = options.resourceType === "image" ? "image/jpeg" : "video/mp4";
  const dataUri = `data:${resourceMime};base64,${base64}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    folder: options.folder,
    resource_type: options.resourceType,
    filename_override: options.filename,
    use_filename: true,
    unique_filename: true,
    overwrite: false,
  });

  return {
    url: result.url,
    secureUrl: result.secure_url,
    publicId: result.public_id,
    resourceType: result.resource_type,
    bytes: result.bytes,
    format: result.format,
  };
}
