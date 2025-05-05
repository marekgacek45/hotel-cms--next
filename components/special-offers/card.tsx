import React from 'react'

import easter from '@/public/assets/easter.jpg'
import Image from 'next/image'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAssetUrl } from '@/lib/utils'

const Card = ({ offer }) => {
	let ribbonColor

	if (offer.ribbon_color === 'default') {
		ribbonColor = 'bg-primary-600'
	} else if (offer.ribbon_color === 'alert') {
		ribbonColor = 'bg-red-500'
	}

	return (
		<Link
			href='#'
			className='h-[420px] lg:h-[550px] 2xl:h-[650px] bg-white flex justify-start items-end w-full relative group overflow-hidden'>
			{offer.ribbon && (
				<div className={`${ribbonColor} absolute top-[45px] -right-[65px] w-[290px] uppercase rotate-[42deg] z-20 py-2.5 px-8 text-center`}>
					<span className='text-sm font-medium leading-[1.42] uppercase text-white tracking-[.17em]'>
						{offer.ribbon_title}
					</span>
				</div>
			)}

			{offer.thumbnail_type === 'image' ? (
				<Image
					src={getAssetUrl(offer.thumbnail_image.id)}
					alt={offer.thumbnail_image.description}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
					className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300'
				/>
			) : (
				<video
					className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300 absolute inset-0 z-0'
					autoPlay
					muted
					loop
					playsInline
					poster={getAssetUrl(offer.thumbnail_poster)}>
					<source src={getAssetUrl(offer.thumbnail_video)} type='video/mp4' />
				</video>
			)}

			<div className='absolute inset-0 w-full h-full bg-background-dark/50 z-10'></div>

			<div className='p-10 z-20 text-font-light flex flex-col gap-4 absolute bottom-0 left-0'>
				<h3 className='text-[26px] font-medium tracking-[.02em]'>{offer.title}</h3>
				<p className='text-lg font-medium tracking-[.02em]'>
					już od <span className='text-[26px] font-medium tracking-[.02em]'>{offer.price} zł</span> osoba/
					{offer.stay_type}
				</p>
				{offer.min_nights && <p className='text-lg tracking-[.02em]'>min. {offer.min_nights} noce</p>}
			</div>

			<ArrowRight className='size-11 z-20 absolute bottom-[35px] right-[30px] text-white stroke-1 group-hover:translate-x-3 transition-transform duration-300' />
		</Link>
	)
}

export default Card
