import { Portal } from "../portal"

import { useModalContext } from "./modal-context"

import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  containerElement?: HTMLElement
}

export default function ModalPortal({ children, containerElement = document.body }: Props) {
  const { open } = useModalContext()
  return open ? <Portal containerElement={containerElement}>{children}</Portal> : null
}
