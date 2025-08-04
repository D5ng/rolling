/* eslint-disable storybook/prefer-pascal-case */
import Badge from "./badge"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  args: {
    variant: "가족"
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["지인", "동료", "가족", "친구"]
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Badge>

export const 지인_뱃지: Story = {
  args: {
    variant: "지인"
  },

  render: (args) => <Badge {...args} />
}

export const 동료_뱃지: Story = {
  args: {
    variant: "동료"
  },

  render: (args) => <Badge {...args} />
}

export const 가족_뱃지: Story = {
  args: {
    variant: "가족"
  },

  render: (args) => <Badge {...args} />
}

export const 친구_뱃지: Story = {
  args: {
    variant: "친구"
  },

  render: (args) => <Badge {...args} />
}
