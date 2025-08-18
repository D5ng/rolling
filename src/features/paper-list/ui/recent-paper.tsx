import { RECIPIENTS_LIMIT, RECIPIENTS_OFFSET } from "@/entities/paper"

import { useRecentRecipients } from "../models/use-recent-recipients"

import PaperList from "./paper-list"
import PaperSection from "./paper-section"

export default function RecentPaper() {
  const { data } = useRecentRecipients({ limit: RECIPIENTS_LIMIT, offset: RECIPIENTS_OFFSET })

  return (
    <PaperSection renderTitle="최근에 만든 롤링 페이퍼 ⭐️️">
      <PaperList recipients={data!.results} />
    </PaperSection>
  )
}
