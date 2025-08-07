import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"

import { useDebouncedCallback } from "../use-debounced-callback"

import { getFloatingPosition } from "./get-floating-position"
import { getFloatingStyle } from "./get-floating-style"

import type { PositionCalculator, UseFloatingReturn, UsePositionParams } from "./use-floating.types"

const DEBOUNCE_DELAY = 200

export default function useFloating<TElement extends HTMLElement>({
  offset = 0,
  placement = "bottom"
}: UsePositionParams = {}): UseFloatingReturn<TElement> {
  const [position, setPosition] = useState<PositionCalculator>({
    top: 0,
    left: 0
  })

  const domReferenceRef = useRef<TElement>(null)
  const floatingReferenceRef = useRef<TElement>(null)

  const [isMounted, setIsMounted] = useState(false)

  const setReference = useCallback((node: TElement | null) => {
    domReferenceRef.current = node
    setIsMounted(Boolean(node) && Boolean(floatingReferenceRef.current))
  }, [])

  const setFloatingReference = useCallback((node: TElement | null) => {
    floatingReferenceRef.current = node
    setIsMounted(Boolean(node) && Boolean(domReferenceRef.current))
  }, [])

  const updatePosition = useCallback(() => {
    if (!domReferenceRef.current || !floatingReferenceRef.current) {
      return
    }

    const position = getFloatingPosition(domReferenceRef.current, floatingReferenceRef.current, {
      offset,
      placement
    })

    setPosition(position)
  }, [offset, placement])

  const debouncedUpdatePosition = useDebouncedCallback(updatePosition, DEBOUNCE_DELAY)

  useLayoutEffect(() => {
    if (!domReferenceRef.current || !floatingReferenceRef.current || !isMounted) {
      return
    }

    debouncedUpdatePosition()

    const resizeObserver = new ResizeObserver(debouncedUpdatePosition)
    resizeObserver.observe(domReferenceRef.current!)
    resizeObserver.observe(floatingReferenceRef.current!)
    window.addEventListener("resize", debouncedUpdatePosition)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", debouncedUpdatePosition)
    }
  }, [isMounted, debouncedUpdatePosition])

  const refs = useMemo(
    () => ({
      domReferenceRef,
      floatingReferenceRef,
      setReference,
      setFloatingReference,
      floatingStyle: getFloatingStyle(position)
    }),
    [setReference, setFloatingReference, position]
  )

  return refs as UseFloatingReturn<TElement>
}
