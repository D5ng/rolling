import { FONTS, RELATION_SHIP_LISTS } from "./message.constants"

export type Font = (typeof FONTS)[number]

type RelationShip = (typeof RELATION_SHIP_LISTS)[number]

export interface MessagesResponse {
  count: number
  next: string
  previous: string
  results: Message[]
}

export interface Message {
  id: number
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: RelationShip
  content: string
  font: Font
  createdAt: string
}
