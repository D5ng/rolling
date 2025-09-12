import { AxiosError } from "axios"

import { axiosInstance } from "@/shared/config"

import type { ReactionResponse } from "@/entities/reaction"

export async function getReactions(id: string | number) {
  try {
    const { data } = await axiosInstance.get<ReactionResponse>(`recipients/${id}/reactions/`)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("해당 페이퍼 리액션에 실패했어요. 잠시 후 다시 시도해주세요.")
    }

    throw new Error("해당 페이퍼 리액션에 실패했어요. 잠시 후 다시 시도해주세요.")
  }
}
