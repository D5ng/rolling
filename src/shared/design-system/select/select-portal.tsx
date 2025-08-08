import Portal from "../portal/portal"

import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  containerElement?: HTMLElement
}

export default function SelectPortal({ children, containerElement = document.body }: Props) {
  return <Portal containerElement={containerElement}>{children}</Portal>
}
