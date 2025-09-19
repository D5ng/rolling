import * as z from "zod"

import { RELATION_SHIP_LISTS } from "@/entities/message"

export const formMessageSchema = z.object({
  sender: z.string().min(1, { message: "이름을 입력해주세요. " }),
  profileImageURL: z.string().min(1, { message: "프로필 이미지를 입력해주세요." }),
  relationship: z.enum(RELATION_SHIP_LISTS),
  content: z.string().min(1, { message: "보낼 메세지를 입력해주세요." })
})

export type FormMessageSchema = z.infer<typeof formMessageSchema>
