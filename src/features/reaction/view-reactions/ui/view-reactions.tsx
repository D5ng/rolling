import { ReactionBadge } from "@/shared/design-system/reaction-badge"

import { useReactionsQuery } from "../model/use-reactions.query"

interface Props {
  id: string | number
}

export default function ViewReactions({ id }: Props) {
  const { data } = useReactionsQuery(id)

  return (
    <div className="absolute p-4 bg-white rounded-2xl border border-gray-300 grid grid-cols-3 gap-x-2 gap-y-2.5 top-[calc(100%+10px)] left-0 z-50">
      {data.results.map((reaction) => (
        <ReactionBadge key={reaction.id} emoji={reaction.emoji} count={reaction.count} />
      ))}
    </div>
  )
}
