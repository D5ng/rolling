import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Link } from "react-router"

import { Button } from "@/shared/design-system/button"
import { Header } from "@/widgets"

import PaperListErrorFallback from "./paper-list.error"
import PaperListSkeleton from "./paper-list.skeleton"
import PopularPaper from "./popular-paper"
import RecentPaper from "./recent-paper"

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

        <div className="w-full px-5 mt-10 desktop:flex desktop:justify-center">
          <Button asChild className="w-full h-14 rounded-xl desktop:w-[280px]">
            <Link to="/create-paper">나도 만들어보기</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
