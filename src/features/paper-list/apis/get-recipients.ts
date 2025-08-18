import { AxiosError } from "axios"

import { RECIPIENTS_LIMIT, RECIPIENTS_OFFSET } from "@/entities/paper"
import { axiosInstance } from "@/shared/config"

import type { RecipientsResponse, RecipientsParams } from "@/entities/paper"

export async function getRecipients({ limit = RECIPIENTS_LIMIT, offset = RECIPIENTS_OFFSET }: RecipientsParams) {
  try {
    const { data } = await axiosInstance.get<RecipientsResponse>(`recipients/`, {
      params: {
        limit,
        offset
      }
    })

    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("롤링 페이퍼 목록을 불러오는데 실패했어요. 잠시 후 다시 시도해주세요.")
    }
  }
}
