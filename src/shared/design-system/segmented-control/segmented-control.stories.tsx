import { SegmentedControl, SegmentedControlContent, SegmentedControlList, SegmentedControlTrigger } from "./index"

import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof SegmentedControl> = {
  title: "Design System/SegmentedControl",
  component: SegmentedControl,
  argTypes: {
    defaultValue: {
      control: {
        type: "select"
      },
      options: ["컬러", "이미지"]
    },
    value: {
      control: {
        type: "select"
      },
      options: ["컬러", "이미지"]
    }
  },
  args: {
    defaultValue: "컬러",
    value: "컬러"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof SegmentedControl>

export const Default: Story = {
  render: () => (
    <SegmentedControl defaultValue="컬러">
      <SegmentedControlList>
        <SegmentedControlTrigger value="컬러">컬러</SegmentedControlTrigger>
        <SegmentedControlTrigger value="이미지">이미지</SegmentedControlTrigger>
      </SegmentedControlList>
      <SegmentedControlContent value="컬러">컬러</SegmentedControlContent>
      <SegmentedControlContent value="이미지">이미지</SegmentedControlContent>
    </SegmentedControl>
  )
}

export const Controlled: Story = {
  args: {
    defaultValue: "컬러",
    value: "컬러"
  },
  render: (args) => {
    return (
      <SegmentedControl {...args}>
        <SegmentedControlList>
          <SegmentedControlTrigger value="컬러">컬러</SegmentedControlTrigger>
          <SegmentedControlTrigger value="이미지">이미지</SegmentedControlTrigger>
        </SegmentedControlList>
        <SegmentedControlContent value="컬러">컬러</SegmentedControlContent>
        <SegmentedControlContent value="이미지">이미지</SegmentedControlContent>
      </SegmentedControl>
    )
  }
}
