import ReactionBadge from "./reaction-badge"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof ReactionBadge> = {
  title: "Design System/ReactionBadge",
  component: ReactionBadge,
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof ReactionBadge>

export const Default: Story = {
  args: {
    emoji: "👍",
    count: 10
  }
}

export const MaxCount: Story = {
  args: {
    emoji: "👍",
    count: 100
  }
}

export const MinCount: Story = {
  args: {
    emoji: "👍",
    count: -5
  }
}
