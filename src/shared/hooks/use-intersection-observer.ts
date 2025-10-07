import { useMemo } from "react"

import { usePreservedCallback } from "./use-preserved-callback"
import { useRefEffect } from "./use-ref-effect"

export function useIntersectionObserver<TElement extends HTMLElement = HTMLElement>(
  callback: (entry: IntersectionObserverEntry) => void,
  // eslint-disable-next-line no-undef
  options: IntersectionObserverInit
): (element: TElement | null) => void {
  const preservedCallback = usePreservedCallback(callback)

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === "undefined") {
      return
    }

    return new IntersectionObserver(([entry]) => {
      preservedCallback(entry)
    }, options)
  }, [preservedCallback, options])

  return useRefEffect<TElement>(
    (element) => {
      observer?.observe(element)
      return () => observer?.unobserve(element)
    },
    [preservedCallback, options]
  )
}
