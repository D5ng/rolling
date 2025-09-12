import { useSuspenseQuery } from "@tanstack/react-query"

import { paperQueryKey } from "@/entities/paper"

import { getReactions } from "../api/get-reactions"

export function useReactionsQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: paperQueryKey.reaction(id),
    queryFn: () => getReactions(id)
  })
}
