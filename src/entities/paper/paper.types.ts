// Cross-import 처리
// https://feature-sliced.design/kr/docs/reference/public-api#public-api-for-cross-imports
import type { RecentMessages } from "@/entities/paper/@x/message"
import type { Reaction } from "@/entities/paper/@x/reaction"

export type BackgroundColor = "beige" | "purple" | "blue" | "green"

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
  recentMessages: RecentMessages[]
  reactionCount: number
  topReactions: Reaction[]
}

export interface PaperParams {
  limit?: number
  offset?: number
}
