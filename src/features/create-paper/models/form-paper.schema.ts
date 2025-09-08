import * as z from "zod"

import { PAPER_BACKGROUND_COLORS } from "@/entities/paper/paper.constants"

export const formPaperSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해 주세요." }),
  backgroundColor: z.enum(PAPER_BACKGROUND_COLORS),
  backgroundImageURL: z.string().nullable()
})

export type FormPaperSchema = z.infer<typeof formPaperSchema>
