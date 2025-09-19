import { cva, type VariantProps } from "class-variance-authority"

import { ArrowIcon } from "@/shared/assets/icons"
import { cn } from "@/shared/utils"

import { useSelectContext } from "./select-context"

import type { HTMLAttributes } from "react"

const triggerVariants = cva(
  `w-[320px] flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-500 focus:border-gray-500 text-left`,
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

interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof triggerVariants> {
  error?: boolean
  disabled?: boolean
  placeholder?: string
}

export default function SelectTrigger({ error, disabled, placeholder, className, ...restProps }: Props) {
  const { value, open, onOpenChange, refs, onFocusedIndexChange } = useSelectContext()

  return (
    <button
      type="button"
      id="select-trigger"
      className={cn(triggerVariants({ error, disabled }), className)}
      aria-expanded={open}
      onClick={() => {
        onOpenChange(!open)
      }}
      ref={refs.setReference}
      onKeyDown={(event) => {
        if (event.key === "ArrowDown") {
          if (!open) {
            onOpenChange(true)
            onFocusedIndexChange((prevFocusedIndex) => (prevFocusedIndex === -1 ? 0 : prevFocusedIndex))
          }
        }
      }}
      {...restProps}
    >
      {value || placeholder}
      <ArrowIcon className="stroke-gray-900" />
    </button>
  )
}
