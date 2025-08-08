import { cn } from "@/shared/utils"

import Input from "../input/input"
import Label from "../label/label"
import Textarea from "../textarea/textarea"

import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react"

interface Props {
  label?: string
  as?: "input" | "textarea"
  error?: boolean
  disabled?: boolean
}

export default function TextField({
  className,
  id,
  label,
  as = "input",
  error,
  disabled,
  ...restProps
}: Props & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>)) {
  return (
    <div className={cn(`flex flex-col gap-3`, className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {as === "input" && (
        <Input
          type="text"
          id={id}
          error={error}
          disabled={disabled}
          {...(restProps as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {as === "textarea" && (
        <Textarea
          id={id}
          error={error}
          disabled={disabled}
          {...(restProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
    </div>
  )
}
