'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay,  Navigation } from 'swiper/modules'

interface CarouselProps {
	swiperRef: React.MutableRefObject<SwiperType | null>
	children: React.ReactNode // <-- Dodajemy obsługę dzieci
}

export default function Carousel({ swiperRef, children }: CarouselProps) {
	return (
		<div className='relative w-full'>
			<Swiper
				onSwiper={swiper => (swiperRef.current = swiper)}
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				grabCursor={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
				breakpoints={{
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				modules={[Autoplay, Navigation]}
				className='mySwiper  text-black'>
				{children}
			</Swiper>
		</div>
	)
}
