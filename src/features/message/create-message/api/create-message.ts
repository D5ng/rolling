import { AxiosError } from "axios"

import { axiosInstance } from "@/shared/config"

import type { FormMessageSchema } from "../model/form-message.schema"

interface Params extends FormMessageSchema {
  id: string | number
}

export async function createMessage({ id, ...payload }: Params) {
  try {
    await axiosInstance.post(`recipients/${id}/messages/`, payload)
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("메세지를 생성하는데 에러가 발생했어요.")
    }

    throw new Error("메세지를 생성하는데 에러가 발생했어요.")
  }
}
