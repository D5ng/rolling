import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createBrowserRouter, RouterProvider } from "react-router"
import { ToastContainer } from "react-toastify"

import { createPaperRoute } from "@/pages/create-paper/ui/create-paper.route"
import { landingRoute } from "@/pages/landing"
import { paperListRoute } from "@/pages/paper-list"
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
  const router = createBrowserRouter([landingRoute, paperListRoute, createPaperRoute])

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

  if (width < 768) {
    return <ToastContainer position="bottom-center" closeOnClick />
  }

  return <ToastContainer position="top-right" closeOnClick />
}
