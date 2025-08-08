import { useEffect, useState } from "react"

import type { ImageStatus } from "./avatar-context"

export default function useImageLoadingStatus(src: string | undefined): ImageStatus {
  const [status, setStatus] = useState<ImageStatus>("idle")

  useEffect(() => {
    if (!src) {
      setStatus("error")
      return
    }

    const img = new Image()

    img.src = src

    img.onload = () => {
      setStatus("loaded")
    }

    img.onerror = () => {
      setStatus("error")
    }
  }, [src])

  return status
}
