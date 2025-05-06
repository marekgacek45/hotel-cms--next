import { getAssetUrl } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import TextImageBlock from '../text-image-block'
import LinkBtn from '../link-btn'

const BlockTextImage = ({ heading, content, image, reverse, link, link_label, link_href }) => {
	return (
		//     <TextImageBlock reverse  img={image} alt='children image' heading='Hotel z atrakcjami dla dzieci'>
		//     {/* <List>
		//         <ListItem variant='secondary' href='#' title='Animacje' description='dla dzieci i dorosłych' />
		//         <ListItem variant='secondary' href='#' title='game room'  />
		//         <ListItem variant='secondary' href='#' title='play room' description='czyli miejsce dla najmłodszych Gości, z licznymi zabawkami interaktywnymi' />
		//         <ListItem variant='secondary' href='#' title='brodzik dla dzieci' description='z podgrzewaną wodą' />
		//         <ListItem variant='secondary' href='#' title='RODZINNA STREFA WELLNESS'  />
		//         <ListItem variant='secondary' href='#' title='Kids menu' description="dostępne w restauracji a'la carte*" />
		//         <ListItem variant='secondary' href='#' title='Zabiegi dla dzieci' description="w Spa*" />
		//     </List> */}

		//     <span className='italic text-sm'>*Usługa dodatkowo płatna.</span>

		//     {/* <LinkBtn variant={'outline'} className='self-start mt-11' href='#'>
		//         Czytaj więcej
		//     </LinkBtn> */}
		// </TextImageBlock>
		<section className='section'>
			<div className='flex flex-col lg:flex-row justify-center gap-12 xl:gap-24 max-w-screen-3xl mx-auto px-5 lg:px-0'>
				<Image
					src={getAssetUrl(image)}
					alt=''
					width={700}
					height={500}
					quality={70}
					sizes='(max-width: 1024px) 100vw, 860px'
					className={`max-h-[550px] lg:max-h-[740px] w-full lg:w-1/2 object-cover object-center order-1 h-auto ${
						reverse ? '' : 'lg:order-none'
					}`}
				/>
				<div
					className={`flex  ${reverse ? 'justify-end' : ' justify-start'} w-full lg:w-1/2  lg:mt-16   ${
						reverse ? 'lg:pl-8' : ' lg:pr-8'
					}`}>
					<div className='lg:max-w-[475px] flex flex-col justify-start  gap-6'>
						<h2 className='text-primary-600 text-2xl md:text-[43px] font-normal leading-[1.1] after:block after:w-[35px] after:border-t after:border-primary-600 after:border-b after:p-[2px] after:mt-6'>
							{heading}
						</h2>

						<div className='prose text-white prose-a:text-white' dangerouslySetInnerHTML={{ __html: content }} />

						{link && (
							<LinkBtn variant={'outline'} className='self-start mt-11' href={link_href}>
								{link_label}
							
							</LinkBtn>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlockTextImage
