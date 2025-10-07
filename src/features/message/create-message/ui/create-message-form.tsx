import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { useParams } from "react-router"

import { Button } from "@/shared/design-system/button"
import { Label } from "@/shared/design-system/label"
import { Select, SelectItem, SelectList, SelectPortal, SelectTrigger } from "@/shared/design-system/select"
import { TextField } from "@/shared/design-system/text-field"

import { formMessageSchema, type FormMessageSchema } from "../model/form-message.schema"
import { useCreateMessageMutation } from "../model/use-create-message.mutation"

import ProfileImages from "./profile-images"

import type { Font } from "@/entities/message"

export default function CreateMessageForm() {
  const { id } = useParams()

  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
    control
  } = useForm<FormMessageSchema>({
    resolver: zodResolver(formMessageSchema),
    defaultValues: {
      sender: "",
      content: "",
      profileImageURL: "",
      relationship: "지인"
    }
  })
  const { mutateAsync, isPending } = useCreateMessageMutation(id!)

  const onSubmit = async (data: FormMessageSchema) => {
    const value: FormMessageSchema & { id: string | number; font: Font } = {
      id: id!,
      sender: data.sender,
      profileImageURL: data.profileImageURL,
      content: data.content,
      relationship: data.relationship,
      font: "Pretendard"
    }

    await mutateAsync(value)
  }

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="sender"
        label="From."
        placeholder="이름을 입력해 주세요"
        className="w-full"
        error={!!errors.sender}
        helperText={errors.sender?.message}
        {...register("sender")}
      />

      <div>
        <div className="flex flex-col gap-3">
          <Label>프로필 이미지</Label>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500">프로필 이미지를 선택해주세요!</p>
            <Controller
              control={control}
              name="profileImageURL"
              render={({ field }) => {
                const onSelectedImage = (url: string) => {
                  field.onChange(url)
                }

                return <ProfileImages selectedImage={field.value} onSelectedImage={onSelectedImage} />
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Label>상대와의 관계</Label>
        <Select defaultValue="지인">
          <SelectTrigger>지인</SelectTrigger>
          <SelectPortal>
            <SelectList>
              <SelectItem value="지인" />
              <SelectItem value="동료" />
              <SelectItem value="가족" />
              <SelectItem value="친구" />
            </SelectList>
          </SelectPortal>
        </Select>
      </div>

      <TextField
        as="textarea"
        id="content"
        label="내용을 입력해 주세요"
        placeholder="내용을 입력해 주세요"
        className="w-full"
        error={!!errors.content}
        helperText={errors.content?.message}
        {...register("content")}
      />

      <div className="fixed left-0 bottom-6 px-5 w-full desktop:relative desktop:px-0 desktop:mt-16">
        <Button className="w-full h-14 rounded-xl" type="submit" disabled={isPending || !isValid} isLoading={isPending}>
          생성하기
        </Button>
      </div>
    </form>
  )
}
