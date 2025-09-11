import type { Mode, Placement, Side } from "./use-floating.types"

export function calculatorsPosition(placement: Placement, anchorRect: DOMRect, floatingRect: DOMRect, offset: number) {
  const { side, mode } = parsePlacement(placement)

  if (side === "top" || side === "bottom") {
    return calculatorPositionForVertical({ side, mode, anchorRect, floatingRect, offset })
  }

  if (side === "left" || side === "right") {
    return calculatorPositionForHorizontal({ side, mode, anchorRect, floatingRect, offset })
  }

  return { top: 0, left: 0 }
}

function align({ start, size, floatingSize, mode }: { start: number; size: number; floatingSize: number; mode: Mode }) {
  switch (mode) {
    case "start":
      return start
    case "end":
      return start + size - floatingSize
    case "center":
    default:
      return start + (size - floatingSize) / 2
  }
}

function calculatorPositionForVertical({
  side,
  mode,
  anchorRect,
  floatingRect,
  offset
}: {
  side: Side
  mode: Mode
  anchorRect: DOMRect
  floatingRect: DOMRect
  offset: number
}) {
  const top = side === "top" ? anchorRect.top - floatingRect.height - offset : anchorRect.bottom + offset
  const left = align({
    start: anchorRect.left,
    size: anchorRect.width,
    floatingSize: floatingRect.width,
    mode
  })

  return { top, left }
}

function calculatorPositionForHorizontal({
  side,
  mode,
  anchorRect,
  floatingRect,
  offset
}: {
  side: Side
  mode: Mode
  anchorRect: DOMRect
  floatingRect: DOMRect
  offset: number
}) {
  const top = align({
    start: anchorRect.top,
    size: anchorRect.height,
    floatingSize: floatingRect.height,
    mode
  })
  const left = side === "left" ? anchorRect.left - floatingRect.width - offset : anchorRect.right - offset

  return { top, left }
}

function parsePlacement(placement: Placement): {
  side: Side
  mode: Mode
} {
  const [side, alignment] = placement.split("-") as ["top" | "bottom" | "left" | "right", "start" | "end" | undefined]
  const mode = alignment ?? "center"

  return { side, mode }
}
