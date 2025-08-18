import { useSuspenseQuery } from "@tanstack/react-query"

import { paperQueryKey, PAPER_LIMIT, PAPER_OFFSET } from "@/entities/paper"

import { getPapers } from "../apis/get-papers"

import type { PaperParams } from "@/entities/paper"

export function useRecentPapers({ limit = PAPER_LIMIT, offset = PAPER_OFFSET }: PaperParams) {
  return useSuspenseQuery({
    queryKey: paperQueryKey.recentLists({ limit, offset }),
    queryFn: () => getPapers({ limit, offset })
  })
}
