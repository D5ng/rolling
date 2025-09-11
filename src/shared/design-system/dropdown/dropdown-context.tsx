import { createContextScope } from "../create-context-scope"

import type { UseFloatingReturn } from "../use-floating/use-floating.types"
import type { Dispatch, SetStateAction } from "react"

interface DropdownContextValue {
  open?: boolean
  onOpenChange: (value: boolean) => void
  refs: UseFloatingReturn<HTMLElement>
  focusedIndex: number
  onFocusedIndexChange: Dispatch<SetStateAction<number>>
  items: string[]
  registerItem: (value: string) => void
  unregisterItem: (value: string) => void
}

const DropdownContext = createContextScope("dropdown")

export const [DropdownProvider, useDropdownContext] = DropdownContext<DropdownContextValue>()
