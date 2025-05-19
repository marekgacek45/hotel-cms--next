import { Global } from '@/types'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export interface ItemsQuery {
	filter?: Filter
	fields?: Array<string>
	limit?: number
	offset?: number
}

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
								block_text_gallery: ['*', 'images.directus_files_id.*'],
							},
						},
					],
				},
			],
		})
	)

export const getSpecialOffersPageData = async () =>
	await directus.request<Home>(
		readItems('special_offer_page', {
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
								block_text_gallery: ['*', 'images.directus_files_id.*'],
								block_hero: ['*'],
								block_special_offers_grid: ['*'],
							},
						},
					],
				},
			],
		})
	)

export const getAttractionsPageData = async () =>
	await directus.request<Home>(
		readItems('local_attractions_page', {
			fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: {
								block_faq: ['*'],
								block_attractions: ['*', 'selected_attractions.attractions_id.*'],
								block_attractions_grid: ['*'],
								block_text_image: ['*'],
								block_text_image_full: ['*'],
								block_text_image_special: ['*'],
								block_text_gallery: ['*', 'images.directus_files_id.*'],
								block_hero: ['*'],
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

export const getAttractionBySlug = async (slug: string) => {
	const attraction = await directus.request<Post[]>(
		readItems('attractions', {
			filter: { slug: { _eq: slug } },

			fields: ['*','gallery.directus_files_id.*'],
		})
	)

	return attraction[0]
}

export const getHotelAttractionBySlug = async (slug: string) => {
	const attraction = await directus.request<Post[]>(
		readItems('attractions_hotel', {
			filter: { slug: { _eq: slug } },

			fields: ['*','gallery.directus_files_id.*'],
		})
	)

	return attraction[0]
}

export const getLocalAttractions = async (options?: ItemsQuery) => {
	return await directus.request<Post[]>(readItems('attractions', options))
}

export const getHotelAttractions = async (options?: ItemsQuery) => {
	return await directus.request<Post[]>(readItems('attractions_hotel', options))
}



export const getHotelAttractionsPageData = async () =>
	await directus.request<Home>(
		readItems('hotel_attractions_page', {
			fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: {
								block_faq: ['*'],
								block_hotel_attractions: ['*', 'selected_attractions.attractions_id.*'],
								block_attractions_hotel_grid: ['*'],
								block_text_image: ['*'],
								block_text_image_full: ['*'],
								block_text_image_special: ['*'],
								block_text_gallery: ['*', 'images.directus_files_id.*'],
								block_hero: ['*'],
							},
						},
					],
				},
			],
		})
	)