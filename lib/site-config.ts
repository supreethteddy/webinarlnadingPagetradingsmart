/** Public site URL — set NEXT_PUBLIC_SITE_URL in Vercel for production. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://webinarlnading-pagetradingsmart.vercel.app";

export const SITE_NAME = "TradingSmart.ai";

export const ROUTES = {
  home: "/",
  partnership: "/partnership",
} as const;
