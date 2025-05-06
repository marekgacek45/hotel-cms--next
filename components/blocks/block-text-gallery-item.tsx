'use client'
import { SwiperSlide } from 'swiper/react'
import SlideFull from '../slide-full'
import Image from 'next/image'

import morning from '@/public/assets/morning.webp'
import restaurant from '@/public/assets/restaurant.webp'

const BlockTextGalleryItem = () => {
	return (
		<>
			<SwiperSlide>
				<SlideFull>
					<Image src={morning} alt='morning image' fill className='w-full h-full object-cover object-center ' />
				</SlideFull>
			</SwiperSlide>
			<SwiperSlide>
				<SlideFull>
					<Image src={restaurant} alt='morning image' fill className='w-full h-full object-cover object-center ' />
				</SlideFull>
			</SwiperSlide>
			<SwiperSlide>
				<SlideFull>
					<Image src={morning} alt='morning image' fill className='w-full h-full object-cover object-center ' />
				</SlideFull>
			</SwiperSlide>
			<SwiperSlide>
				<SlideFull>
					<Image src={restaurant} alt='morning image' fill className='w-full h-full object-cover object-center ' />
				</SlideFull>
			</SwiperSlide>
			<SwiperSlide>
				<SlideFull>
					<Image src={morning} alt='morning image' fill className='w-full h-full object-cover object-center ' />
				</SlideFull>
			</SwiperSlide>
			<SwiperSlide>
				<SlideFull>
					<Image src={restaurant} alt='morning image' fill className='w-full h-full object-cover object-center ' />
				</SlideFull>
			</SwiperSlide>
		</>
	)
}

export default BlockTextGalleryItem
