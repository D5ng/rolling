import { createContextScope } from "../create-context-scope"

export type ImageStatus = "idle" | "loading" | "loaded" | "error"

interface AvatarContextValue {
  imageLoadingStatus: ImageStatus
  onImageLoadingStatusChange: (status: ImageStatus) => void
}

const AvatarContext = createContextScope("Avatar")

export const [AvatarProvider, useAvatar] = AvatarContext<AvatarContextValue>()
