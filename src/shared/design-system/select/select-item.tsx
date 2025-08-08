import { useEffect, type HTMLAttributes } from "react"

import { cn } from "@/shared/utils"

import { useSelectContext } from "./select-context"

interface Props extends HTMLAttributes<HTMLLIElement> {
  value: string
}

export default function SelectItem({ children, value, ...restProps }: Props) {
  const {
    onOpenChange,
    value: selectedValue,
    onValueChange,
    registerItem,
    unregisterItem,
    focusedIndex,
    items
  } = useSelectContext()

  const isSelected = selectedValue === value
  const currentItemIndex = items.findIndex((item) => item === value)
  const isFocused = focusedIndex === currentItemIndex

  const handleSelect = (value: string) => {
    onOpenChange(false)
    onValueChange(value)
  }

  useEffect(() => {
    registerItem(value)

    return () => {
      unregisterItem(value)
    }
  }, [registerItem, unregisterItem, value])

  return (
    <li
      className={cn(
        "py-2.5 px-4 text-gray-900 text-base cursor-pointer hover:bg-gray-200 rounded-lg",
        isFocused && "bg-gray-200"
      )}
      onClick={() => handleSelect(value)}
      role="option"
      aria-selected={isSelected}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onOpenChange(false)
        }
      }}
      value={value}
      {...restProps}
    >
      {children}
    </li>
  )
}
