import { cn } from "@/shared/utils"

import { useAvatar } from "./avatar-context"

import type { HTMLAttributes } from "react"

export default function AvatarFallback({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const { imageLoadingStatus } = useAvatar()

  return imageLoadingStatus !== "loaded" ? (
    <div className={cn("text-gray-500 text-sm", className)} {...restProps}>
      {children}
    </div>
  ) : null
}
