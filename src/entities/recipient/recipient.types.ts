// Cross-import 처리
// https://feature-sliced.design/kr/docs/reference/public-api#public-api-for-cross-imports
import type { RecentMessages } from "@/entities/recipient/@x/message"
import type { Reaction } from "@/entities/recipient/@x/reaction"

export type BackgroundColor = "beige" | "purple" | "blue" | "green"

export interface RecipientsResponse {
  count: number
  next: string
  previous: string
  results: Recipient[]
}

export interface Recipient {
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

export interface RecipientsParams {
  limit?: number
  offset?: number
}
