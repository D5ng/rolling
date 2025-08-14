import { render, screen } from "@testing-library/react"

import ReactionBadge from "./reaction-badge"

describe("ReactionBadge 테스트", () => {
  it("100 이상의 값은 +99로 표시된다.", () => {
    render(<ReactionBadge emoji="👍" count={100} />)

    expect(screen.getByText("+99")).toBeInTheDocument()
  })

  it("0 미만의 값은 0으로 표시된다.", () => {
    render(<ReactionBadge emoji="👍" count={-1} />)

    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("100 이하의 값은 그대로 표시된다.", () => {
    render(<ReactionBadge emoji="👍" count={99} />)

    expect(screen.getByText("99")).toBeInTheDocument()
  })
})
