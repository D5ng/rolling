import { useRecipients } from "../models"

import PaperList from "./paper-list"
import PaperSection from "./paper-section"

export default function PopularPaper() {
  const { data } = useRecipients({ type: "popular", limit: 100, offset: 0 })

  return (
    <PaperSection renderTitle="인기 롤링 페이퍼 🔥">
      <PaperList recipients={data!.results} />
    </PaperSection>
  )
}
