// 'use client'

// import React, { useRef } from 'react'
import { Swiper as SwiperType } from 'swiper'
import Carousel from '@/components/special-offers/carousel'

import LinkBtn from '../link-btn'
import { SwiperSlide } from 'swiper/react'
import Card from '../special-offers/card'
import ChevronButton from '../special-offers/chevron-button'
import { slugify } from '@/lib/utils'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

const BlockSpecialOffersWrapper = async ({ heading, listing_type, selected_offers }) => {
	const sortOrder = (() => {
		switch (listing_type) {
			case 'latest':
				return '-date_created'
			case 'custom':
				return 'sort'
			default:
				return 'latest'
		}
	})()

	const offers =
		listing_type === 'latest'
			? await directus.request<Property[]>(
					readItems('special_offers', {
						filter: { status: { _eq: 'published' } },
						sort: [sortOrder],
						fields: ['name', 'slug', 'thumbnail'],
						// limit: items_count,
					})
			  )
			: selected_offers || []

	return (
		<section className='section '>
			<div className='wrapper'>
				<div className='flex  flex-col md:flex-row justify-between items-center mb-12 lg:px-12 gap-7 md:gap-0'>
					<div className='flex justify-between md:justify-start w-full items-center space-x-4'>
						<h2 className='text-[32px] md:text-[38px] lg:text-[43px] text-primary-600'>heading</h2>

						{/* Strzałki nawigacji poza Carousel */}
						{/* <div className='flex md:space-x-4'>
							<ChevronButton direction='prev' swiperRef={swiperRef} />
							<ChevronButton direction='next' swiperRef={swiperRef} />
						</div> */}
					</div>

					<LinkBtn variant='outline' href='#'>
						Zobacz wszystkie
					</LinkBtn>
				</div>

				{/* <BlockSpecialOffersWrapper  /> */}
				{/* Przekazujemy ref do Carousel */}
				{/* <Carousel swiperRef={swiperRef}>
					{data.map(offer => (
						<SwiperSlide key={slugify(offer.title)}>
							<Card offer={offer} />
						</SwiperSlide>
					))} */}

				{/* <SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide> */}
				{/* </Carousel> */}
			</div>
		</section>
	)
}

export default BlockSpecialOffersWrapper
