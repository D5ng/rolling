import { createPortal } from "react-dom"

import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  containerElement?: HTMLElement
}

export default function Portal({ children, containerElement }: Props) {
  const container = containerElement || document.body
  return container ? createPortal(children, container) : null
}
