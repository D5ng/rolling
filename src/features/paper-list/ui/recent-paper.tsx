import { RECIPIENTS_LIMIT, RECIPIENTS_OFFSET } from "../models/paper-list.constants"
import { useRecipients } from "../models/use-recipients"

import PaperList from "./paper-list"
import PaperSection from "./paper-section"

export default function RecentPaper() {
  const { data: recipientsData } = useRecipients({ type: "recent", limit: RECIPIENTS_LIMIT, offset: RECIPIENTS_OFFSET })

  return (
    <PaperSection renderTitle="최근에 만든 롤링 페이퍼 ⭐️️">
      <PaperList recipients={recipientsData!.results} />
    </PaperSection>
  )
}
