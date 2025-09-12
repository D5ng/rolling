import { useSuspenseQuery } from "@tanstack/react-query"

import { paperQueryKey } from "@/entities/paper"

import { getPaperDetail } from "../api/get-paper-detail"

export default function usePaperDetail(id: string | number) {
  return useSuspenseQuery({
    queryKey: paperQueryKey.detail(id),
    queryFn: () => getPaperDetail(id)
  })
}
