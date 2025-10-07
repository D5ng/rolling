import { useControllableState } from "../use-controllable-state"

import { ModalProvider } from "./modal-context"

import type { ReactNode } from "react"

interface Props {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export default function Modal({ open: openProp, defaultOpen, onOpenChange, children }: Props) {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange
  })

  return <ModalProvider value={{ open, onOpenChange: setOpen }}>{children}</ModalProvider>
}
