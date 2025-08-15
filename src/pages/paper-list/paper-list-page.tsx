import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { PopularPaper, RecentPaper } from "@/features/paper-list"
import { Header } from "@/widgets"

import PaperListErrorFallback from "./paper-list-error-fallback"
import PaperListSkeleton from "./paper-list-skeleton"

export default function PaperListPage() {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <>
      <Header />
      <main className="desktop:w-[1200px] desktop:mx-auto">
        <ErrorBoundary FallbackComponent={PaperListErrorFallback} onReset={reset}>
          <Suspense fallback={<PaperListSkeleton itemCount={4} />}>
            <PopularPaper />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={PaperListErrorFallback} onReset={reset}>
          <Suspense fallback={<PaperListSkeleton itemCount={4} />}>
            <RecentPaper />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}
