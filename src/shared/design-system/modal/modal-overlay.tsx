import { cn } from "@/shared/utils"

import { useModalContext } from "./modal-context"

import type { KeyboardEventHandler } from "react"

export default function ModalOverlay() {
  const { open, onOpenChange } = useModalContext()

  if (!open) {
    return null
  }

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      onOpenChange(false)
    }
  }

  return (
    <div
      className={cn("fixed top-0 left-0 w-full h-screen bg-black/40")}
      onClick={() => onOpenChange(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    />
  )
}
