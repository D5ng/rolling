import { useSuspenseQuery } from "@tanstack/react-query"

import { paperQueryKey, PAPER_LIMIT, PAPER_OFFSET } from "@/entities/paper"

import { getPapers } from "../apis/get-papers"

import type { Paper, PaperParams } from "@/entities/paper"

export function usePopularPapers({ limit = PAPER_LIMIT, offset = PAPER_OFFSET }: PaperParams) {
  return useSuspenseQuery({
    queryKey: paperQueryKey.popularLists({ limit, offset }),
    queryFn: () => getPapers({ limit, offset }),
    select: (data) => {
      const popularData = popularPapers(data!.results)

      return {
        ...data,
        results: popularData
      }
    }
  })
}

function popularPapers(papers: Paper[]) {
  return papers.sort((a, b) => b.messageCount - a.messageCount)
}
