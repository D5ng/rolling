import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useParams } from "react-router"

import { SCREENS } from "@/shared/constants"
import { useWindowSize } from "@/shared/hooks"
import { Header } from "@/widgets"

import usePaperDetail from "../models/use-paper-detail.query"

import MessageList from "./message-list"
import PaperDetailSubHeader from "./paper-detail-sub-header"

export default function PaperDetailPage() {
  const { id } = useParams()

  if (!id) {
    throw new Error("해당 페이퍼에 접근할 수 없어요.")
  }

  const { data, isLoading, isPending } = usePaperDetail(id)
  const { width } = useWindowSize({ initializeWithValue: true })

  if (!data) {
    throw new Error("해당 페이퍼에 접근할 수 없어요.")
  }

  if (isLoading || isPending) {
    return null
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
          <Suspense fallback={<div>Loading...</div>}>
            <MessageList id={id} backgroundColor={data.backgroundColor} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}
