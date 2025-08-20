import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import TextField from "./text-field"

describe("TextField 렌더링 테스트", () => {
  describe("기본 렌더링", () => {
    it("기본 input 모드로 렌더링", () => {
      render(<TextField name="name" />)

      const input = screen.getByRole("textbox")
      expect(input).toBeInTheDocument()
      expect(input).toHaveValue("")
      expect(input.tagName).toBe("INPUT")
    })

    it("textarea 모드로 렌더링", () => {
      render(<TextField as="textarea" name="contents" />)

      const textarea = screen.getByRole("textbox")
      expect(textarea).toBeInTheDocument()
      expect(textarea.tagName).toBe("TEXTAREA")
    })

    it("label이 있을 때 렌더링", () => {
      render(<TextField label="이름" name="name" />)

      const label = screen.getByText("이름")
      const input = screen.getByRole("textbox")

      expect(label).toBeInTheDocument()
      expect(label).toHaveAttribute("for", "name")
      expect(input).toHaveAttribute("id", "name")
    })

    it("label이 없을 때 label 요소가 렌더링되지 않음", () => {
      render(<TextField name="name" />)

      const input = screen.getByRole("textbox")
      expect(input).toBeInTheDocument()

      expect(screen.queryByRole("label")).not.toBeInTheDocument()
    })
  })

  describe("상태 관리", () => {
    it("error 상태에서 에러 스타일 적용", () => {
      render(<TextField error name="name" />)

      const input = screen.getByRole("textbox")
      expect(input).toHaveClass("border-error")
    })

    it("disabled 상태에서 비활성화", () => {
      render(<TextField disabled name="name" />)

      const input = screen.getByRole("textbox")
      expect(input).toBeDisabled()
    })

    it("error와 disabled 상태 동시 적용", () => {
      render(<TextField error disabled name="name" />)

      const input = screen.getByRole("textbox")
      expect(input).toHaveClass("border-error")
      expect(input).toBeDisabled()
    })
  })

  describe("사용자 인터랙션", () => {
    it("input에서 텍스트 입력", async () => {
      render(<TextField name="name" />)

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "Hello World")

      expect(input).toHaveValue("Hello World")
    })

    it("textarea에서 텍스트 입력", async () => {
      render(<TextField as="textarea" name="contents" />)

      const textarea = screen.getByRole("textbox")
      await userEvent.type(textarea, "Multi-line\ntext")

      expect(textarea).toHaveValue("Multi-line\ntext")
    })

    it("disabled 상태에서 입력 불가", async () => {
      render(<TextField disabled name="name" />)

      const input = screen.getByRole("textbox")
      await userEvent.type(input, "Hello")

      expect(input).toHaveValue("")
    })
  })
})
