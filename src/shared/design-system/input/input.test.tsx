import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Input from "./input"

describe("Input 렌더링 테스트", () => {
  it("기본적으로 빈 상태", () => {
    render(<Input type="text" />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")
    expect(input).toBeInTheDocument()
  })

  it("에러 상태에서는 에러 클래스가 적용되어야 한다", () => {
    render(<Input type="text" error />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveClass("border-error")
  })

  it("disabled 상태에서는 비활성화 상태이다", () => {
    render(<Input type="text" disabled />)

    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()
  })
})

describe("Input 상호작용 테스트", () => {
  it("사용자가 텍스트를 입력할 수 있어야 한다", async () => {
    const user = userEvent.setup()

    render(<Input type="text" />)

    const input = screen.getByRole("textbox")
    await user.type(input, "Hello World")

    expect(input).toHaveValue("Hello World")
  })

  it("입력된 텍스트가 onChange 콜백을 호출해야 한다", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<Input onChange={onChange} />)

    const input = screen.getByRole("textbox")
    await user.type(input, "test")

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "test" })
      })
    )
  })
})
