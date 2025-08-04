import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/utils"

import type { HTMLAttributes } from "react"

const badgeVariants = cva(`px-2 text-sm rounded-[4px]`, {
  variants: {
    variant: {
      지인: "bg-orange-100 text-orange-500",
      동료: "bg-purple-100 text-purple-500",
      가족: "bg-green-100 text-green-500",
      친구: "bg-blue-100 text-blue-500"
    }
  }
})

interface Props extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export default function Badge({ variant, className, ...restProps }: Props) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...restProps}>
      {variant}
    </span>
  )
}
