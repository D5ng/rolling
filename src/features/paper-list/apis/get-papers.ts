import { AxiosError } from "axios"

import { PAPER_LIMIT, PAPER_OFFSET } from "@/entities/paper"
import { axiosInstance } from "@/shared/config"

import type { PapersResponse, PaperParams } from "@/entities/paper"

export async function getPapers({ limit = PAPER_LIMIT, offset = PAPER_OFFSET }: PaperParams) {
  try {
    const { data } = await axiosInstance.get<PapersResponse>(`papers/`, {
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
