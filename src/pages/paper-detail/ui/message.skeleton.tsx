/* eslint-disable react/no-array-index-key */

import { PlusIcon } from "@/shared/assets/icons"

import { MESSAGE_LIMIT_COUNT } from "../constants/paper-detail.constant"

export default function MessageSkeleton() {
  return (
    <div className={`px-5 py-10 desktop:px-0 desktop:py-20`}>
      <ul
        className={`max-w-[1200px] mx-auto grid grid-cols-1 gap-y-4 tablet:grid-cols-2 tablet:gap-4 desktop:grid-cols-3 desktop:gap-6`}
      >
        <li className="bg-gray-200 h-[63.8889vw] drop-shadow-sm rounded-2xl tablet:h-[284px] desktop:h-[280px]">
          <div className="flex justify-center items-center h-full">
            <div className="bg-gray-500 w-14 h-14 rounded-full flex justify-center items-center">
              <PlusIcon className="stroke-white" />
            </div>
          </div>
        </li>

        {Array.from({ length: MESSAGE_LIMIT_COUNT }).map((_, index) => (
          <MessageItemSkeleton key={index} />
        ))}
      </ul>
    </div>
  )
}

export function MessageItemSkeleton() {
  return (
    <li className="bg-gray-200 drop-shadow-sm h-[63.8889vw] rounded-2xl tablet:h-[284px] desktop:h-[280px]">
      <div className="pt-7 px-6 pb-6 h-full">
        <div className="relative h-full">
          <div className="flex gap-1.5 pb-4 border-b border-gray-200 desktop:gap-3">
            <div className="w-14 h-14 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-2/3">
              <div className="w-full h-6 bg-gray-300 rounded-md mb-2 animate-pulse" />
              <div className="w-10 h-[17px] bg-gray-300 rounded-md animate-pulse" />
            </div>
          </div>
          <div className="pt-4">
            <div className="h-5 bg-gray-300 mb-2 rounded-md animate-pulse" />
            <div className="h-5 bg-gray-300 mb-2 rounded-md animate-pulse" />
            <div className="h-5 bg-gray-300 mb-2 rounded-md animate-pulse" />
          </div>
          <span className="absolute left-0 bottom-0 h-6 bg-gray-300 w-2/4 rounded-md animate-pulse" />
        </div>
      </div>
    </li>
  )
}
