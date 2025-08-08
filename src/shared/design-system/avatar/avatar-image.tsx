import { useEffect } from "react"

import { useAvatar } from "./avatar-context"
import useImageLoadingStatus from "./use-image-loading-status"

import type { ImgHTMLAttributes } from "react"

export default function AvatarImage({ src, alt, ...restProps }: ImgHTMLAttributes<HTMLImageElement>) {
  const { onImageLoadingStatusChange } = useAvatar()
  const imageLoadingStatus = useImageLoadingStatus(src)

  useEffect(() => {
    if (imageLoadingStatus !== "idle") {
      onImageLoadingStatusChange(imageLoadingStatus)
    }
  }, [imageLoadingStatus, onImageLoadingStatusChange])

  return imageLoadingStatus === "loaded" ? <img src={src} alt={alt} {...restProps} /> : null
}
