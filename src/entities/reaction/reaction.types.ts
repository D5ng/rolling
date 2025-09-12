export interface Reaction {
  id: number
  emoji: string
  count: number
}

export interface ReactionPayload {
  emoji: string
  type: "increase" | "decrease"
}

export interface ReactionResponse {
  count: 4
  next: null
  previous: null
  results: Reaction[]
}
