import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

import { PAPER_LIMIT, PAPER_OFFSET, paperQueryKey } from "@/entities/paper"

import { createPaper } from "../api/create-paper"

export function useCreatePaperMutation() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createPaper,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: paperQueryKey.recentLists({ limit: PAPER_LIMIT, offset: PAPER_OFFSET })
      })

      navigate("/lists")
      toast.success("페이퍼가 생성되었습니다.")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
}
