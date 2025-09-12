import { AxiosError } from "axios"

import { axiosInstance } from "@/shared/config"

import type { ReactionPayload } from "@/entities/reaction"

export async function addReaction(data: ReactionPayload & { paperId: string | number }) {
  const { paperId, ...payload } = data

  try {
    const { data: responseData } = await axiosInstance.post(`recipients/${paperId}/reactions/`, payload)
    return responseData
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("해당 페이퍼 리액션에 실패했어요. 잠시 후 다시 시도해주세요.")
    }

    throw new Error("해당 페이퍼 리액션에 실패했어요. 잠시 후 다시 시도해주세요.")
  }
}
