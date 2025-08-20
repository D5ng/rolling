import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/utils"

import { Slot, Slottable } from "../slot"

import type { ButtonHTMLAttributes, ReactNode } from "react"

const buttonVariants = cva("w-32 h-10 rounded-md flex items-center justify-center gap-2.5", {
  variants: {
    variant: {
      primary:
        "text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:border-purple-900 focus:border focus:bg-purple-800 disabled:focus:border-none disabled:focus:bg-purple-600 disabled:hover:bg-purple-600 disabled:active:bg-purple-600",
      secondary:
        "text-purple-700 border border-purple-600 hover:bg-purple-100 active:border-purple-800 focus:border-purple-800 disabled:focus:border-none disabled:focus:bg-purple-600 disabled:hover:bg-purple-100 disabled:active:border-purple-800",
      outlined:
        "border border-gray-300 hover:bg-gray-100 active:border-gray-100 focus:border-gray-500 disabled:focus:border-none disabled:focus:bg-gray-300 disabled:hover:bg-gray-100 disabled:active:border-gray-100"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "opacity-100 cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "primary",
    disabled: false
  }
})

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disabled?: boolean
  leftIcon?: ReactNode
}

export default function Button({
  asChild,
  type = "button",
  children,
  leftIcon,
  variant,
  disabled = false,
  className,
  ...restProps
}: Props) {
  const Component = asChild ? Slot : "button"

  return (
    <Component
      type={type}
      className={cn(buttonVariants({ variant, disabled }), className)}
      disabled={disabled}
      {...restProps}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <Slottable>{children}</Slottable>
    </Component>
  )
}
