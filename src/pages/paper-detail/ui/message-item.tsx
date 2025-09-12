import { format, parseISO } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/design-system/avatar"
import { Badge } from "@/shared/design-system/badge"

import type { Message } from "@/entities/message"

export default function MessageItem({ content, profileImageURL, sender, relationship, createdAt }: Message) {
  return (
    <div className="pt-7 px-6 pb-6 h-full">
      <div className="relative h-full">
        <div className="flex gap-1.5 pb-4 border-b border-gray-200 desktop:gap-3">
          <Avatar className="w-14 h-14">
            <AvatarImage src={profileImageURL} alt={sender} />
            <AvatarFallback>{sender}</AvatarFallback>
          </Avatar>
          <div>
            <h3>From. {sender}</h3>
            <Badge variant={relationship} />
          </div>
        </div>
        <p className="pt-4 text-sm text-gray-600">{content}</p>
        <span className="absolute left-0 bottom-0 text-gray-400">{format(parseISO(createdAt), "yyyy.MM.dd")}</span>
      </div>
    </div>
  )
}
