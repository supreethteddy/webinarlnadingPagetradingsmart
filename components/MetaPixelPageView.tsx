"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixelPageView() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (!pathname || typeof window.fbq !== "function") return;

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}
