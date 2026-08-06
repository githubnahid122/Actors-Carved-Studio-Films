/**
 * Minimal fixed-window rate limiter for form/API routes.
 *
 * Uses an in-memory map by default, which is sufficient to deter casual abuse on a
 * single Vercel serverless instance but does not share state across regions/instances.
 * For strict multi-instance guarantees, set UPSTASH_REDIS_REST_URL / _TOKEN and swap
 * this implementation for `@upstash/ratelimit` — the call signature below is designed
 * to make that a drop-in change.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

export function rateLimit(
  identifier: string,
  { limit = 5, windowMs = 60_000 }: { limit?: number; windowMs?: number } = {},
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(identifier);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(identifier, { count: 1, resetAt });
    return { success: true, remaining: limit - 1, resetAt };
  }

  if (existing.count >= limit) {
    return { success: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { success: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}

/** Best-effort client identifier from request headers (works behind Vercel's proxy). */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return headers.get("x-real-ip") ?? "unknown";
}
