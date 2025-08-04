import type { LabelHTMLAttributes } from "react"

export default function Label({ children, ...restProps }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="text-2xl font-bold" {...restProps}>
      {children}
    </label>
  )
}
