'use client'

import Image from 'next/image'



import { SwiperSlide } from 'swiper/react'

import CarouselFullFraction from '@/components/carousel-full-fraction'
import SlideFull from '@/components/slide-full'



import { getAssetUrl } from '@/lib/utils'

const AttractionsGallery = ({  gallery }) => {
	

	return (
		<section className='section '>
			<div className='relative'>
				

				<CarouselFullFraction>
					

					{gallery.map(image => (
						<SwiperSlide key={image.directus_files_id.id}>
							<SlideFull>
								<Image
									src={getAssetUrl(image.directus_files_id.filename_disk)}
									alt={image.directus_files_id.description}
									fill
									className='w-full h-full object-cover object-center '
								/>
							</SlideFull>
						</SwiperSlide>
					))}
				</CarouselFullFraction>
			</div>
		</section>
	)
}

export default AttractionsGallery
