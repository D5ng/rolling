import { useEffect, type HTMLAttributes } from "react"

import { cn } from "@/shared/utils"

import { useDropdownContext } from "./dropdown-context"

export default function DropdownList({ children, ...restProps }: HTMLAttributes<HTMLUListElement>) {
  const { open, refs, items, onFocusedIndexChange, onOpenChange } = useDropdownContext()

  const floatingStyle = refs.floatingStyle

  useEffect(() => {
    if (open) {
      refs.floatingReferenceRef.current?.focus()
    }
  }, [open, refs.floatingReferenceRef])

  if (!open) {
    return null
  }

  return (
    <ul
      className={cn(`bg-white border border-gray-300 px-2.5 py-2.5 rounded-lg flex flex-col`)}
      role="listbox"
      tabIndex={0}
      ref={refs.setFloatingReference}
      style={floatingStyle}
      onKeyDown={(event) => {
        event.preventDefault()

        if (event.key === "ArrowDown") {
          onFocusedIndexChange((prevFocusedIndex) =>
            prevFocusedIndex >= items.length - 1 ? prevFocusedIndex : prevFocusedIndex + 1
          )
        }

        if (event.key === "ArrowUp") {
          onFocusedIndexChange((prevFocusedIndex) => (prevFocusedIndex === 0 ? prevFocusedIndex : prevFocusedIndex - 1))
        }

        if (event.key === "Enter") {
          onOpenChange(false)
          refs.domReferenceRef.current?.focus()
        }
      }}
      {...restProps}
    >
      {children}
    </ul>
  )
}
