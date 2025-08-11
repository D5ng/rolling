import { Children, type ReactNode } from "react"

import { cn } from "@/shared/utils"

import Avatar from "../avatar/avatar"
import AvatarFallback from "../avatar/avatar-fallback"

const MAX_AVATAR_COUNT = 99

interface Props {
  total?: number
  renderSurplus?: (count: number) => ReactNode
  className?: string
  children: ReactNode
}

export default function AvatarGroup({ total = 0, children, className, renderSurplus }: Props) {
  const renderedCount = Children.count(children)
  const remainingCount = calculateRemainingCount(total, renderedCount)

  return (
    <div className={cn("flex -space-x-3", className)}>
      {children}
      <SurPlusAvatar count={remainingCount} renderSurplus={renderSurplus} />
    </div>
  )
}

function SurPlusAvatar({ count, renderSurplus }: { count: number; renderSurplus?: (count: number) => ReactNode }) {
  if (count <= 0) {
    return null
  }

  return (
    renderSurplus?.(count) ?? (
      <Avatar className="w-7 h-7 bg-white border-white">
        <AvatarFallback>+{count}</AvatarFallback>
      </Avatar>
    )
  )
}

function calculateRemainingCount(total: number, count: number) {
  const remainingCount = total - count

  if (remainingCount <= 0) {
    return 0
  }

  if (remainingCount > MAX_AVATAR_COUNT) {
    return MAX_AVATAR_COUNT
  }

  return remainingCount
}
