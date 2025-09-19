import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"

import type { ProfileImage } from "../model/types"

const client = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_S3_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_S3_ACCESS_KEY
  }
})

export async function getProfiles() {
  try {
    const command = new ListObjectsCommand({
      Bucket: import.meta.env.VITE_AWS_S3_BUCKET
    })

    const data = await client.send(command)

    if (!data.Contents) {
      throw new Error("이미지를 불러오는데 실패했어요")
    }

    const transformedData = data.Contents?.map((data) => ({
      id: data.Key,
      url: `${import.meta.env.VITE_AWS_S3_URL}${data.Key}`
    }))

    return transformedData as ProfileImage[]
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}
