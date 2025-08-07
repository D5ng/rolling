import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"

import { useDebouncedCallback } from "../use-debounced-callback"

import { positionCalculators } from "./position-calculators"

import type { ComputedOffset, UseFloatingReturn, UsePositionParams } from "./use-floating.types"

const DEBOUNCE_DELAY = 200

export default function useFloating<TElement extends HTMLElement>({
  offset = 0,
  placement = "bottom"
}: UsePositionParams = {}): UseFloatingReturn<TElement> {
  const [computedOffset, setComputedOffset] = useState<ComputedOffset>({
    position: "absolute",
    top: "",
    left: ""
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

    const position = calculateFloatingPosition(domReferenceRef.current, floatingReferenceRef.current, {
      offset,
      placement
    })
    setComputedOffset(position)
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
      computedOffset
    }),
    [setReference, setFloatingReference, computedOffset]
  )

  return refs
}

function calculateFloatingPosition<TElement extends HTMLElement>(
  domReference: TElement,
  floatingReference: TElement,
  { offset = 0, placement = "bottom" }: UsePositionParams = {}
): ComputedOffset {
  const anchorRect = domReference.getBoundingClientRect()
  const floatingRect = floatingReference.getBoundingClientRect()

  const calculator = positionCalculators[placement]
  const { top, left } = calculator(anchorRect, floatingRect, offset)

  return {
    position: "absolute",
    top: `${top}px`,
    left: `${left}px`
  }
}
