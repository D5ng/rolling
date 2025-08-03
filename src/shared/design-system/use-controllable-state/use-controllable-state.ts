import { useCallback, useEffect, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from "react"

interface Params<T> {
  prop?: T
  defaultProp: T
  onChange?: (value: T) => void
}

export default function useControllableState<T>({ prop, defaultProp, onChange }: Params<T>) {
  const [unControlledValue, setUnControlledValue, onChangeRef] = useUnControllableState({ defaultProp, onChange })

  const isControlled = prop !== undefined
  const value = isControlled ? prop : unControlledValue

  const setValue = useCallback<Dispatch<SetStateAction<T>>>(
    (nextValue) => {
      if (isControlled) {
        const value = isFunction(nextValue) ? nextValue(prop) : nextValue

        if (value !== prop) {
          onChangeRef.current?.(value)
        }
      } else {
        setUnControlledValue(nextValue)
      }
    },
    [isControlled, onChangeRef, setUnControlledValue, prop]
  )

  return [value, setValue] as const
}

function useUnControllableState<T>({
  defaultProp,
  onChange
}: Params<T>): [T, Dispatch<SetStateAction<T>>, RefObject<((value: T) => void) | undefined>] {
  const [value, setValue] = useState<T>(defaultProp)

  const prevValueRef = useRef(value)
  const onChangeRef = useRef(onChange)

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value)
      prevValueRef.current = value
    }
  }, [value])

  return [value, setValue, onChangeRef] as const
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === "function"
}
