import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const slugify = (str: string) => {
	str = str.replace(/^\s+|\s+$/g, '')
	str = str.toLowerCase()
	str = str
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
	return str
}


export const getAssetUrl = (thumbnail: string) => {
	return `${process.env.DIRECTUS_API_ENDPOINT}/assets/${thumbnail}`;
};