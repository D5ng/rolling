import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { SegmentedControl, SegmentedControlContent, SegmentedControlList, SegmentedControlTrigger } from "./index"

describe("SegmentedControl 초기 상태", () => {
  it("기본값이 설정된 탭이 선택되어야 한다", () => {
    render(
      <SegmentedControl defaultValue="컬러">
        <SegmentedControlList>
          <SegmentedControlTrigger value="컬러">컬러</SegmentedControlTrigger>
          <SegmentedControlTrigger value="이미지">이미지</SegmentedControlTrigger>
        </SegmentedControlList>
        <SegmentedControlContent value="컬러">컬러</SegmentedControlContent>
        <SegmentedControlContent value="이미지">이미지</SegmentedControlContent>
      </SegmentedControl>
    )

    expect(screen.getByRole("tablist")).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "컬러-trigger" })).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "이미지-trigger" })).toBeInTheDocument()
    expect(screen.getByRole("tabpanel", { name: "컬러-content" })).toBeInTheDocument()
    expect(screen.queryByRole("tabpanel", { name: "이미지-content" })).not.toBeInTheDocument()
  })
})

describe("SegmentedControl 상호작용 테스트", () => {
  it("탭 클릭 시 선택 상태가 변경되어야 한다", async () => {
    const user = userEvent.setup()
    const onSelectedChange = vi.fn()

    render(
      <SegmentedControl defaultValue="컬러" onSelectedChange={onSelectedChange}>
        <SegmentedControlList>
          <SegmentedControlTrigger value="컬러">컬러</SegmentedControlTrigger>
          <SegmentedControlTrigger value="이미지">이미지</SegmentedControlTrigger>
        </SegmentedControlList>
        <SegmentedControlContent value="컬러">컬러 콘텐츠</SegmentedControlContent>
        <SegmentedControlContent value="이미지">이미지 콘텐츠</SegmentedControlContent>
      </SegmentedControl>
    )

    const 이미지탭 = screen.getByRole("tab", { name: "이미지-trigger" })
    await user.click(이미지탭)

    expect(onSelectedChange).toHaveBeenCalledWith("이미지")
    expect(이미지탭).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("tabpanel", { name: "이미지-content" })).toBeVisible()
  })

  it("키보드 네비게이션이 작동해야 한다", async () => {
    const user = userEvent.setup()

    render(
      <SegmentedControl defaultValue="컬러">
        <SegmentedControlList>
          <SegmentedControlTrigger value="컬러">컬러</SegmentedControlTrigger>
          <SegmentedControlTrigger value="이미지">이미지</SegmentedControlTrigger>
        </SegmentedControlList>
      </SegmentedControl>
    )

    const 컬러탭 = screen.getByRole("tab", { name: "컬러-trigger" })
    컬러탭.focus()

    await user.keyboard("{tab}")

    const 이미지탭 = screen.getByRole("tab", { name: "이미지-trigger" })
    expect(이미지탭).toHaveFocus()
  })
})
