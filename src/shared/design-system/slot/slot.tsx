import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactElement, type ReactNode } from "react"

import Slottable from "./slottable"

interface SlotProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function Slot({ children, ...restProps }: SlotProps) {
  const childrenArray = Children.toArray(children)
  const slottable = childrenArray.find((child) => isValidElement(child) && child.type === Slottable) as ReactElement<{
    children: ReactNode
  }>

  if (slottable) {
    const newElement = slottable.props.children
    const newChildren = childrenArray.map((child) => {
      if (child !== slottable) {
        return child
      }

      if (Children.count(newElement) > 1) {
        console.warn("Slottable은 단일 요소로 사용해야 합니다.")
        return Children.only(null)
      }

      if (isValidElement(newElement)) {
        return (newElement.props as { children: ReactNode }).children
      }

      return null
    })

    return isValidElement(newElement) ? cloneElement(newElement, { ...restProps }, newChildren) : null
  }

  if (isValidElement(children)) {
    return cloneElement(children, { ...restProps })
  }

  return null
}
