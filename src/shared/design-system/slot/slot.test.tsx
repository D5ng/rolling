import { render, screen } from "@testing-library/react"

import Slot from "./slot"
import Slottable from "./slottable"

describe("Slot 렌더링 테스트", () => {
  it("DOM 구조 검사", () => {
    render(
      <Slot>
        <button>test</button>
      </Slot>
    )

    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("Props 테스트", () => {
    render(
      <Slot>
        <button className="test" name="test">
          test
        </button>
      </Slot>
    )

    const button = screen.getByRole("button")

    expect(button).toHaveClass("test")
    expect(button).toHaveAttribute("name", "test")
  })

  it("일부분 위임 시 여러 요소가 전달되면 에러가 발생해야 함", () => {
    const renderWithMultipleChildren = () =>
      render(
        <Slot>
          <Slottable>
            <span>1</span>
            <span>2</span>
          </Slottable>
        </Slot>
      )

    expect(renderWithMultipleChildren).toThrow("React.Children.only expected to receive a single React element child.")
  })
})
