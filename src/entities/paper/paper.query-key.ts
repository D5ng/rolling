import type { PaperParams } from "./paper.types"

export const paperQueryKey = {
  all: ["papers"],
  popularLists: (params: PaperParams) => [...paperQueryKey.all, "popular", params],
  recentLists: (params: PaperParams) => [...paperQueryKey.all, "recent", params],
  detail: (id: string | number) => [...paperQueryKey.all, "detail", id],
  reaction: (id: string | number) => [...paperQueryKey.all, "reaction", id],
  messages: (id: string | number) => [...paperQueryKey.all, "messages", id]
} as const
