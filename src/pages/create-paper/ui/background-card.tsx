import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function BackgroundCard({ children }: Props) {
  return (
    <div className="flex items-center justify-center w-[154px] h-[154px] rounded-2xl border border-black/20 overflow-hidden">
      {children}
    </div>
  )
}
