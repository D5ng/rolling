import { RECIPIENTS_LIMIT, RECIPIENTS_OFFSET } from "@/entities/recipient"

import { usePopularRecipients } from "../models/use-popular-recipients"

import PaperList from "./paper-list"
import PaperSection from "./paper-section"

export default function PopularPaper() {
  const { data } = usePopularRecipients({ limit: RECIPIENTS_LIMIT, offset: RECIPIENTS_OFFSET })

  return (
    <PaperSection renderTitle="인기 롤링 페이퍼 🔥">
      <PaperList recipients={data!.results} />
    </PaperSection>
  )
}
