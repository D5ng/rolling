export type Font = "Pretendard" | "Noto Sans" | "나눔명조" | "나눔손글씨 손편지체"

export interface RecentMessages {
  id: number
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: string
  content: string
  font: Font
  createdAt: string
}
