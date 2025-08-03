import { AddReactionIcon } from "@/shared/assets/icons"

import Button from "./button"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  args: {
    type: "button",
    disabled: false,
    variant: "primary"
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "outlined"]
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    type: {
      control: {
        type: "select"
      },
      options: ["button", "submit", "reset"]
    },
    asChild: {
      description: "상위 컴포넌트의 속성을 자식 요소에 머지하여 전달하는 속성",
      control: {
        disable: true
      }
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => (
    <Button variant="primary" {...args}>
      Button
    </Button>
  )
}

export const Secondary: Story = {
  render: () => <Button variant="secondary">Button</Button>
}

export const Outlined: Story = {
  render: () => <Button variant="outlined">Button</Button>
}

export const WithIcon: Story = {
  render: () => (
    <Button variant="outlined" leftIcon={<AddReactionIcon />}>
      Button
    </Button>
  )
}
