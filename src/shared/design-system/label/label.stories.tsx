import Label from "./label"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Label> = {
  title: "Design System/Label",
  component: Label,
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Label",
    htmlFor: "label"
  },
  render: (args) => <Label {...args} />
}
