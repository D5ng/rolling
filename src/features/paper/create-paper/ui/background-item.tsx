import { cva, type VariantProps } from "class-variance-authority"

import { CheckIcon } from "@/shared/assets/icons"

const backgroundColorVariants = cva(`w-full h-full flex items-center justify-center`, {
  variants: {
    backgroundColor: {
      beige: "bg-beige-200",
      purple: "bg-purple-200",
      blue: "bg-blue-200",
      green: "bg-green-200"
    }
  },
  defaultVariants: {
    backgroundColor: "beige"
  }
})

interface Props extends VariantProps<typeof backgroundColorVariants> {
  isSelected?: boolean
  src?: string
  onBackgroundChange: (value: string) => void
}

export default function BackgroundItem({ isSelected, backgroundColor, src, onBackgroundChange, ...restProps }: Props) {
  const handleBackgroundChange = () => {
    if (backgroundColor) {
      onBackgroundChange(backgroundColor)
    }

    if (src) {
      onBackgroundChange(src)
    }
  }

  return (
    <button
      type="button"
      className={backgroundColorVariants({ backgroundColor })}
      onClick={handleBackgroundChange}
      {...restProps}
    >
      {src && <img src={src} alt="background" className="w-full h-full object-cover" />}
      {isSelected && (
        <div className="absolute w-10 h-10 flex items-center justify-center rounded-full bg-black/50">
          <CheckIcon className="stroke-white" />
        </div>
      )}
    </button>
  )
}
