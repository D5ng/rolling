import { cva } from "class-variance-authority"
import { Link } from "react-router"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/design-system/avatar"
import AvatarGroup from "@/shared/design-system/avatar-group/avatar-group"
import ReactionBadge from "@/shared/design-system/reaction-badge/reaction-badge"
import { cn } from "@/shared/utils"

import type { Recipient } from "@/entities/recipient"

const paperItemVariants = cva(
  `w-[208px] h-[232px] flex flex-col justify-between rounded-2xl border border-black/10 px-6 pt-[30px] pb-[20px] bg-no-repeat bg-right-bottom tablet:w-[275px] tablet:h-[260px]`,
  {
    variants: {
      backgroundColor: {
        purple: `bg-purple-200 bg-[url('/images/paper-purple-pattern.svg')]`,
        blue: `bg-blue-200 bg-[url('/images/paper-blue-pattern.svg')]`,
        green: `bg-green-200 bg-[url('/images/paper-green-pattern.svg')]`,
        beige: `bg-beige-200 bg-[url('/images/paper-beige-pattern.svg')]`
      }
    },
    defaultVariants: {
      backgroundColor: "purple"
    }
  }
)

export default function PaperItem({
  id,
  backgroundColor,
  name,
  messageCount,
  topReactions,
  recentMessages
}: Recipient) {
  return (
    <Link to={`/lists/${id}`}>
      <div className={cn(paperItemVariants({ backgroundColor }))}>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold tablet:text-xl">To. {name}</h3>
          <AvatarGroup total={messageCount}>
            {recentMessages.map((message) => (
              <Avatar key={message.id} className="w-7 h-7 border-white">
                <AvatarImage src={message.profileImageURL} />
                <AvatarFallback>{message.sender.slice(0, 2)}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <p className="text-sm text-gray-700 tablet:text-base">
            {messageCount > 0 ? (
              <>
                <span className="font-bold">{messageCount}</span>
                명이 작성했어요!
              </>
            ) : (
              "아직 메시지가 없어요!"
            )}
          </p>
        </div>

        {topReactions.length > 0 && (
          <div className="flex gap-2 pt-4 border-t border-black/10">
            {topReactions.map((reaction) => (
              <ReactionBadge key={reaction.id} emoji={reaction.emoji} count={reaction.count} />
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
