import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

import { paperQueryKey } from "@/entities/paper"

import { createMessage } from "../api/create-message"

export function useCreateMessageMutation(id: string | number) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: paperQueryKey.messages(id)
      })

      navigate(`/paper/${id}`)
      toast.success("메세지가 성공적으로 생성되었어요.")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
}
