import { createContext, useContext, useMemo, type ReactNode } from "react"

export default function createContextScope(name: string) {
  function createCustomContext<ContextValueType extends object>(defaultContext?: ContextValueType) {
    const BaseContext = createContext<ContextValueType | undefined>(defaultContext)

    function Provider({ children, value }: { children: ReactNode; value: ContextValueType }) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const memoizedValue = useMemo(() => value, Object.values(value))
      return <BaseContext.Provider value={memoizedValue}>{children}</BaseContext.Provider>
    }

    function useCustomContext() {
      const context = useContext(BaseContext)

      if (!context) {
        throw new Error(`${name} 컨텍스트를 찾을 수 없습니다.`)
      }

      return context
    }

    return [Provider, useCustomContext] as const
  }

  return createCustomContext
}
