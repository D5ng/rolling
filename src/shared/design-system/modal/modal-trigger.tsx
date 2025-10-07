import { Button } from "../button"

import { useModalContext } from "./modal-context"

import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  asChild?: boolean
}

export default function ModalTrigger({ children, asChild = false }: Props) {
  const { open, onOpenChange } = useModalContext()
  return (
    <Button asChild={asChild} onClick={() => onOpenChange(!open)}>
      {children}
    </Button>
  )
}
