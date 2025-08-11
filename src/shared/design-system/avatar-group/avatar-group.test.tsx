import { render, screen } from "@testing-library/react"

import Avatar from "../avatar/avatar"
import AvatarFallback from "../avatar/avatar-fallback"
import AvatarImage from "../avatar/avatar-image"

import AvatarGroup from "./avatar-group"

describe("AvatarGroup 테스트", () => {
  describe("기본 렌더링", () => {
    it("children이 정상적으로 렌더링된다", () => {
      render(
        <AvatarGroup total={10}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.getByText("DH")).toBeInTheDocument()
      expect(screen.getByText("JS")).toBeInTheDocument()
      expect(screen.getByText("FS")).toBeInTheDocument()
    })
  })

  describe("SurPlusAvatar 렌더링", () => {
    it("remainingCount가 0일 때 SurPlusAvatar가 렌더링되지 않는다", () => {
      render(
        <AvatarGroup total={3}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.queryByText("+0")).not.toBeInTheDocument()
      expect(screen.queryByText("+1")).not.toBeInTheDocument()
    })

    it("remainingCount가 1일 때 +1이 렌더링된다", () => {
      render(
        <AvatarGroup total={3}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.getByText("+1")).toBeInTheDocument()
    })

    it("remainingCount가 99를 초과할 때 +99가 렌더링된다", () => {
      render(
        <AvatarGroup total={102}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.getByText("+99")).toBeInTheDocument()
    })

    it("remainingCount가 음수일 때 SurPlusAvatar가 렌더링되지 않는다", () => {
      render(
        <AvatarGroup total={1}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.queryByText("+0")).not.toBeInTheDocument()
      expect(screen.queryByText("+1")).not.toBeInTheDocument()
    })
  })

  describe("renderSurplus prop", () => {
    it("renderSurplus가 제공되면 커스텀 렌더링이 사용된다", () => {
      const customRenderSurplus = (count: number) => <div data-testid="custom-surplus">Custom +{count}</div>

      render(
        <AvatarGroup total={5} renderSurplus={customRenderSurplus}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.getByTestId("custom-surplus")).toBeInTheDocument()
      expect(screen.getByText("Custom +3")).toBeInTheDocument()
    })

    it("renderSurplus가 제공되지 않으면 기본 Avatar가 렌더링된다", () => {
      render(
        <AvatarGroup total={5}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.getByText("+3")).toBeInTheDocument()
    })
  })

  describe("경계값 테스트", () => {
    it("total이 0일 때 SurPlusAvatar가 렌더링되지 않는다", () => {
      render(
        <AvatarGroup total={0}>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      )

      expect(screen.queryByText("+0")).not.toBeInTheDocument()
    })

    it("children이 없을 때도 정상 동작한다", () => {
      render(<AvatarGroup total={5}>{null}</AvatarGroup>)

      expect(screen.getByText("+5")).toBeInTheDocument()
    })
  })
})
