import { useCallback, useEffect, useRef } from "react"

export default function useDebouncedCallback(callback: () => void, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return useCallback(() => {
    if (timeoutRef.current) {
      return
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null
      callbackRef.current()
    }, delay)
  }, [delay])
}
