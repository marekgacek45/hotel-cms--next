'use client'

import React, { useRef } from 'react'
import LinkBtn from '../link-btn'
import CarouselFraction from '../carousel-fraction'
import { SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import AttractionCard from '../cards/attractions'

const Attractions = ({ attractions, listing_type }) => {
	const swiperRef = useRef<SwiperType | null>(null)





	return (
		<CarouselFraction swiperRef={swiperRef}>
			{listing_type === 'latest' &&
				attractions.map(attraction => (
					<SwiperSlide key={attractions.slug}>
						{/* <PropertiesCarouselItem {...property} /> */}
                        <AttractionCard {...attraction}/>
					</SwiperSlide>
				))}

			{listing_type === 'custom' &&
				attractions?.map(attraction => (
					<SwiperSlide key={attractions?.attractions_id?.slug || attractions?.slug}>
                      
						<AttractionCard {...(attraction?.attractions_id || attraction)} />
					</SwiperSlide>
				))}

		
		</CarouselFraction>
	)
}

export default Attractions
