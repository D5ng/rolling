import { useEffect, type RefObject } from "react"

export default function useOutsideClick<TElement extends HTMLElement>(
  refs: RefObject<TElement | null> | RefObject<TElement | null>[],
  callback: () => void,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const refArray = Array.isArray(refs) ? refs : [refs]

    const listener = (event: MouseEvent | TouchEvent) => {
      const isClickInside = refArray.some((ref) => ref.current?.contains(event.target as Node))

      if (!isClickInside) {
        callback()
      }
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [refs, callback, enabled])
}
