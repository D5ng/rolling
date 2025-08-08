import { useEffect, type HTMLAttributes } from "react"

import { cn } from "@/shared/utils"

import { useSelectContext } from "./select-context"

export default function SelectList({ children, ...restProps }: HTMLAttributes<HTMLUListElement>) {
  const { open, refs, items, focusedIndex, onFocusedIndexChange, onValueChange, onOpenChange } = useSelectContext()

  useEffect(() => {
    if (open) {
      refs.floatingReferenceRef.current?.focus()
    }
  }, [open, refs.floatingReferenceRef])

  const floatingStyle = refs.floatingStyle

  if (!open) {
    return null
  }

  return (
    <ul
      className={cn(`w-[320px] bg-white border border-gray-300 px-2.5 py-2.5 rounded-lg flex flex-col`)}
      style={{
        ...floatingStyle,
        visibility: floatingStyle.top.slice(0, -2) ? "visible" : "hidden"
      }}
      ref={refs.setFloatingReference}
      role="listbox"
      tabIndex={0}
      aria-hidden={!open}
      aria-labelledby="select-trigger"
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
          onValueChange(items[focusedIndex])
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
