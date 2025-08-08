import Avatar from "./avatar"
import AvatarFallback from "./avatar-fallback"
import AvatarImage from "./avatar-image"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof Avatar> = {
  title: "Design System/Avatar",
  component: Avatar
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Avatar"
      />
      <AvatarFallback />
    </Avatar>
  )
}

export const Error: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://images.unsplash.com/photo-14926334" alt="Avatar" />
      <AvatarFallback>DH</AvatarFallback>
    </Avatar>
  )
}
