import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type InputHTMLAttributes } from "react"

import { cn } from "@/shared/utils"

const inputVariants = cva(
  `w-[320px] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-500 focus:border-2 focus:border-gray-500`,
  {
    variants: {
      error: {
        true: "border-error",
        false: ""
      },
      disabled: {
        true: "bg-gray-100 cursor-not-allowed",
        false: "cursor-auto"
      }
    },
    defaultVariants: {
      error: false,
      disabled: false
    }
  }
)

interface Props extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  error?: boolean
  disabled?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, type = "text", error, disabled, ...restProps }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ error, disabled }), className)}
        disabled={disabled}
        ref={ref}
        {...restProps}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
