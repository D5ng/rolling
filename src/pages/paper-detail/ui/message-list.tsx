import { Link } from "react-router"

import { PlusIcon } from "@/shared/assets/icons"

import { usePaperMessagesQuery } from "../models/use-paper-messages.query"

import MessageItem from "./message-item"

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

const HEADER_AND_SUB_HEADER_TOTAL_HEIGHT = 67 + 65

export default function MessageList({ id, backgroundColor }: Props) {
  const { data } = usePaperMessagesQuery(id)

  const backgroundStyle = backgroundColorMap[backgroundColor]
  const heightStyle = `h-[calc(100vh-${HEADER_AND_SUB_HEADER_TOTAL_HEIGHT}px)]`

  return (
    <div className={`px-5 pt-10 ${backgroundStyle} ${heightStyle} desktop:px-0 desktop:pt-20`}>
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
        {data.results.map((message) => (
          <li
            key={message.id}
            className="bg-white drop-shadow-sm h-[63.8889vw] rounded-2xl tablet:h-[284px] desktop:h-[280px]"
          >
            <MessageItem {...message} />
          </li>
        ))}
      </ul>
    </div>
  )
}
