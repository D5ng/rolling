import { createBrowserRouter, RouterProvider } from "react-router"

import LandingPage from "./pages/landing-page"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    }
  ])

  return <RouterProvider router={router} />
}
