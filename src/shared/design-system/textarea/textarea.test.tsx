import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Textarea from "./textarea"

describe("Textarea 렌더링 테스트", () => {
  it("기본적으로 빈 상태", () => {
    render(<Textarea />)

    const textarea = screen.getByRole("textbox")
    expect(textarea).toHaveValue("")
    expect(textarea).toBeInTheDocument()
  })

  it("에러 상태에서는 에러 클래스가 적용되어야 한다", () => {
    render(<Textarea error />)

    const textarea = screen.getByRole("textbox")
    expect(textarea).toHaveClass("border-error")
  })

  it("disabled 상태에서는 비활성화 상태이다", () => {
    render(<Textarea disabled />)

    const textarea = screen.getByRole("textbox")
    expect(textarea).toBeDisabled()
  })
})

describe("Textarea 상호작용 테스트", () => {
  it("사용자가 텍스트를 입력할 수 있어야 한다", async () => {
    render(<Textarea />)

    const textarea = screen.getByRole("textbox")
    await userEvent.type(textarea, "Textarea")
    expect(textarea).toHaveValue("Textarea")
  })

  it("입력된 텍스트가 onChange 콜백을 호출해야 한다", async () => {
    const onChange = vi.fn()

    render(<Textarea onChange={onChange} />)

    const textarea = screen.getByRole("textbox")
    await userEvent.type(textarea, "Textarea")

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "Textarea" })
      })
    )
  })
})
