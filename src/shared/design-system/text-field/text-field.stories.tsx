import TextField from "./text-field"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof TextField> = {
  title: "Design System/TextField",
  component: TextField,
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label",
    as: "input",
    error: false,
    disabled: false,
    placeholder: "Placeholder"
  }
}

export const Textarea: Story = {
  args: {
    label: "Label",
    as: "textarea",
    error: false,
    disabled: false,
    placeholder: "Placeholder"
  }
}

export const TextareaDisabled: Story = {
  args: {
    label: "Label",
    as: "textarea",
    error: false,
    disabled: true,
    placeholder: "Placeholder"
  }
}

export const TextareaError: Story = {
  args: {
    label: "Label",
    as: "textarea",
    error: false,
    disabled: true,
    placeholder: "Placeholder"
  }
}

export const Input: Story = {
  args: {
    label: "Label",
    as: "input",
    error: false,
    disabled: false,
    placeholder: "Placeholder"
  }
}

export const InputError: Story = {
  args: {
    label: "Label",
    as: "input",
    error: true,
    disabled: false,
    placeholder: "Placeholder"
  }
}

export const InputDisabled: Story = {
  args: {
    label: "Label",
    as: "input",
    error: false,
    disabled: true,
    placeholder: "Placeholder"
  }
}
