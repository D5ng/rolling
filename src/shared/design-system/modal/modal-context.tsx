import { createContextScope } from "../create-context-scope"

interface ModalContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const modalContext = createContextScope("Modal")

export const [ModalProvider, useModalContext] = modalContext<ModalContextValue>()
