import type { ReactNode } from "react"

export default function Slottable({ children }: { children: ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
