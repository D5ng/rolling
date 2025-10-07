/* eslint-disable react/no-array-index-key */
import { SCREENS } from "@/shared/constants"
import { useWindowSize } from "@/shared/hooks"
import { Header } from "@/widgets"

import MessageSkeleton from "./message.skeleton"

export default function PaperDetailSkeleton() {
  const { width } = useWindowSize({ initializeWithValue: true })
  return (
    <>
      {SCREENS.tablet < width && <Header />}
      <div className="border-b border-gray-200 tablet:px-6 tablet:py-3">
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center tablet:flex-row tablet:justify-between tablet:items-center">
          <div className="border-b border-gray-200 px-5 py-3 tablet:p-0 tablet:border-0">
            <div className="bg-gray-200 w-[227px] animate-pulse h-7 rounded-md desktop:h-[42px]" />
          </div>
          <div className="flex items-center justify-between px-5 py-2 tablet:p-0 tablet:gap-3">
            <div className="hidden animate-pulse desktop:flex desktop:items-center desktop:gap-3">
              <div className="flex -space-x-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="w-7 h-7 bg-gray-200 rounded-full" />
                ))}
              </div>
              <p className="bg-gray-200 w-[141px] h-6 rounded-md" />
              <div className="w-[1px] h-[28px] bg-gray-200 mx-[15px]" />
            </div>

            <div className="relative flex items-center gap-2">
              <div className="flex items-center gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="w-[66px] h-[36px] bg-gray-200 rounded-full animate-pulse" />
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[36px] h-[32px] rounded-md animate-pulse bg-gray-200" />
              <div className="w-[1px] h-[28px] bg-gray-200 mx-[15px]" />
              <div className="w-[36px] h-[32px] rounded-md animate-pulse bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
      <MessageSkeleton />
    </>
  )
}
