import { useCallback, useRef, type DependencyList } from "react"

import { usePreservedCallback } from "./use-preserved-callback"

import type { CleanupCallback } from "storybook/internal/csf"

export function useRefEffect<TElement extends HTMLElement = HTMLElement>(
  callback: (element: TElement) => CleanupCallback | void,
  deps: DependencyList
) {
  const preservedCallback = usePreservedCallback(callback)
  const cleanupCallbackRef = useRef<CleanupCallback>(() => {})

  const effect = useCallback(
    (element: TElement | null) => {
      cleanupCallbackRef.current()
      cleanupCallbackRef.current = () => {}

      if (element === null) {
        return
      }

      const cleanup = preservedCallback(element)

      if (typeof cleanup === "function") {
        cleanupCallbackRef.current = cleanup
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [preservedCallback, ...deps]
  )

  return effect
}
