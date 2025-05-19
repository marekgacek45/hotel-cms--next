'use client'

import React, { useRef } from 'react'
import LinkBtn from '@/components/link-btn'

import CarouselFraction from '@/components/carousel-fraction'
import { SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import AttractionCard from '@/components/cards/attractions'
const OtherAttractions  =  ({attractions}) => {

    const swiperRef = useRef<SwiperType | null>(null)

      


	return (
		<section className='section '>
			<div className='max-w-[1210] 2xl:max-w-[1400] mx-auto px-5 md:px-10'>
				<div className='flex  flex-col md:flex-row justify-between items-center mb-12 lg:px-12 gap-7 md:gap-0'>
					<div className='flex justify-center md:justify-start w-full items-center space-x-4'>
						<h2 className=' text-[32px] md:text-[38px] lg:text-[43px] text-primary-600'>Pozostałe atrakcje</h2>
					</div>

					<LinkBtn variant='outline' href='#'>
						Zobacz wszystkie
					</LinkBtn>
				</div>


	<CarouselFraction swiperRef={swiperRef}>
			
				{attractions.map(attraction => (
					<SwiperSlide key={attractions.slug}>
						{/* <PropertiesCarouselItem {...property} /> */}
                        <AttractionCard {...attraction}/>
					</SwiperSlide>
				))}

			

		
		</CarouselFraction>
			
			</div>
		</section>
	)
}

export default OtherAttractions
