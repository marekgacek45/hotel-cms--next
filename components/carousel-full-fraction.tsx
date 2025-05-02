'use client'

import { Swiper } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Autoplay, Navigation,Pagination,EffectFade } from 'swiper/modules'
import ButtonsFraction from './buttons-fraction'
import { useRef } from 'react'
import 'swiper/css/effect-fade';
interface CarouselProps {
	
	children: React.ReactNode 
}

const CarouselFullFraction = ({  children }: CarouselProps) => {

    const swiperRef = useRef<SwiperType | null>(null)

	return (
		<div className='relative w-full xl:w-[90%] '>

<ButtonsFraction swiperRef={swiperRef} className='hidden xl:block absolute -right-[87px] top-[180px] z-50'/>

			<Swiper
				// pagination={{
				// 	type: 'fraction',
				// }}
				onSwiper={swiper => (swiperRef.current = swiper)}
               
                effect={'fade'}
				loop={true}
				grabCursor={true}
				// autoplay={{
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// }}
				
			
				modules={[Autoplay,Pagination, Navigation,EffectFade]}
				className='mySwiper  text-black'>
            <ButtonsFraction swiperRef={swiperRef} className='xl:hidden pt-11'/>
				{children}
			</Swiper>


		</div>
	)
}

export default CarouselFullFraction
