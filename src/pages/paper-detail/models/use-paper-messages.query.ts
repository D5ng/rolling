import { useSuspenseQuery } from "@tanstack/react-query"

import { paperQueryKey } from "@/entities/paper"

import { getPaperMessages } from "../api/get-paper-messages"

export function usePaperMessagesQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: paperQueryKey.messages(id),
    queryFn: () => getPaperMessages(id)
  })
}
