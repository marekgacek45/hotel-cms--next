import Image from 'next/image'

import restaurant from '@/public/assets/restaurant.webp'
import restaurant2 from '@/public/assets/restaurant-2.jpg'
import Link from 'next/link'
import { getAssetUrl } from '@/lib/utils'
import LinkBtn from '../link-btn'

const BlockTextImageSpecial = ({ heading, image_full, image, title,content,link,link_href,link_label }) => {
	return (
		<section className='section'>
			<div className='max-w-screen-3xl h-[550px] lg:h-[90vh] mx-auto relative'>
				<Image src={getAssetUrl(image_full)} alt={heading} fill className='object-cover object-center' />
			</div>

			<div className='max-w-screen-xl mx-auto mt-10 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-28 px-5 2xl:px-0'>
				<Image
					src={getAssetUrl(image)}
					alt={title}
					width={580}
					height={600}
					className='max-h-[550px] lg:max-h-[740px] w-full  object-cover object-center lg:-mt-[180px] z-20 order-1 lg:order-none'
				/>

				<div className='lg:max-w-[475px] flex flex-col justify-start  gap-6'>
					<h2 className='heading'>{title}</h2>

					<div className='prose text-white prose-a:text-white' dangerouslySetInnerHTML={{ __html: content }} />

					{link && (
						<LinkBtn variant={'outline'} className='self-start mt-11' href={link_href}>
							{link_label}
						</LinkBtn>
					)}
				</div>
			</div>
		</section>
	)
}

export default BlockTextImageSpecial
