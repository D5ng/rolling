import CreateMessagePage from "./create-message.page"

import type { RouteObject } from "react-router"

export const createMessageRoute: RouteObject = {
  path: "/paper/:id/create-message",
  element: <CreateMessagePage />
}
