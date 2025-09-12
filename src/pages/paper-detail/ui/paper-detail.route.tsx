import PaperDetailPage from "./paper-detail.page"

import type { RouteObject } from "react-router"

export const paperDetailRoute: RouteObject = {
  path: "/paper/:id",
  element: <PaperDetailPage />
}
