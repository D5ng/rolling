import Select from "./select"
import SelectItem from "./select-item"
import SelectList from "./select-list"
import SelectPortal from "./select-portal"
import SelectTrigger from "./select-trigger"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Select> = {
  title: "Design System/Select",
  component: Select,
  tags: ["autodocs"]
}

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <SelectTrigger placeholder="Select an option" />
        <SelectPortal>
          <SelectList>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectList>
        </SelectPortal>
      </Select>
    )
  }
}
