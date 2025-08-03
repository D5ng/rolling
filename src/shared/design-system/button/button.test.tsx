import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Button from "./button"

describe("Button Test", () => {
  it("렌더링 테스트", () => {
    render(<Button type="button">Button</Button>)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("버튼 클릭 테스트", async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    await userEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("버튼 비활성화 테스트", async () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} disabled>
        Click
      </Button>
    )

    await userEvent.click(screen.getByRole("button"))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
