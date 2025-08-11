import { Children, type ReactNode } from "react"

import { cn } from "@/shared/utils"

import Avatar from "../avatar/avatar"
import AvatarFallback from "../avatar/avatar-fallback"

interface Props {
  total?: number
  children: ReactNode
  className?: string
}

export default function AvatarGroup({ total = 0, children, className }: Props) {
  const avatarCount = Children.count(children)
  const renderAvatarCount = total - avatarCount > 99 ? 99 : total - avatarCount

  return (
    <div className={cn("flex -space-x-3", className)}>
      {children}
      <Avatar className="w-7 h-7 bg-white border-white">
        <AvatarFallback>+{renderAvatarCount}</AvatarFallback>
      </Avatar>
    </div>
  )
}
