export const containers = {
  page: "80rem",
  content: "48rem",
  article: "50rem",
  narrow: "40rem",
  wide: "90rem",
  dashboard: "72rem",
} as const;

export const containerClasses = {
  page: "mx-auto w-full max-w-7xl px-6 md:px-8",
  content: "mx-auto w-full max-w-3xl px-6 md:px-8",
  article: "mx-auto w-full max-w-[800px] px-6 md:px-8",
  narrow: "mx-auto w-full max-w-xl px-6 md:px-8",
  wide: "mx-auto w-full max-w-[90rem] px-6 md:px-8",
  dashboard: "mx-auto w-full max-w-6xl px-6 md:px-8",
} as const;
