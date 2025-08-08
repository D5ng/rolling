/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react"
import { act } from "react"

import Avatar from "./avatar"
import AvatarFallback from "./avatar-fallback"
import AvatarImage from "./avatar-image"

const mockImage = vi.fn()
const originalImage = window.Image

beforeEach(() => {
  global.Image = mockImage
})

afterEach(() => {
  global.Image = originalImage
  vi.clearAllMocks()
})

describe("Avatar 테스트", () => {
  it("이미지 로드 성공 시 렌더링 테스트", async () => {
    const mockImgInstance = {
      src: "",
      onload: null as (() => void) | null,
      onerror: null as (() => void) | null
    }

    mockImage.mockImplementation(() => mockImgInstance)

    render(
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Avatar"
        />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText("TA")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()

    act(() => {
      mockImgInstance.onload?.()
    })

    await waitFor(() => {
      expect(screen.getByRole("img")).toBeInTheDocument()
      expect(screen.queryByText("TA")).not.toBeInTheDocument()
    })
  })

  it("이미지 로드 실패 시 fallback 표시 테스트", async () => {
    const mockImgInstance = {
      src: "",
      onload: null as (() => void) | null,
      onerror: null as (() => void) | null
    }

    mockImage.mockImplementation(() => mockImgInstance)

    render(
      <Avatar>
        <AvatarImage src="https://invalid-url.com/avatar.jpg" alt="Test Avatar" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText("TA")).toBeInTheDocument()

    act(() => {
      mockImgInstance.onerror?.()
    })

    await waitFor(() => {
      expect(screen.getByText("TA")).toBeInTheDocument()
      expect(screen.queryByRole("img")).not.toBeInTheDocument()
    })
  })

  it("src가 없을 때 fallback 표시 테스트", () => {
    render(
      <Avatar>
        <AvatarImage src="" alt="Test Avatar" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText("TA")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })
})
