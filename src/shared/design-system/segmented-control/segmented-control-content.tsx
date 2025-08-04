import { cn } from "@/shared/utils"

import { useSegmentedControl } from "./segmented-control-context"

import type { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string
}

export default function SegmentedControlContent({ children, value, className, ...restProps }: Props) {
  const { selectedItem } = useSegmentedControl()

  if (selectedItem !== value) {
    return null
  }

  return (
    <div
      className={cn(className)}
      {...restProps}
      role="tabpanel"
      aria-labelledby={`${value}-trigger`}
      id={`${value}-content`}
    >
      {children}
    </div>
  )
}
