type RECIPIENTS_TYPE = "recent" | "popular"

export interface RecipientsParams {
  limit?: number
  offset?: number
}

export interface RecipientsQueryKey extends RecipientsParams {
  type: RECIPIENTS_TYPE
  limit?: number
  offset?: number
}
