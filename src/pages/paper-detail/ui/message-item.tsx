import { format, parseISO } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/design-system/avatar"
import { Badge } from "@/shared/design-system/badge"
import { Button } from "@/shared/design-system/button"
import { Modal, ModalContent, ModalOverlay, ModalPortal } from "@/shared/design-system/modal"
import { useBooleanState } from "@/shared/hooks"

import type { Message } from "@/entities/message"

export default function MessageItem({ content, profileImageURL, sender, relationship, createdAt }: Message) {
  const [isOpen, open, close] = useBooleanState(false)

  return (
    <>
      <Modal open={isOpen} onOpenChange={close}>
        <ModalPortal>
          <ModalOverlay />
          <ModalContent className="h-[63.8889vw] tablet:h-[284px] desktop:w-[600px] desktop:h-[476px]">
            <div className="w-full flex justify-between items-center relative border-b border-gray-200">
              <div className="flex gap-1.5 pb-4 desktop:gap-3">
                <Avatar className="w-14 h-14">
                  <AvatarImage src={profileImageURL} alt={sender} />
                  <AvatarFallback>{sender}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl">
                    From. <b>{sender}</b>
                  </h3>
                  <Badge variant={relationship} />
                </div>
              </div>
              <span className="text-sm text-gray-400">{format(parseISO(createdAt), "yyyy.MM.dd")}</span>
            </div>
            <p className="pt-4 h-[256px] overflow-y-auto text-lg text-gray-600">{content}</p>
            <div className="flex justify-center pt-6">
              <Button onClick={close}>확인</Button>
            </div>
          </ModalContent>
        </ModalPortal>
      </Modal>
      <li className="bg-white drop-shadow-sm h-[63.8889vw] rounded-2xl tablet:h-[284px] desktop:h-[280px]">
        <button className="w-full text-left pt-7 px-6 pb-6 h-full" onClick={open}>
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
            <div className="pt-4">
              <p className="text-sm text-gray-600 line-clamp-4">{content}</p>
            </div>
            <span className="absolute left-0 bottom-0 text-gray-400">{format(parseISO(createdAt), "yyyy.MM.dd")}</span>
          </div>
        </button>
      </li>
    </>
  )
}
