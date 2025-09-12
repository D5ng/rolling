import { AxiosError } from "axios"

import { axiosInstance } from "@/shared/config"

import type { Paper } from "@/entities/paper"

export async function getPaperDetail(id: string | number) {
  try {
    const { data } = await axiosInstance.get<Paper>(`recipients/${id}/`)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`${id} 페이퍼에 접근하는데 실패했어요. 잠시 후 다시 시도해주세요.`)
    }
  }
}
