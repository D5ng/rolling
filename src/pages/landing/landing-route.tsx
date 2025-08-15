import LandingPage from "./landing-page"

import type { RouteObject } from "react-router"

export const landingRoute: RouteObject = {
  path: "/",
  element: <LandingPage />
}
