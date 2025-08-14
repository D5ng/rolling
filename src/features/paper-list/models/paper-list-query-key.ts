import { type RecipientsQueryKey } from "../apis"

import { RECIPIENTS_LIMIT, RECIPIENTS_OFFSET, RECIPIENTS_TYPE } from "./paper-list.constants"

export const paperListQueryKey = {
  all: ["paper-list"],
  lists: ({
    type = RECIPIENTS_TYPE.RECENT,
    limit = RECIPIENTS_LIMIT,
    offset = RECIPIENTS_OFFSET
  }: RecipientsQueryKey) => [...paperListQueryKey.all, "lists", type, limit, offset]
}
