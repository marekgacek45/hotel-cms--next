import Image from 'next/image'

import morning from '@/public/assets/morning.webp'
import Link from 'next/link'

import pattern from '@/public/assets/pattern-1.svg'
import pattern2 from '@/public/assets/pattern-2.svg'
import pattern3 from '@/public/assets/pattern-5.svg'
import { getAssetUrl } from '@/lib/utils'

const BlockTextImageFull = ({heading,image,title,text,link,link_label,link_href}) => {
	return (
		<section className='section lg:!pt-[190px]'>
			<div className='relative'>
				<Image
					src={pattern}
					alt=''
					className='hidden lg:block absolute top-1.5 right-12 w-[470px]  object-cover object-center -z-10'
				/>

				<div className='hidden lg:flex absolute -top-[125px] right-[88px] -z-10'>
					<Image src={pattern3} alt='' className='w-[85px]  z-10' />
					<Image src={pattern2} alt='' className=' w-[175px]   z-10' />
				</div>
				<h2 className='text-6xl md:text-[120px] font-light tracking-[-0.3333] leading-[.8] uppercase text-primary-600 ml-5 lg:ml-20 max-w-[700px]'>
					{heading}
				</h2>
				<div className='relative h-[80vh] md:h-[90vh] 2xl:h-dvh z-20'>
					<Image src={getAssetUrl(image)} alt={title} fill className='w-full h-full object-cover object-center ' />
					<div className='absolute inset-0 w-full h-full bg-background-dark/30 z-10'></div>

					<div className=' flex flex-col items-start justify-center text-left text-white px-6 ml-5 lg:ml-20 h-full max-w-[435px]'>
						<h3 className=' z-20 text-[32px]  md:text-[38px] lg:text-[43px] leading-tight'>
							{title}
						</h3>
						<p className='mt-2 max-w-lg z-20 text'>
							{text}
						</p>

						{link && <Link href={link_href} className='link !uppercase !md:text-[17px] mt-10 !text-white after:!bg-white z-20'>
							{link_label}
						</Link>}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlockTextImageFull
