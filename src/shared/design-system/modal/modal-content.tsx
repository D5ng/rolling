import { cn } from "@/shared/utils"

import type { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function ModalContent({ children, className, ...restProps }: Props) {
  return (
    <div
      className={cn(
        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white drop-shadow-sm rounded-2xl",
        className
      )}
      {...restProps}
    >
      <div className="p-10 h-full">{children}</div>
    </div>
  )
}
