import { useCallback, useEffect, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function usePreservedCallback<Arguments extends any[] = any[], ReturnValue = unknown>(
  callback: (...args: Arguments) => ReturnValue
) {
  const preservedCallback = useRef(callback)

  useEffect(() => {
    preservedCallback.current = callback
  }, [callback])

  return useCallback((...args: Arguments) => {
    return preservedCallback.current(...args)
  }, [])
}
