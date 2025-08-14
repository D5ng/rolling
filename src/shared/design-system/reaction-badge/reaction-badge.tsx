import { clamp, cn } from "@/shared/utils"

import type { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLSpanElement> {
  emoji: ReactNode
  count: number
}

const MAX_COUNT = 99
const MIN_COUNT = 0

export default function ReactionBadge({ emoji, count, className }: Props) {
  const clampedCount = count > MAX_COUNT ? "+99" : clamp(count, MIN_COUNT, MAX_COUNT)

  return (
    <div
      className={cn(
        "w-fit flex items-center justify-center gap-1 rounded-full bg-black/50 px-3 py-1.5 text-base",
        className
      )}
    >
      <span>{emoji}</span>
      <span className="text-white leading-5">{clampedCount}</span>
    </div>
  )
}
