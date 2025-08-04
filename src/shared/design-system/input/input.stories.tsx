import Input from "./input"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "이메일을 입력해주세요.",
    name: "email",
    id: "email"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "이메일을 입력해주세요.",
    name: "email2",
    id: "email2"
  },

  render: (args) => <Input {...args} />
}

export const Error: Story = {
  args: {
    type: "text",
    placeholder: "이메일을 입력해주세요.",
    error: true,
    name: "email3",
    id: "email3"
  },

  render: (args) => <Input {...args} />
}

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "이메일을 입력해주세요.",
    disabled: true,
    required: true,
    name: "email4",
    id: "email4"
  },

  render: (args) => <Input {...args} />
}
