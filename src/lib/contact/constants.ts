export const CONTACT_LIMITS = {
  name: 120,
  email: 254,
  subject: 200,
  message: 5000,
  phone: 40,
  location: 120,
  goal: 80,
  projectType: 80,
} as const;

/** Minimum interval between submissions from the same client (ms). */
export const CONTACT_RATE_LIMIT_WINDOW_MS = 60_000;

/** Max submissions per IP within the sliding window. */
export const CONTACT_RATE_LIMIT_MAX = 5;

export const CONTACT_RATE_LIMIT_SLIDING_MS = 15 * 60_000;
