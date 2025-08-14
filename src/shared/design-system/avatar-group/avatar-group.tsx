import { Children, type ReactNode } from "react"

import { clamp, cn } from "@/shared/utils"

import Avatar from "../avatar/avatar"
import AvatarFallback from "../avatar/avatar-fallback"

const MAX_AVATAR_COUNT = 99

interface Props {
  total?: string | number
  renderSurplus?: (count: number) => ReactNode
  className?: string
  children: ReactNode
}

export default function AvatarGroup({ total = 0, children, className, renderSurplus }: Props) {
  const parsedTotal = parseNumber(total)
  const renderedCount = Children.count(children)
  const remainingCount = clamp(parsedTotal - renderedCount, 0, MAX_AVATAR_COUNT)

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

function parseNumber(value: string | number): number {
  let parsedValue = value

  if (typeof value === "string") {
    parsedValue = Number(value)
  }

  if (isNaN(parsedValue as number)) {
    throw new Error(`${value} 값이 숫자가 아니에요.`)
  }

  return parsedValue as number
}
