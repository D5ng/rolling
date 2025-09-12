import { Suspense, useRef } from "react"

import { ArrowIcon } from "@/shared/assets/icons"
import { useOutsideClick } from "@/shared/design-system/use-outside-click"
import { useBooleanState } from "@/shared/hooks"

import ViewReactions from "./view-reactions"
import ViewReactionsSkeleton from "./view-reactions.skeleton"

interface Props {
  id: string | number
}

export default function ViewReactionsButton({ id }: Props) {
  const [open, _, close, toggle] = useBooleanState()
  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick(
    ref,
    () => {
      close()
    },
    open
  )

  return (
    <div ref={ref} className="w-6 h-6">
      <button onClick={() => toggle()}>
        <ArrowIcon className="stroke-black" />
      </button>
      {open && (
        <Suspense fallback={<ViewReactionsSkeleton />}>
          <ViewReactions id={id} />
        </Suspense>
      )}
    </div>
  )
}
