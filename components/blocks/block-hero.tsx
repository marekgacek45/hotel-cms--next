import { getAssetUrl } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import LinkBtn from '../link-btn'

const BlockHero = ({hero_type,hero_poster,hero_video,hero_image,hero_preheading,hero_heading,hero_subheading}) => {
  return (
  	<section className='relative w-full h-[75vh] flex justify-center items-center  overflow-hidden '>
			{ hero_type === 'video' ? <video
				className='absolute inset-0 w-full h-full object-cover'
				autoPlay
				muted
				loop
				playsInline
				poster={getAssetUrl(hero_poster)}>
				<source src={getAssetUrl(hero_video)} type='video/mp4' />
			</video> : 
			
			<Image src={getAssetUrl(hero_image)} alt={hero_image.description} width={1920} height={1080} className='absolute inset-0 w-full h-full object-cover' priority/>
			
			}
			<div className='absolute inset-0 w-full h-full bg-background-dark/20  z-10'></div>

			<div className=' flex flex-col justify-center items-center gap-12 z-20'>
				<h1 className='flex flex-col justify-center items-center px-5 md:px-0 font-extralight text-center'>
					{hero_preheading && (
						<span className='text-xs md:text-lg tracking-[0.5em] uppercase'> {hero_preheading}</span>
					)}
					<span className='text-6xl md:text-9xl 2xl:text-[140px] md:leading-36 font-extralight tracking-[-.05em]'>
						{hero_heading}
					</span>
					{hero_subheading && (
						<span className='text-xs md:text-lg tracking-[0.5em] uppercase mt-4'> {hero_subheading}</span>
					)}
				</h1>

				<div className=' flex md:hidden flex-col justify-center items-center gap-4'>
					<LinkBtn size={'sm'} className='min-w-[240px]' href='/#hotel'>
						Zarezerwuj
					</LinkBtn>
					<LinkBtn size={'sm'} className='min-w-[240px]' href='/#hotel'>
						Kup na prezent
					</LinkBtn>
					<LinkBtn size={'sm'} variant={'eco'} className='min-w-[240px]' href='/#hotel'>
						Bike friendly
					</LinkBtn>
				</div>
			</div>

			

			

			
		</section>
  )
}

export default BlockHero