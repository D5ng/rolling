import { forwardRef, type InputHTMLAttributes, type Ref, type TextareaHTMLAttributes } from "react"

import { cn } from "@/shared/utils"

import { Input } from "../input"
import { Label } from "../label"
import { Textarea } from "../textarea"

interface BaseProps {
  label?: string
  as?: "input" | "textarea"
  error?: boolean
  disabled?: boolean
  wrapperClassName?: string
  helperText?: string
}

type Props = BaseProps & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>)

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ id, label, as = "input", error, disabled, wrapperClassName, helperText, ...restProps }, ref) => {
    return (
      <div className={cn(`flex flex-col gap-1`, wrapperClassName)}>
        <div className="flex flex-col gap-3">
          {label && <Label htmlFor={id}>{label}</Label>}
          {as === "input" && (
            <Input
              type="text"
              id={id}
              error={error}
              disabled={disabled}
              ref={ref as Ref<HTMLInputElement>}
              {...(restProps as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          {as === "textarea" && (
            <Textarea
              id={id}
              error={error}
              disabled={disabled}
              ref={ref as Ref<HTMLTextAreaElement>}
              {...(restProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          )}
        </div>
        {error && helperText && <p className="text-error text-sm">{helperText}</p>}
      </div>
    )
  }
)

TextField.displayName = "TextField"

export default TextField
