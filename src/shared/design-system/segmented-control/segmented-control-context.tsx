import { createContextScope } from "../create-context-scope"

interface SegmentedControlContextValue {
  selectedItem: string
  onSelectedChange: (value: string) => void
}

const SegmentedControlContext = createContextScope("Segmented")

export const [SegmentedControlProvider, useSegmentedControl] = SegmentedControlContext<SegmentedControlContextValue>()
