import { useState, type ReactNode } from "react"

import { useControllableState } from "../use-controllable-state"
import { useEscapeKeydown } from "../use-escape-key-down"
import { useFloating } from "../use-floating"
import { useItemRegistry } from "../use-item-registry"
import { useOutsideClick } from "../use-outside-click"

import { SelectProvider } from "./select-context"

interface Props {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export default function Select({
  value: valueProp,
  defaultValue = "",
  onValueChange,
  open: openProp,
  defaultOpen,
  onOpenChange,
  children
}: Props) {
  const [selectedItem, setSelectedItem] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  })

  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange
  })

  const [items, registerItem, unregisterItem] = useItemRegistry<string>([])

  const [focusedIndex, setFocusedIndex] = useState(-1)

  const refs = useFloating({ offset: 10, placement: "bottom" })

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
    <SelectProvider
      value={{
        value: selectedItem,
        defaultValue,
        onValueChange: setSelectedItem,
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
    </SelectProvider>
  )
}
