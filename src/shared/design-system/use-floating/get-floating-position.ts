import { calculatorsPosition } from "./position-calculators"

import type { PositionCalculator, UsePositionParams } from "./use-floating.types"

export function getFloatingPosition<TElement extends HTMLElement>(
  domReference: TElement,
  floatingReference: TElement,
  { offset = 0, placement = "bottom" }: UsePositionParams = {}
): PositionCalculator {
  const anchorRect = domReference.getBoundingClientRect()
  const floatingRect = floatingReference.getBoundingClientRect()

  return calculatorsPosition(placement, anchorRect, floatingRect, offset)
}
