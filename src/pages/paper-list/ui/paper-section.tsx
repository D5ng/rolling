import type { ReactNode } from "react"

interface Props {
  renderTitle: string
  children: ReactNode
}

export default function PaperSection({ renderTitle, children }: Props) {
  return (
    <section className="flex flex-col gap-3 pt-10 tablet:gap-4 tablet:pt-12">
      <h2 className="ml-5 text-xl font-bold tablet:ml-6 desktop:ml-0">{renderTitle}</h2>
      {children}
    </section>
  )
}
