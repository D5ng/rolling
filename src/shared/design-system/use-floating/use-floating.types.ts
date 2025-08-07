import type { RefObject } from "react"

export type Placement = "top" | "left" | "bottom" | "right"

export interface UsePositionParams {
  offset?: number
  placement?: Placement
}

export interface UseFloatingReturn<TElement extends HTMLElement> {
  domReferenceRef: RefObject<TElement | null>
  floatingReferenceRef: RefObject<TElement | null>
  setReference: (node: TElement | null) => void
  setFloatingReference: (node: TElement | null) => void
  computedOffset: ComputedOffset
}

export interface ComputedOffset {
  position: "absolute"
  top: string
  left: string
}
