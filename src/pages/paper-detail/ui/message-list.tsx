/* eslint-disable react/no-array-index-key */
import { Link } from "react-router"

import { PlusIcon } from "@/shared/assets/icons"
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer"

import { usePaperMessagesQuery } from "../models/use-paper-messages.query"

import MessageItem from "./message-item"
import { MessageItemSkeleton } from "./message.skeleton"

import type { BackgroundColor } from "@/entities/paper/paper.types"

interface Props {
  id: string | number
  backgroundColor: BackgroundColor
}

const backgroundColorMap = {
  beige: "bg-beige-200",
  purple: "bg-purple-200",
  blue: "bg-blue-200",
  green: "bg-green-200"
}

const MESSAGE_SKELETON_COUNT = 6

export default function MessageList({ id, backgroundColor }: Props) {
  const { data: messagesData, fetchNextPage, hasNextPage, isFetching } = usePaperMessagesQuery(id)
  const ref = useIntersectionObserver(
    (entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },
    {
      threshold: 0.5
    }
  )
  const backgroundStyle = backgroundColorMap[backgroundColor]

  return (
    <div className={`px-5 py-10 ${backgroundStyle} desktop:px-0 desktop:py-20`}>
      <ul
        className={`max-w-[1200px] mx-auto grid grid-cols-1 gap-y-4 tablet:grid-cols-2 tablet:gap-4 desktop:grid-cols-3 desktop:gap-6`}
      >
        <li className="bg-white h-[63.8889vw] drop-shadow-sm rounded-2xl tablet:h-[284px] desktop:h-[280px]">
          <Link className="flex justify-center items-center h-full" to={`/paper/${id}/create-message`}>
            <div className="bg-gray-500 w-14 h-14 rounded-full flex justify-center items-center">
              <PlusIcon className="stroke-white" />
            </div>
          </Link>
        </li>
        {messagesData.map((message) => (
          <MessageItem key={message.id} {...message} />
        ))}
        {isFetching &&
          Array.from({ length: MESSAGE_SKELETON_COUNT }).map((_, index) => <MessageItemSkeleton key={index} />)}
      </ul>
      <div ref={ref} className="w-full h-[1px]" />
    </div>
  )
}
