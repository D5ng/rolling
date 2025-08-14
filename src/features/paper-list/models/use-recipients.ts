import { useSuspenseQuery } from "@tanstack/react-query"

import { getRecipients, type RecipientsQueryKey } from "../apis"

import { paperListQueryKey } from "./paper-list-query-key"
import { RECIPIENTS_LIMIT, RECIPIENTS_OFFSET, RECIPIENTS_TYPE } from "./paper-list.constants"

export function useRecipients({ type, limit = RECIPIENTS_LIMIT, offset = RECIPIENTS_OFFSET }: RecipientsQueryKey) {
  return useSuspenseQuery({
    queryKey: paperListQueryKey.lists({ type, limit, offset }),
    queryFn: () => getRecipients({ limit, offset }),
    select: (data) => {
      if (type === RECIPIENTS_TYPE.POPULAR) {
        const sortedResults = data.results.sort((a, b) => b.messageCount - a.messageCount)
        return {
          ...data,
          results: sortedResults
        }
      }

      return data
    }
  })
}
