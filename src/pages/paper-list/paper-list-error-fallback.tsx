import { Button } from "@/shared/design-system/button"

import type { FallbackProps } from "react-error-boundary"

export default function PaperListErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">에러가 발생했어요</h1>
        <p className="text-gray-500">{error.message}</p>
      </div>
      <Button onClick={resetErrorBoundary}>다시 시도</Button>
    </div>
  )
}
