// Cross-import 처리
// https://feature-sliced.design/kr/docs/reference/public-api#public-api-for-cross-imports
import type { PAPER_BACKGROUND_COLORS, PAPER_BACKGROUND_IMAGES } from "./paper.constants"
import type { Message } from "@/entities/paper/@x/message"
import type { Reaction } from "@/entities/paper/@x/reaction"

export type BackgroundColor = (typeof PAPER_BACKGROUND_COLORS)[number]

export type BackgroundImage = (typeof PAPER_BACKGROUND_IMAGES)[number]

export interface PapersResponse {
  count: number
  next: string
  previous: string
  results: Paper[]
}

export interface Paper {
  id: number
  team: string
  name: string
  backgroundColor: BackgroundColor
  backgroundImageURL: string
  createdAt: string
  messageCount: number
  recentMessages: Message[]
  reactionCount: number
  topReactions: Reaction[]
}

export interface PaperParams {
  limit?: number
  offset?: number
}
