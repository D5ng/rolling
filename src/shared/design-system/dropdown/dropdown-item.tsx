import { useCallback, useState, type ReactNode } from "react"

import { cn } from "@/shared/utils"

import { useDropdownContext } from "./dropdown-context"

interface Props {
  children: ReactNode
}

export default function DropdownItem({ children }: Props) {
  const { items, focusedIndex, registerItem } = useDropdownContext()
  const [content, setContent] = useState("")

  const menuItemCallbackRef = useCallback(
    (node: HTMLLIElement) => {
      if (!node) {
        return
      }

      if (node.textContent) {
        registerItem(node.textContent)
        setContent(node.textContent)
      }
    },
    [registerItem]
  )

  const isFocused = items[focusedIndex] === content

  return (
    <li
      className={cn(
        "py-2.5 px-4 text-gray-900 text-base cursor-pointer hover:bg-gray-200 rounded-lg",
        isFocused && "bg-gray-200"
      )}
      ref={menuItemCallbackRef}
    >
      <button type="button">{children}</button>
    </li>
  )
}
