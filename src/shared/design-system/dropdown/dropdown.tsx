import { useState, type ReactNode } from "react"

import { useControllableState } from "../use-controllable-state"
import { useEscapeKeydown } from "../use-escape-key-down"
import { useFloating } from "../use-floating"
import { useItemRegistry } from "../use-item-registry"
import { useOutsideClick } from "../use-outside-click"

import { DropdownProvider } from "./dropdown-context"

interface Props {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export default function Dropdown({ open: openProp, defaultOpen, onOpenChange, children }: Props) {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange
  })

  const [items, registerItem, unregisterItem] = useItemRegistry<string>([])

  const [focusedIndex, setFocusedIndex] = useState(-1)

  const refs = useFloating({ offset: 10, placement: "bottom-end" })

  useOutsideClick(
    [refs.domReferenceRef, refs.floatingReferenceRef],
    () => {
      setOpen(false)
    },
    open
  )

  useEscapeKeydown(() => {
    setOpen(false)
    setFocusedIndex(-1)
  })

  return (
    <DropdownProvider
      value={{
        open,
        onOpenChange: setOpen,
        refs,
        focusedIndex,
        onFocusedIndexChange: setFocusedIndex,
        items,
        registerItem,
        unregisterItem
      }}
    >
      {children}
    </DropdownProvider>
  )
}
