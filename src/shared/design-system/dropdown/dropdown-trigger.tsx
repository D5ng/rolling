import { Slot } from "../slot"

import { useDropdownContext } from "./dropdown-context"

import type { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children: ReactNode
}

const SELECTION_KEYS = ["Enter", "ArrowDown"]

export default function DropdownTrigger({ asChild, children, ...restProps }: Props) {
  const Component = asChild ? Slot : "button"
  const { refs, open, onOpenChange, onFocusedIndexChange } = useDropdownContext()

  return (
    <Component
      onClick={() => onOpenChange(!open)}
      ref={refs.setReference}
      onKeyDown={(event) => {
        if (SELECTION_KEYS.includes(event.key)) {
          if (!open) {
            onOpenChange(true)
            onFocusedIndexChange(0)
          }
        }
      }}
      {...restProps}
    >
      {children}
    </Component>
  )
}
