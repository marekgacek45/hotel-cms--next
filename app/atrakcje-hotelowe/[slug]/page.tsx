import AttractionHero from '@/components/attraction-hero'
import AttractionsGallery from '@/components/attractions-gallery'
import AttractionsPictograms from '@/components/attractions-pictograms'

import OtherAttractions from '@/components/other-attractions'
import { getHotelAttractionBySlug,getHotelAttractions } from '@/lib/queries'

import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
	params: {
		slug: string
	}
}

const Page = async ({ params }: Props) => {
	const slug = params.slug

	const attraction = await getHotelAttractionBySlug(slug)

    	const otherAttractions = await getHotelAttractions({
		filter: { status: { _eq: 'published' }, slug: { _neq: slug } },
		fields: [
			'*'
		],
		limit: 8,
	})

	if (!attraction) {
		return notFound()
	}

	return (
		<>
			<AttractionHero {...attraction} />
			<AttractionsPictograms {...attraction} />
            <div className='prose text-font-light prose-headings:text-font-light !max-w-screen-lg mx-auto pt-16 wrapper' dangerouslySetInnerHTML={{ __html: attraction.description }} />
            <AttractionsGallery gallery={attraction.gallery} />
            <OtherAttractions attractions={otherAttractions}/>
		</>
	)
}

export default Page
