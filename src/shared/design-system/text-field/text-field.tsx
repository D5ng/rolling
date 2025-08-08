/* eslint-disable func-call-spacing */
/* eslint-disable indent */
import { forwardRef, type InputHTMLAttributes, type Ref, type TextareaHTMLAttributes } from "react"

import { cn } from "@/shared/utils"

import Input from "../input/input"
import Label from "../label/label"
import Textarea from "../textarea/textarea"

interface Props {
  label?: string
  as?: "input" | "textarea"
  error?: boolean
  disabled?: boolean
}

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  Props & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>)
>(({ className, id, label, as = "input", error, disabled, ...restProps }, ref) => {
  return (
    <div className={cn(`flex flex-col gap-3`, className)}>
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
  )
})

TextField.displayName = "TextField"

export default TextField
