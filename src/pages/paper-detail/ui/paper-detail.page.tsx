import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useParams } from "react-router"

import { SCREENS } from "@/shared/constants"
import { useWindowSize } from "@/shared/hooks"
import { Header } from "@/widgets"

import usePaperDetail from "../models/use-paper-detail.query"

import MessageList from "./message-list"
import MessageSkeleton from "./message.skeleton"
import PaperDetailSubHeader from "./paper-detail-sub-header"

export default function PaperDetailPage() {
  const { id } = useParams()

  if (!id) {
    throw new Error("해당 페이퍼에 접근할 수 없어요.")
  }

  const { data } = usePaperDetail(id)
  const { width } = useWindowSize({ initializeWithValue: true })

  if (!data) {
    throw new Error("이 페이퍼는 존재하지 않거나 삭제되었어요. 다른 페이퍼를 확인해 보세요.")
  }

  return (
    <>
      {SCREENS.tablet < width && <Header />}
      <PaperDetailSubHeader
        name={data.name}
        reactions={data.topReactions}
        id={id}
        messages={data.recentMessages}
        messageTotalCount={data.messageCount}
      />
      <main>
        <ErrorBoundary fallback={<div>Error</div>}>
          <Suspense fallback={<MessageSkeleton />}>
            <MessageList id={id} backgroundColor={data.backgroundColor} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}
