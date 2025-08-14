import type { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLSpanElement> {
  emoji: ReactNode
}

export default function ReactionBadge({ emoji, children }: Props) {
  return (
    <div className="flex items-center justify-center gap-1 rounded-full bg-black/50 px-3 py-1.5 text-base">
      <span>{emoji}</span>
      <span className="text-white leading-5">{children}</span>
    </div>
  )
}
