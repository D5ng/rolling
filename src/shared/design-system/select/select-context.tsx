import { createContextScope } from "../create-context-scope"

import type { UseFloatingReturn } from "../use-floating/use-floating.types"
import type { Dispatch, SetStateAction } from "react"

const SelectContext = createContextScope("select")

interface SelectContextValue {
  value: string
  defaultValue: string
  onValueChange: (value: string) => void
  open: boolean
  onOpenChange: (open: boolean) => void
  refs: UseFloatingReturn<HTMLElement>
  focusedIndex: number
  onFocusedIndexChange: Dispatch<SetStateAction<number>>
  items: string[]
  registerItem: (value: string) => void
  unregisterItem: (value: string) => void
}

export const [SelectProvider, useSelectContext] = SelectContext<SelectContextValue>()
