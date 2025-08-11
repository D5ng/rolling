import Avatar from "../avatar/avatar"
import AvatarFallback from "../avatar/avatar-fallback"
import AvatarImage from "../avatar/avatar-image"

import AvatarGroup from "./avatar-group"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof AvatarGroup> = {
  title: "Design System/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof AvatarGroup>

export const Default: Story = {
  args: {
    total: 100
  },
  render: ({ total }) => (
    <AvatarGroup total={total}>
      <Avatar className="w-7 h-7 border-white">
        <AvatarImage />
        <AvatarFallback>DH</AvatarFallback>
      </Avatar>
      <Avatar className="w-7 h-7 border-white">
        <AvatarImage />
        <AvatarFallback>SE</AvatarFallback>
      </Avatar>
      <Avatar className="w-7 h-7 border-white">
        <AvatarImage />
        <AvatarFallback>FS</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}
