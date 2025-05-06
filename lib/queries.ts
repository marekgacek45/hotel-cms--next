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
								block_attractions_hotel: ['*', 'selected_attractions.attractions_hotel_id.*'],
								block_special_offers: ['*', 'selected_offers.special_offers_id.*'],
								block_vouchers: ['*', 'selected_vouchers.vouchers_id.*'],
								block_text_image: ['*'],
								block_text_image_full: ['*'],
								block_text_image_special: ['*'],
								block_text_gallery: ['*','images.directus_files_id.*'],
								
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