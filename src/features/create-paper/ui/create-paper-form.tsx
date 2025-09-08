import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

import { PAPER_BACKGROUND_COLORS, PAPER_BACKGROUND_IMAGES } from "@/entities/paper/paper.constants"
import { Button } from "@/shared/design-system/button"
import { Label } from "@/shared/design-system/label"
import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlList,
  SegmentedControlTrigger
} from "@/shared/design-system/segmented-control"
import { TextField } from "@/shared/design-system/text-field"

import { formPaperSchema, type FormPaperSchema } from "../models/form-paper.schema"
import { useCreatePaperMutation } from "../models/use-create-paper.mutation"

import BackgroundCard from "./background-card"
import BackgroundItem from "./background-item"
import BackgroundCardList from "./background-list"

const BACKGROUND_COLOR_DEFAULT_VALUE = PAPER_BACKGROUND_COLORS[0]

export default function CreatePaperForm() {
  const { mutate: createPaperMutate, isPending } = useCreatePaperMutation()

  const {
    handleSubmit,
    register,
    control,
    formState: { isValid, errors }
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(formPaperSchema),
    defaultValues: {
      backgroundColor: BACKGROUND_COLOR_DEFAULT_VALUE,
      backgroundImageURL: null
    }
  })

  const [backgroundType, setBackgroundType] = useState<"color" | "image">("color")

  const onSubmit = (data: FormPaperSchema) => {
    const value = {
      name: data.name,
      backgroundColor: data.backgroundColor,
      backgroundImageURL: backgroundType === "color" ? null : data.backgroundImageURL
    }

    createPaperMutate(value)
  }

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="name"
        label="To."
        placeholder="받는 사람 이름을 입력해 주세요"
        className="w-full"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name")}
      />
      <div>
        <div className="flex flex-col gap-1">
          <Label>배경화면을 선택해 주세요.</Label>
          <p className="text-sm text-gray-500">컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <SegmentedControl
          value={backgroundType}
          defaultValue={backgroundType}
          onSelectedChange={(value) => setBackgroundType(value as "color" | "image")}
        >
          <SegmentedControlList className="my-6 tablet:mt-6 tablet:mb-10">
            <SegmentedControlTrigger value="color">컬러</SegmentedControlTrigger>
            <SegmentedControlTrigger value="image">이미지</SegmentedControlTrigger>
          </SegmentedControlList>
          <SegmentedControlContent value="color">
            <Controller
              control={control}
              name="backgroundColor"
              render={({ field: { value, onChange } }) => (
                <BackgroundCardList>
                  {PAPER_BACKGROUND_COLORS.map((backgroundColor) => (
                    <BackgroundCard key={backgroundColor}>
                      <BackgroundItem
                        isSelected={value === backgroundColor}
                        backgroundColor={backgroundColor}
                        onBackgroundChange={onChange}
                      />
                    </BackgroundCard>
                  ))}
                </BackgroundCardList>
              )}
            />
          </SegmentedControlContent>
          <SegmentedControlContent value="image">
            <Controller
              control={control}
              name="backgroundImageURL"
              render={({ field: { value, onChange } }) => (
                <BackgroundCardList>
                  {PAPER_BACKGROUND_IMAGES.map((image) => (
                    <BackgroundCard key={image}>
                      <BackgroundItem isSelected={value === image} src={image} onBackgroundChange={onChange} />
                    </BackgroundCard>
                  ))}
                </BackgroundCardList>
              )}
            />
          </SegmentedControlContent>
        </SegmentedControl>
      </div>
      <div className="fixed left-0 bottom-6 px-5 w-full desktop:relative desktop:px-0 desktop:mt-16">
        <Button type="submit" className="w-full h-14 rounded-xl" disabled={isPending || !isValid} isLoading={isPending}>
          생성하기
        </Button>
      </div>
    </form>
  )
}
