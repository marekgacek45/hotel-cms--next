import ROUTES from '@/lib/routes'
import { SOCIALS } from '@/lib/socials'
import Link from 'next/link'
import React from 'react'

const TopBar = () => {
	return (
		<div className=' bg-background-dark'>
			<div className='flex justify-end items-center max-w-screen-max mx-auto px-4 md:px-11 py-2'>
				<div className='flex justify-center items-center gap-4 max-w-screen-2xl'>
					<Link href='tel:123456789' className='utility-link'>
						+48 123 456 789
					</Link>

					<Link href={ROUTES.ECO} className='hidden sm:inline-block utility-link !text-accent-400'>
						Eko
					</Link>
					<Link href={ROUTES.BLOG.LIST} className='hidden sm:inline-block utility-link'>
						Blog
					</Link>
					<a href={ROUTES.WALK} className='hidden sm:inline-block utility-link'>
						Spacer 360°
					</a>

					<ul className='flex justify-center items-center gap-3'>
						{SOCIALS.map(({ name, link, icon: Icon }) => (
							<li key={name}>
								<Link href={link} target='_blank' rel='noopener noreferrer nofollow' aria-label={name}>
									<Icon className='size-4 hover:text-primary-400 duration-300 transition-colors' />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TopBar
