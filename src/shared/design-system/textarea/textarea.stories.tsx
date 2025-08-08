import Textarea from "./textarea"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Textarea> = {
  title: "Design System/Textarea",
  component: Textarea,
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "textarea",
    placeholder: "Placeholder",
    disabled: false,
    error: false
  },
  render: (args) => <Textarea {...args} />
}

export const Disabled: Story = {
  args: {
    id: "textarea",
    placeholder: "Placeholder",
    error: false,
    disabled: true
  },
  render: (args) => <Textarea {...args} />
}

export const Error: Story = {
  args: {
    id: "textarea",
    placeholder: "Placeholder",
    disabled: false,
    error: true
  },
  render: (args) => <Textarea {...args} />
}
