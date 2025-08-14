import { Suspense } from "react"

import PopularPaper from "@/features/paper-list/ui/popular-paper"
import RecentPaper from "@/features/paper-list/ui/recent-paper"
import { Header } from "@/widgets"

import PaperListSkeleton from "./paper-list-skeleton"

export default function PaperListPage() {
  return (
    <>
      <Header />
      <main className="desktop:w-[1200px] desktop:mx-auto">
        <Suspense fallback={<PaperListSkeleton itemCount={4} />}>
          <PopularPaper />
        </Suspense>
        <Suspense fallback={<PaperListSkeleton itemCount={4} />}>
          <RecentPaper />
        </Suspense>
      </main>
    </>
  )
}
