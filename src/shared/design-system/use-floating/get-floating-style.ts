import type { FloatingStyle, PositionCalculator } from "./use-floating.types"

export function getFloatingStyle(position: PositionCalculator): FloatingStyle {
  return {
    position: "absolute",
    top: `${position.top}px`,
    left: `${position.left}px`
  }
}
