import { render, screen } from "@testing-library/react"

import Badge from "./badge"

describe("Badge", () => {
  it("Badge 렌더링", () => {
    render(<Badge variant="지인" />)
    const badge = screen.getByText("지인")
    expect(badge).toBeInTheDocument()
  })

  it("Badge Relationship 속성에 따른 렌더링", () => {
    render(
      <>
        <Badge data-testid="badge" variant="지인" />
        <Badge data-testid="badge" variant="동료" />
        <Badge data-testid="badge" variant="가족" />
        <Badge data-testid="badge" variant="친구" />
      </>
    )

    const badges = screen.getAllByTestId("badge")
    expect(badges).toHaveLength(4)
    expect(badges[0]).toHaveTextContent("지인")
    expect(badges[1]).toHaveTextContent("동료")
    expect(badges[2]).toHaveTextContent("가족")
    expect(badges[3]).toHaveTextContent("친구")
  })
})
