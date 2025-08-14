import { axiosInstance } from "@/shared/config"

import { RECIPIENTS_LIMIT, RECIPIENTS_OFFSET } from "../models/paper-list.constants"

import type { RecipientsParams } from "./types"
import type { RecipientsResponse } from "@/entities/recipient"

export async function getRecipients({ limit = RECIPIENTS_LIMIT, offset = RECIPIENTS_OFFSET }: RecipientsParams = {}) {
  const { data } = await axiosInstance.get<RecipientsResponse>(`recipients/`, {
    params: {
      limit,
      offset
    }
  })

  return data
}
