import EmojiPicker from "emoji-picker-react"
import { useRef } from "react"

import { AddReactionIcon } from "@/shared/assets/icons"
import { Button } from "@/shared/design-system/button"
import { useOutsideClick } from "@/shared/design-system/use-outside-click"
import { useBooleanState } from "@/shared/hooks"

import { useAddReactionMutation } from "../models/use-add-reaction.mutate"

interface Props {
  id: string | number
}

export default function AddReactionButton({ id }: Props) {
  const [open, _, close, toggle] = useBooleanState()
  const { mutate } = useAddReactionMutation(id)
  const emojiRef = useRef<HTMLDivElement>(null)

  useOutsideClick<HTMLDivElement>(
    emojiRef,
    () => {
      close()
    },
    open
  )

  return (
    <div className="relative z-50" ref={emojiRef}>
      <Button variant="outlined" className="w-9 h-8 flex items-center justify-center" onClick={toggle}>
        <AddReactionIcon className="w-5 h-5" />
      </Button>
      <div className="absolute top-[calc(100%+10px)] right-0">
        <EmojiPicker
          open={open}
          lazyLoadEmojis={true}
          onEmojiClick={({ emoji }) => {
            mutate({ paperId: id, emoji, type: "increase" })
            close()
          }}
        />
      </div>
    </div>
  )
}
