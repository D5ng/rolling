import { useMutation, useQueryClient } from "@tanstack/react-query"

import { paperQueryKey } from "@/entities/paper"

import { addReaction } from "../api/add-reaction"

export function useAddReactionMutation(id: string | number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addReaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: paperQueryKey.detail(id)
      })

      queryClient.invalidateQueries({
        queryKey: paperQueryKey.reaction(id)
      })
    }
  })
}
