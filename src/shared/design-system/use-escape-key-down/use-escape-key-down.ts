import { useEffect, useRef } from "react"

export default function useEscapeKeydown(onEscapeKeyDown: (event: KeyboardEvent) => void) {
  const onEscapeKeyDownRef = useRef(onEscapeKeyDown)

  useEffect(() => {
    onEscapeKeyDownRef.current = onEscapeKeyDown
  }, [onEscapeKeyDown])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscapeKeyDownRef.current(event)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
}
