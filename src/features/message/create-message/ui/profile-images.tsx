import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import { Suspense } from "react"
import { ErrorBoundary, type FallbackProps } from "react-error-boundary"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/design-system/avatar"
import { Button } from "@/shared/design-system/button"
import { cn } from "@/shared/utils"

import useFetchProfiles from "../model/use-fetch-profiles"

import type { ProfileImage } from "../model/types"

interface Props {
  selectedImage: string
  onSelectedImage: (url: string) => void
}

export default function ProfileImages({ selectedImage, onSelectedImage }: Props) {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary onReset={reset} FallbackComponent={ProfileImageError}>
      <Suspense fallback={<ProfileImagesSkeleton />}>
        <ProfileImageList selectedImage={selectedImage} onSelectedImage={onSelectedImage} />
      </Suspense>
    </ErrorBoundary>
  )
}

function ProfileImageList({ selectedImage, onSelectedImage }: Props) {
  const { data } = useFetchProfiles()

  return (
    <ul className="flex flex-wrap gap-1">
      {data.map((image) => (
        <li key={image.id}>
          <button onClick={() => onSelectedImage(image.url)} type="button">
            <ProfileImageItem isSelectedImage={selectedImage === image.url} {...image} />
          </button>
        </li>
      ))}
    </ul>
  )
}

function ProfileImageItem({ url, isSelectedImage }: ProfileImage & { isSelectedImage: boolean }) {
  return (
    <Avatar className={cn("w-14 h-14", isSelectedImage && "border-2 border-purple-700")}>
      <AvatarImage src={url} alt={"프로필 이미지 섬네일"} />
      <AvatarFallback />
    </Avatar>
  )
}

function ProfileImagesSkeleton({ itemCount = 7 }: { itemCount?: number }) {
  return (
    <ul className="flex gap-1">
      {Array.from({ length: itemCount }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="w-14 h-14 rounded-full bg-gray-200 animate-pulse" />
      ))}
    </ul>
  )
}

function ProfileImageError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-gray-200 p-3 rounded-xl">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-gray-500">{error.message}</p>
      </div>
      <Button onClick={resetErrorBoundary}>다시 시도</Button>
    </div>
  )
}
