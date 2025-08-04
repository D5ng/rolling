import { useControllableState } from "../use-controllable-state"

import { SegmentedControlProvider } from "./segmented-control-context"

import type { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue: string
  onSelectedChange?: (value: string) => void
}

export default function SegmentedControl({ children, value: valueProp, defaultValue, onSelectedChange }: Props) {
  const [selectedItem, setSelectedItem] = useControllableState<string>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onSelectedChange
  })

  return (
    <SegmentedControlProvider value={{ selectedItem, onSelectedChange: setSelectedItem }}>
      {children}
    </SegmentedControlProvider>
  )
}
