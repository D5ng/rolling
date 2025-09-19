import { useSuspenseQuery } from "@tanstack/react-query"

import { paperQueryKey } from "@/entities/paper"

import { getProfiles } from "../api/get-profiles"

export default function useFetchProfiles() {
  return useSuspenseQuery({
    queryKey: paperQueryKey.profiles(),
    queryFn: () => getProfiles(),
    staleTime: 5000
  })
}
