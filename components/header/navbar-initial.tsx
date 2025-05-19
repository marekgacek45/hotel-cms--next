'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import ROUTES from '@/lib/routes'
import CONFIG from '@/lib/config'

import MobileMenu from '@/components/header/mobile-menu'

import logo from '@/public/assets/logo.png'

export const NAV_ITEMS = [
	{
		name: 'Pory roku',
		href: ROUTES.SEASONS,
	},
	{
		name: 'Pokoje i apartamenty',
		href: ROUTES.ROOMS.LIST,
	},
	{
		name: 'Oferty',
		href: ROUTES.OFFERS.LIST,
	},
	{
		name: 'Dzieci',
		href: ROUTES.CHILDREN,
	},
	{
		name: 'Dorośli',
		href: ROUTES.ADULTS,
	},
	
	{
		name: 'Lokalne atrakcje',
		href: ROUTES.LOCAL_ATTRACTION.LIST,
	},
	{
		name: 'Atrakcje hotelowe',
		href: ROUTES.HOTEL_ATTRACTION.LIST,
	},
	{
		name: 'Galeria',
		href: ROUTES.GALLERY,
	},
	{
		name: 'Kontakt',
		href: ROUTES.CONTACT,
	},
]

export const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-orange-500', 'text-purple-500']

const NavbarInitial = () => {
	const pathname = usePathname()

	return (
		<nav className='flex justify-between items-center xl:items-start px-2 md:px-11 pt-4 lg:mt-8 max-w-screen-max mx-auto'>
			<Link href={ROUTES.HOME} aria-label='Strona główna'>
				<Image src={logo} alt={CONFIG.siteName}  className='w-[115px] md:w-[120px]' />
			</Link>

			<ul className='hidden xl:flex justify-center items-center gap-6 pt-2 '>
				{NAV_ITEMS.map(({ name, href }) => (
					<li key={name}>
						<Link href={href} className={`   ${pathname === 'href' ? 'nav-link--active' : 'nav-link'}`}>
							{name === 'Dzieci'
								? name.split('').map((letter, index) => (
										<span key={index} className={`${colors[index % colors.length]} mx-[1px]`}>
											{letter}
										</span>
								  ))
								: name}
						</Link>
					</li>
				))}
			</ul>

			<MobileMenu />
		</nav>
	)
}

export default NavbarInitial
