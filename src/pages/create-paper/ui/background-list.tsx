import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function BackgroundCardList({ children }: Props) {
  return <ul className="flex flex-wrap gap-3">{children}</ul>
}
