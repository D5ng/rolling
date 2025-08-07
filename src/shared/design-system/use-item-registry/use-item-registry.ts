import { useCallback, useState } from "react"

/**
 * 아이템 등록/해제를 관리하는 커스텀 훅
 *
 * @template T - 아이템의 타입
 * @param initialItems - 초기 등록할 아이템들의 배열
 * @returns 아이템 관리 함수들의 튜플
 *   - items: 현재 등록된 아이템들의 Set
 *   - registerItem: 새로운 아이템을 등록하는 함수
 *   - unregisterItem: 아이템을 해제하는 함수
 *
 * @example
 * ```tsx
 * const [items, registerItem, unregisterItem] = useItemRegistry<string>([])
 *
 * // 아이템 등록
 * registerItem("item1")
 *
 * // 아이템 해제
 * unregisterItem("item1")
 * ```
 */

export default function useItemRegistry<T>(initialItems: T[]) {
  const [items, setItems] = useState<T[]>(initialItems)

  const registerItem = useCallback((item: T) => {
    setItems((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems
      }

      return [...prevItems, item]
    })
  }, [])

  const unregisterItem = useCallback((item: T) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item))
  }, [])

  return [items, registerItem, unregisterItem] as const
}
