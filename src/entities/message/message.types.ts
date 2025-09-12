export type Font = "Pretendard" | "Noto Sans" | "나눔명조" | "나눔손글씨 손편지체"

type RelationShip = "지인" | "동료" | "가족" | "친구"

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
