import { useSuspenseQuery } from "@tanstack/react-query"

import { recipientQueryKey, RECIPIENTS_LIMIT, RECIPIENTS_OFFSET } from "@/entities/paper"

import { getRecipients } from "../apis/get-recipients"

import type { Recipient, RecipientsParams } from "@/entities/paper"

export function usePopularRecipients({ limit = RECIPIENTS_LIMIT, offset = RECIPIENTS_OFFSET }: RecipientsParams) {
  return useSuspenseQuery({
    queryKey: recipientQueryKey.popularLists({ limit, offset }),
    queryFn: () => getRecipients({ limit, offset }),
    select: (data) => {
      const popularData = popularRecipients(data!.results)

      return {
        ...data,
        results: popularData
      }
    }
  })
}

function popularRecipients(recipients: Recipient[]) {
  return recipients.sort((a, b) => b.messageCount - a.messageCount)
}
