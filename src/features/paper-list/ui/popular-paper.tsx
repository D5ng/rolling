import { PAPER_LIMIT, PAPER_OFFSET } from "@/entities/paper"

import { usePopularPapers } from "../models/use-popular-papers.query"

import PaperList from "./paper-list"
import PaperSection from "./paper-section"

export default function PopularPaper() {
  const { data } = usePopularPapers({ limit: PAPER_LIMIT, offset: PAPER_OFFSET })

  return (
    <PaperSection renderTitle="인기 롤링 페이퍼 🔥">
      <PaperList papers={data!.results} />
    </PaperSection>
  )
}
