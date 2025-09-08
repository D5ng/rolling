import { AxiosError } from "axios"

import { axiosInstance } from "@/shared/config"

import type { FormPaperSchema } from "../models/form-paper.schema"

export async function createPaper(data: FormPaperSchema) {
  try {
    const { data: responseData } = await axiosInstance.post("recipients/", data)
    return responseData
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("롤링 페이퍼 생성에 실패했어요. 잠시 후 다시 시도해주세요.")
    }
  }
}
