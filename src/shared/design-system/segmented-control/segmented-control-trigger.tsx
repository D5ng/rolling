import { cva } from "class-variance-authority"

import { cn } from "../../utils/cn"

import { useSegmentedControl } from "./segmented-control-context"

import type { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  value: string
}

const triggerVariants = cva(`w-[122px] h-10 rounded-md text-base`, {
  variants: {
    selected: {
      true: "border-2 border-purple-600 text-purple-700 font-bold",
      false: "border-none font-normal"
    }
  },
  defaultVariants: {
    selected: false
  }
})

export default function SegmentedControlTrigger({ children, value, ...restProps }: Props) {
  const { selectedItem, onSelectedChange } = useSegmentedControl()
  const isSelected = value === selectedItem

  return (
    <button
      className={cn(triggerVariants({ selected: isSelected }))}
      onClick={() => onSelectedChange(value)}
      {...restProps}
      role="tab"
      aria-selected={isSelected}
      aria-label={`${value}-trigger`}
      aria-controls={`${value}-content`}
    >
      {children}
    </button>
  )
}
