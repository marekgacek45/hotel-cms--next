import { Global } from '@/types'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export const getGlobalData = async () =>
	await directus.request<Global>(
		readItems('global', {
			fields: ['*'],
		})
	)

export const getHomeData = async (fields: string[]) =>
	await directus.request<Home>(
		readItems('home', {
			fields,
		})
	)

export const getFaqData = async () =>
	await directus.request<Global>(
		readItems('faq', {
			fields: ['*'],
		})
	)
