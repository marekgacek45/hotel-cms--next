import Image from 'next/image'
import Link from 'next/link'
import easter from '@/public/assets/easter.jpg'
import { ArrowRight } from 'lucide-react'
import { getAssetUrl } from '@/lib/utils'
import ROUTES from '@/lib/routes'

const AttractionCard = ({
	name,
	slug,
	thumbnail,
	thumbnail_type,
	thumbnail_image,
	thumbnail_poster,
	thumbnail_video,
}) => {
	return (
		<Link
			href={ROUTES.LOCAL_ATTRACTION.DETAIL(slug)}
			className='  flex flex-col justify-start items-start w-full relative group '>
			<div className='w-full h-[250px] sm:h-[520px] overflow-hidden'>
				{thumbnail_type === 'image' ? (
					<Image
						src={getAssetUrl(thumbnail_image)}
						alt={thumbnail_image.description}
						width={300}
						height={600}
						className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300 '
					/>
				) : (
					<video
						className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300 '
						autoPlay
						muted
						loop
						playsInline
						poster={getAssetUrl(thumbnail_poster)}>
						<source src={getAssetUrl(thumbnail_video)} type='video/mp4' />
					</video>
				)}
			</div>

			<h3 className='text-[26px] font-medium tracking-[.02em]  pt-6 px-5 link-opposite--group after:!bg-white !text-white'>
				{name}
			</h3>
		</Link>
	)
}

export default AttractionCard
