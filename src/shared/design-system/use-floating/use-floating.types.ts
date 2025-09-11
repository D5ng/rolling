import type { RefObject } from "react"

export type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "left"
  | "left-start"
  | "left-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"

export type Side = "top" | "left" | "bottom" | "right"

export type Mode = "start" | "center" | "end"

export interface UsePositionParams {
  offset?: number
  placement?: Placement
}

export interface FloatingStyle {
  position: "absolute"
  top: string
  left: string
}

export interface PositionCalculator {
  top: number
  left: number
}

export interface UseFloatingReturn<TElement extends HTMLElement> {
  domReferenceRef: RefObject<TElement>
  floatingReferenceRef: RefObject<TElement>
  setReference: (node: TElement | null) => void
  setFloatingReference: (node: TElement | null) => void
  floatingStyle: FloatingStyle
}
