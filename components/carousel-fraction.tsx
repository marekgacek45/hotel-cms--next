'use client'

import { Swiper } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Autoplay, Navigation,Pagination } from 'swiper/modules'
import ButtonsFraction from './buttons-fraction'

interface CarouselProps {
	swiperRef: React.MutableRefObject<SwiperType | null>
	children: React.ReactNode 
}

const CarouselFraction = ({ swiperRef, children }: CarouselProps) => {
	return (
		<div className='relative w-full '>

<ButtonsFraction swiperRef={swiperRef} className='hidden xl:block absolute -right-[87px] top-[80px] z-50'/>

			<Swiper
				// pagination={{
				// 	type: 'fraction',
				// }}
				onSwiper={swiper => (swiperRef.current = swiper)}
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				grabCursor={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				
				breakpoints={{
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				modules={[Autoplay,Pagination, Navigation]}
				className='mySwiper  text-black'>
				{children}
			</Swiper>


            <ButtonsFraction swiperRef={swiperRef} className='xl:hidden'/>
		</div>
	)
}

export default CarouselFraction
