import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Select from "./select"
import SelectItem from "./select-item"
import SelectList from "./select-list"
import SelectPortal from "./select-portal"
import SelectTrigger from "./select-trigger"

describe("Select 테스트", () => {
  it("렌더링 테스트", async () => {
    render(
      <Select>
        <SelectTrigger placeholder="Select an option" />
        <SelectPortal>
          <SelectList>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectList>
        </SelectPortal>
      </Select>
    )

    const trigger = screen.getByRole("button", { name: "Select an option" })

    expect(trigger).toBeInTheDocument()
    await userEvent.click(trigger)

    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Option 3" })).toBeInTheDocument()
  })

  describe("상태 관리 테스트", async () => {
    it("value 상태 관리 테스트", async () => {
      const onValueChange = vi.fn()
      render(
        <Select value="option1" onValueChange={onValueChange} open={true}>
          <SelectTrigger placeholder="Select an option" />
          <SelectPortal>
            <SelectList>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectList>
          </SelectPortal>
        </Select>
      )

      await userEvent.click(screen.getByRole("option", { name: "Option 2" }))
      expect(onValueChange).toHaveBeenCalledWith("option2")
    })

    it("open 상태 관리 테스트", async () => {
      const onOpenChange = vi.fn()
      render(
        <Select onOpenChange={onOpenChange}>
          <SelectTrigger placeholder="Select an option" />
        </Select>
      )

      await userEvent.click(screen.getByRole("button", { name: "Select an option" }))
      expect(onOpenChange).toHaveBeenCalledWith(true)
    })

    it("defaultOpen 테스트", () => {
      render(
        <Select defaultOpen={true}>
          <SelectTrigger placeholder="Select an option" />
          <SelectPortal>
            <SelectList>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectList>
          </SelectPortal>
        </Select>
      )

      expect(screen.getByRole("listbox")).toBeInTheDocument()
    })
  })

  describe("키보드 네비게이션 테스트", () => {
    it("ArrowDown 테스트", async () => {
      render(
        <Select>
          <SelectTrigger placeholder="Select an option" />
          <SelectPortal>
            <SelectList>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectList>
          </SelectPortal>
        </Select>
      )

      await userEvent.click(screen.getByRole("button", { name: "Select an option" }))
      await userEvent.keyboard("{ArrowDown}")
      await userEvent.keyboard("{ArrowDown}")
      await userEvent.keyboard("{Enter}")

      await waitFor(() => {
        expect(screen.getByRole("button", { name: "option2" })).toBeInTheDocument()
      })
    })
  })
})
