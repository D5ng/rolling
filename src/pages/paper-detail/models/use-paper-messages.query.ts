import { useSuspenseInfiniteQuery } from "@tanstack/react-query"

import { paperQueryKey } from "@/entities/paper"

import { getPaperMessages } from "../api/get-paper-messages"

export function usePaperMessagesQuery(id: string | number) {
  return useSuspenseInfiniteQuery({
    queryKey: paperQueryKey.messages(id),
    queryFn: ({ pageParam = 0 }) => getPaperMessages(id, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const offset = new URL(lastPage.next).searchParams.get("offset")
        return Number(offset)
      }

      return undefined
    },
    select: (data) => {
      return data.pages.flatMap((page) => page.results)
    }
  })
}
