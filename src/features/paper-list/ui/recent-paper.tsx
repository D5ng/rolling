import { PAPER_LIMIT, PAPER_OFFSET } from "@/entities/paper"

import { useRecentPapers } from "../models/use-recent-papers.query"

import PaperList from "./paper-list"
import PaperSection from "./paper-section"

export default function RecentPaper() {
  const { data } = useRecentPapers({ limit: PAPER_LIMIT, offset: PAPER_OFFSET })

  return (
    <PaperSection renderTitle="최근에 만든 롤링 페이퍼 ⭐️️">
      <PaperList papers={data!.results} />
    </PaperSection>
  )
}
