import { cn } from "../../utils/cn"

import type { HTMLAttributes } from "react"

export default function SegmentedControlList({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-fit flex items-center bg-gray-100 rounded-md", className)}
      {...restProps}
      role="tablist"
      aria-label="탭 목록"
    >
      {children}
    </div>
  )
}
