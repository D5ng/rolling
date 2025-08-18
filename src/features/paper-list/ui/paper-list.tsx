import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import PaperItem from "./paper-item"

import type { Recipient } from "@/entities/paper"

import "swiper/css"
import "swiper/css/navigation"

interface Props {
  recipients: Recipient[]
}

export default function PaperList({ recipients }: Props) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView="auto"
      spaceBetween={12}
      breakpoints={{
        768: { spaceBetween: 20 },
        1200: { spaceBetween: 20 }
      }}
      slidesOffsetAfter={40}
      className="relative w-full !pl-5 tablet:!pl-6 desktop:!pl-0 desktop:flex desktop:justify-center desktop:!w-[1200px]"
      wrapperClass="desktop:!w-[1160px] desktop:mx-auto"
    >
      {recipients.map((recipient) => (
        <SwiperSlide key={recipient.id} className="swiper-slide">
          <PaperItem {...recipient} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
