import { Portal } from "../portal"

import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  containerElement?: HTMLElement
}

export default function DropdownPortal({ children, containerElement = document.body }: Props) {
  return <Portal containerElement={containerElement}>{children}</Portal>
}
