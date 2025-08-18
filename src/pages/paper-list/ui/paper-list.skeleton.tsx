interface Props {
  itemCount?: number
}

export default function PaperListSkeleton({ itemCount = 5 }: Props) {
  return (
    <section className="flex flex-col gap-3 pt-10 tablet:gap-4 tablet:pt-12">
      <div className="ml-5 tablet:ml-6 desktop:ml-0">
        <div className="w-48 h-6 bg-gray-300 rounded animate-pulse" />
      </div>

      <div className="flex gap-3 pl-5 overflow-hidden tablet:pl-6 desktop:pl-0 desktop:gap-5 desktop:w-[1160px] desktop:mx-auto">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`skeleton-item-${index}`}
            className="flex-shrink-0 w-[208px] h-[232px] flex flex-col justify-between rounded-2xl border border-gray-300 px-6 pt-[30px] pb-[20px] bg-gray-200 tablet:w-[275px] tablet:h-[260px] animate-pulse"
          >
            <div className="flex flex-col gap-3">
              <div className="w-24 h-6 bg-gray-300 rounded" />

              <div className="flex -space-x-2">
                <div className="w-7 h-7 bg-gray-300 rounded-full" />
                <div className="w-7 h-7 bg-gray-300 rounded-full" />
                <div className="w-7 h-7 bg-gray-300 rounded-full" />
                <div className="w-7 h-7 bg-gray-300 rounded-full" />
              </div>

              <div className="w-32 h-5 bg-gray-300 rounded" />
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-300">
              <div className="w-12 h-6 bg-gray-300 rounded-full" />
              <div className="w-12 h-6 bg-gray-300 rounded-full" />
              <div className="w-12 h-6 bg-gray-300 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
