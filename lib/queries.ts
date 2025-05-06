import { Global } from '@/types'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export const getGlobalData = async () =>
	await directus.request<Global>(
		readItems('global', {
			fields: ['*'],
		})
	)

export const getHomeData = async () =>
	await directus.request<Home>(
		readItems('home', {
			fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: {
								
							
								block_faq: ['*'],
								block_attractions: ['*', 'selected_attractions.attractions_id.*'],
								block_special_offers: ['*', 'selected_offers.offers_id.*'],
								// block_text_image: ['*'],
								// block_properties_slider: ['*', 'selected_properties.properties_id.*'],
								// block_blog_section: ['*'],
							},
						},
					],
				},
			],
		})
	)

export const getFaqData = async () =>
	await directus.request<Global>(
		readItems('faq', {
			fields: ['*'],
		})
	)

	export const getSpecialOffers = async (fields: string[]) =>
		await directus.request<Home>(
			readItems('special_offer', {
				filter: { status: { _eq: 'published' } },
				fields,
			})
		)