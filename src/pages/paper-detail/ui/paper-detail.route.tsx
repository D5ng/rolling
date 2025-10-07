import { Suspense } from "react"

import PaperDetailPage from "./paper-detail.page"
import PaperDetailSkeleton from "./paper-detail.skeleton"

import type { RouteObject } from "react-router"

export const paperDetailRoute: RouteObject = {
  path: "/paper/:id",
  element: (
    <Suspense fallback={<PaperDetailSkeleton />}>
      <PaperDetailPage />
    </Suspense>
  )
}
