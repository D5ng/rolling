import { useSuspenseQuery } from "@tanstack/react-query"

import { recipientQueryKey, RECIPIENTS_LIMIT, RECIPIENTS_OFFSET } from "@/entities/paper"

import { getRecipients } from "../apis/get-recipients"

import type { RecipientsParams } from "@/entities/paper"

export function useRecentRecipients({ limit = RECIPIENTS_LIMIT, offset = RECIPIENTS_OFFSET }: RecipientsParams) {
  return useSuspenseQuery({
    queryKey: recipientQueryKey.recentLists({ limit, offset }),
    queryFn: () => getRecipients({ limit, offset })
  })
}
