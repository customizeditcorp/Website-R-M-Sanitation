"use client"

import { useSyncExternalStore } from "react"

const query = "(prefers-reduced-motion: reduce)"

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(query)
  mql.addEventListener("change", onChange)
  return () => mql.removeEventListener("change", onChange)
}

/**
 * true when motion may run. Server snapshot is `false`, so server HTML is always the
 * static, readable version — motion only appears after hydration on capable clients.
 */
export function useMotionAllowed() {
  return useSyncExternalStore(
    subscribe,
    () => !window.matchMedia(query).matches,
    () => false,
  )
}
