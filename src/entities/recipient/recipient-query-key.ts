import type { RecipientsParams } from "@/features/paper-list/apis"

export const recipientQueryKey = {
  all: ["recipients"],
  popularLists: (params: RecipientsParams) => [...recipientQueryKey.all, "popular", params],
  recentLists: (params: RecipientsParams) => [...recipientQueryKey.all, "recent", params]
} as const
