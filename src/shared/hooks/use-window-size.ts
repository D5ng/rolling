import { useCallback, useEffect, useState } from "react"

import { useDebouncedCallback } from "../design-system/use-debounced-callback"

interface UseWindowSizeOptions<InitializeWithValue extends boolean | undefined> {
  initializeWithValue: InitializeWithValue
  debounceDelay?: number
}

const DEFAULT_DELAY = 300

const isServer = typeof window === "undefined"

interface WindowSize<T extends number | undefined = number | undefined> {
  width: T
  height: T
}

export function useWindowSize(options: UseWindowSizeOptions<false>): WindowSize<undefined>
export function useWindowSize(options?: Partial<UseWindowSizeOptions<true>>): WindowSize<number>
export function useWindowSize(options: Partial<UseWindowSizeOptions<boolean>> = {}): WindowSize | WindowSize<number> {
  let { initializeWithValue = true } = options

  if (isServer) {
    initializeWithValue = false
  }

  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    if (initializeWithValue) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    return {
      width: undefined,
      height: undefined
    }
  })

  const debounceSetWindowSize = useDebouncedCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, options?.debounceDelay ?? DEFAULT_DELAY)

  const handleSize = useCallback(() => {
    const setSize = options?.debounceDelay ? debounceSetWindowSize : setWindowSize
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }, [debounceSetWindowSize, options?.debounceDelay, setWindowSize])

  useEffect(() => {
    window.addEventListener("resize", handleSize)

    return () => {
      window.removeEventListener("resize", handleSize)
    }
  }, [handleSize])

  return windowSize
}
