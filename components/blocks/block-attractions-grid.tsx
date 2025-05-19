import React from 'react'
import AttractionCard from '@/components/cards/attractions'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

const BlockAttractionsGrid = async ({ listing_type, grid_columns }) => {
	const gridColumns = (() => {
		switch (grid_columns) {
			case 2:
				return 'grid-cols-1 lg:grid-cols-2'
			case 3:
				return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
			case 4:
				return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
			default:
				return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
		}
	})()

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

	const attractions = await directus.request<Property[]>(
		readItems('attractions', {
			filter: { status: { _eq: 'published' } },
			sort: [sortOrder],
			fields: ['*'],
		})
	)

	console.log('ATTRAKCJE', attractions)

	return (
		<section className='section '>
			<div className={`wrapper  ${grid_columns === 4 && '!max-w-screen-max'}`}>
				{/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-y-20'> */}
				<div className={`grid ${gridColumns} gap-x-4 gap-y-10 md:gap-y-20`}>
					{attractions.map((attraction, index) => {
						if (listing_type === 'latest') {
							return <AttractionCard key={index} {...attraction} />
						}

						if (listing_type === 'custom') {
							const data = attraction?.attractions_id || attraction
							return <AttractionCard key={index} {...data} />
						}

						return null
					})}
				</div>
			</div>
		</section>
	)
}

export default BlockAttractionsGrid
