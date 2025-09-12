import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createBrowserRouter, RouterProvider } from "react-router"
import { ToastContainer } from "react-toastify"

import { createPaperRoute } from "@/pages/create-paper"
import { landingRoute } from "@/pages/landing"
import { paperDetailRoute } from "@/pages/paper-detail"
import { paperListRoute } from "@/pages/paper-list"
import { SCREENS } from "@/shared/constants"
import { useWindowSize } from "@/shared/hooks"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      retry: 0,
      throwOnError: true
    },
    mutations: {
      retry: 0,
      throwOnError: true
    }
  }
})

export default function App() {
  const router = createBrowserRouter([landingRoute, paperListRoute, createPaperRoute, paperDetailRoute])

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <ResponsiveToastContainer />
    </QueryClientProvider>
  )
}

function ResponsiveToastContainer() {
  const { width } = useWindowSize()

  if (width < SCREENS.tablet) {
    return <ToastContainer position="bottom-center" closeOnClick />
  }

  return <ToastContainer position="top-right" closeOnClick />
}
