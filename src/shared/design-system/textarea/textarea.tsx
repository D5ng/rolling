import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type TextareaHTMLAttributes } from "react"

import { cn } from "@/shared/utils"

const textareaVariants = cva(
  `w-[320px] h-40 border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-500 focus:border-gray-500 resize-none`,
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

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
  error?: boolean
  disabled?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className, error, disabled, ...restProps }, ref) => {
  return (
    <textarea
      className={cn(textareaVariants({ error, disabled }), className)}
      disabled={disabled}
      ref={ref}
      {...restProps}
    />
  )
})

Textarea.displayName = "Textarea"

export default Textarea
