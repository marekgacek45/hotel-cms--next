const ROUTES = {
	HOME: '/',
	ECO: '/eco',
	WALK: '/spacer-360',
	BLOG: {
		LIST: '/aktualnosci',
		DETAIL: (slug: string) => `/aktualnosci/${slug}`,
	},
	SEASONS: '/pory-roku',
	ROOMS: {
		LIST: '/pokoje-i-apartamenty',
		DETAIL: (slug: string) => `/pokoje-i-apartamenty/${slug}`,
	},
	OFFERS: {
		LIST: '/oferty',
		DETAIL: (slug: string) => `/pokoje-i-oferty/${slug}`,
	},
	CHILDREN: '/dzieci',
	ADULTS: '/dorosli',
	GASTRONOMY: '/gastronomia',
	ATTRACTIONS: '/atrakcje',
	GALLERY: '/galeria',
	CONTACT: '/kontakt',

	LOCAL_ATTRACTION: {
		LIST: '/atrakcje-okolicy',
		DETAIL: (slug: string) => `/atrakcje-okolicy/${slug}`,
	},
	HOTEL_ATTRACTION: {
		LIST: '/atrakcje-hotelowe',
		DETAIL: (slug: string) => `/atrakcje-hotelowe/${slug}`,
	},
} as const

export default ROUTES
