/**
 * @param targetStart - 기준점의 left, top, right, bottom
 * @param targetSize  - 기준점의 width, height
 * @param floatingSize - 플로팅 요소의 width, height
 * @returns 기준점에 대한 가운데 정렬
 */
function centerAlign(targetStart: number, targetSize: number, floatingSize: number): number {
  return targetStart + (targetSize - floatingSize) / 2
}

export const positionCalculators = {
  top: (anchorRect: DOMRect, floatingRect: DOMRect, offset: number) => ({
    top: anchorRect.top - floatingRect.height - offset,
    left: centerAlign(anchorRect.left, anchorRect.width, floatingRect.width)
  }),

  bottom: (anchorRect: DOMRect, floatingRect: DOMRect, offset: number) => ({
    top: anchorRect.bottom + offset,
    left: centerAlign(anchorRect.left, anchorRect.width, floatingRect.width)
  }),

  left: (anchorRect: DOMRect, floatingRect: DOMRect, offset: number) => ({
    left: anchorRect.left - floatingRect.width - offset,
    top: centerAlign(anchorRect.top, anchorRect.height, floatingRect.height)
  }),

  right: (anchorRect: DOMRect, floatingRect: DOMRect, offset: number) => ({
    left: anchorRect.right + offset,
    top: centerAlign(anchorRect.top, anchorRect.height, floatingRect.height)
  })
}
