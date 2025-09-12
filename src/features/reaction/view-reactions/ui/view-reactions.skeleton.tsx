export default function ViewReactionsSkeleton() {
  return (
    <div className="absolute p-4 bg-white rounded-2xl border border-gray-300 grid grid-cols-3 gap-x-2 gap-y-2.5 top-[calc(100%+10px)] left-0">
      {Array.from({ length: 6 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="w-10 h-7 bg-gray-200 animate-pulse rounded-full" />
      ))}
    </div>
  )
}
