import { AxiosError } from "axios"

import { axiosInstance } from "@/shared/config"

import { MESSAGE_LIMIT_COUNT } from "../constants/paper-detail.constant"

import type { MessagesResponse } from "@/entities/message"

export async function getPaperMessages(id: string | number, offset: string | number) {
  try {
    const { data } = await axiosInstance.get<MessagesResponse>(`recipients/${id}/messages/`, {
      params: {
        limit: MESSAGE_LIMIT_COUNT,
        offset
      }
    })
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`${id} 페이퍼에 접근하는데 실패했어요. 잠시 후 다시 시도해주세요.`)
    }

    throw new Error(`${id} 페이퍼에 접근하는데 실패했어요. 잠시 후 다시 시도해주세요.`)
  }
}
