import { cva } from "class-variance-authority"
import { useState, type HTMLAttributes } from "react"

import { cn } from "@/shared/utils"

import { AvatarProvider, type ImageStatus } from "./avatar-context"

const avatarVariants = cva(
  `w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-200`,
  {
    variants: {
      error: {
        true: "bg-gray-200",
        false: ""
      }
    }
  }
)

export default function Avatar({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const [imageLoadingStatus, setImageLoadingStatus] = useState<ImageStatus>("idle")

  return (
    <AvatarProvider value={{ imageLoadingStatus, onImageLoadingStatusChange: setImageLoadingStatus }}>
      <div className={cn(avatarVariants({ error: imageLoadingStatus === "error" }), className)} {...restProps}>
        {children}
      </div>
    </AvatarProvider>
  )
}
