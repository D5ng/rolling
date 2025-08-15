import PaperListPage from "./paper-list-page"

import type { RouteObject } from "react-router"

export const paperListRoute: RouteObject = {
  path: "/lists",
  element: <PaperListPage />
}
