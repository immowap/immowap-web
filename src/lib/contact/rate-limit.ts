import {
  CONTACT_RATE_LIMIT_MAX,
  CONTACT_RATE_LIMIT_SLIDING_MS,
  CONTACT_RATE_LIMIT_WINDOW_MS,
} from "./constants";

interface RateEntry {
  lastAt: number;
  hits: number[];
}

const store = new Map<string, RateEntry>();

function pruneHits(hits: number[], now: number): number[] {
  return hits.filter((t) => now - t < CONTACT_RATE_LIMIT_SLIDING_MS);
}

/**
 * In-memory rate limiter — suitable for single-instance deployments.
 * For multi-region/serverless at scale, replace with Redis or edge KV.
 */
export function checkContactRateLimit(clientKey: string): {
  allowed: boolean;
  reason?: "rapid" | "quota";
} {
  const now = Date.now();
  const entry = store.get(clientKey) ?? { lastAt: 0, hits: [] };

  if (now - entry.lastAt < CONTACT_RATE_LIMIT_WINDOW_MS) {
    return { allowed: false, reason: "rapid" };
  }

  const hits = pruneHits(entry.hits, now);
  if (hits.length >= CONTACT_RATE_LIMIT_MAX) {
    return { allowed: false, reason: "quota" };
  }

  hits.push(now);
  store.set(clientKey, { lastAt: now, hits });

  return { allowed: true };
}
