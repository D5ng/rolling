import { AddReactionButton } from "@/features/reaction/add-reaction"
import { ViewReactionsButton } from "@/features/reaction/view-reactions"
import { SharedButton } from "@/features/share"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/design-system/avatar"
import { AvatarGroup } from "@/shared/design-system/avatar-group"
import { ReactionBadge } from "@/shared/design-system/reaction-badge"

import type { Paper } from "@/entities/paper"

interface Props {
  id: string | number
  reactions: Paper["topReactions"]
  name: Paper["name"]
  messages: Paper["recentMessages"]
  messageTotalCount: Paper["messageCount"]
}

export default function PaperDetailSubHeader({ id, reactions, name, messages, messageTotalCount }: Props) {
  return (
    <div className="border-b border-gray-200 tablet:px-6 tablet:py-3">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center tablet:flex-row tablet:justify-between tablet:items-center">
        <div className="border-b border-gray-200 px-5 py-3 tablet:p-0 tablet:border-0">
          <h2 className="text-gray-800 font-bold text-lg desktop:text-[1.75rem] desktop:leading-[2.625rem]">
            To. {name}
          </h2>
        </div>
        <div className="flex items-center justify-between px-5 py-2 tablet:p-0 tablet:gap-3">
          <div className="hidden desktop:flex desktop:items-center desktop:gap-3">
            <AvatarGroup total={messageTotalCount}>
              {messages.map((message) => (
                <Avatar key={message.id} className="w-7 h-7">
                  <AvatarImage src={message.profileImageURL} alt={message.sender} />
                  <AvatarFallback>{message.sender}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <p>{messageTotalCount}명이 작성했어요!</p>
            <div className="w-[1px] h-[28px] bg-gray-200 mx-[15px]" />
          </div>

          <div className="relative flex items-center gap-2">
            <div className="flex items-center gap-2">
              {reactions.map((reaction) => (
                <ReactionBadge key={reaction.id} count={reaction.count} emoji={reaction.emoji} />
              ))}
            </div>
            <ViewReactionsButton id={id} />
          </div>
          <div className="flex items-center">
            <AddReactionButton id={id} />
            <div className="w-[1px] h-[28px] bg-gray-200 mx-[15px]" />
            <SharedButton />
          </div>
        </div>
      </div>
    </div>
  )
}
