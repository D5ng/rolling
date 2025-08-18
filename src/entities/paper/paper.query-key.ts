import type { PaperParams } from "./paper.types"

export const paperQueryKey = {
  all: ["papers"],
  popularLists: (params: PaperParams) => [...paperQueryKey.all, "popular", params],
  recentLists: (params: PaperParams) => [...paperQueryKey.all, "recent", params]
} as const
