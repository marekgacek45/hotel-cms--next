
import directus from '@/lib/directus'
import LinkBtn from '../link-btn'

import Attractions from './attractions'
import { readItems } from '@directus/sdk'
import AttractionsHotel from './attractions-hotel'

const AttractionsHotelWrapper  = async ({ heading,listing_type,selected_attractions }) => {
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


    const attractions =
    listing_type === 'latest'
        ? await directus.request<Property[]>(
                readItems('attractions_hotel', {
                    filter:{status: { _eq: 'published' }},
                    sort: [sortOrder],
                    fields: ['name','slug','thumbnail',],
                    // limit: items_count,
                })
          )
        : selected_attractions || []


     


	return (
		<section className='section '>
			<div className='max-w-[1210] 2xl:max-w-[1400] mx-auto px-5 md:px-10'>
				<div className='flex  flex-col md:flex-row justify-between items-center mb-12 lg:px-12 gap-7 md:gap-0'>
					<div className='flex justify-center md:justify-start w-full items-center space-x-4'>
						<h2 className=' text-[32px] md:text-[38px] lg:text-[43px] text-primary-600'>{heading}</h2>
					</div>

					<LinkBtn variant='outline' href='#'>
						Zobacz wszystkie
					</LinkBtn>
				</div>

				<AttractionsHotel attractions={attractions} listing_type={listing_type}/>
			</div>
		</section>
	)
}

export default AttractionsHotelWrapper
