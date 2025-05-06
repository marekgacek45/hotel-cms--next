import Image from 'next/image'
import Link from 'next/link'
import easter from '@/public/assets/easter.jpg'
import { ArrowRight } from 'lucide-react'
import { getAssetUrl } from '@/lib/utils'

const AttractionCard = ({name,thumbnail}) => {
	return (
		<Link href='#' className='  flex flex-col justify-start items-start w-full relative group '>
			{/* <div className='bg-primary-600 absolute top-[45px] -right-[65px] w-[290px] uppercase rotate-[42deg] z-20 py-2.5 px-8 text-center'>
        <span className='text-sm font-medium leading-[1.42] uppercase text-white tracking-[.17em]'>Grill w cenie</span>
    </div> */}
			<div className='w-full h-[250px] sm:h-[520px] overflow-hidden'>
				<Image
					src={getAssetUrl(thumbnail)}
					alt={name}
					width={300}
					height={300}
					className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300 '
				/>
			</div>

			<h3 className='text-[26px] font-medium tracking-[.02em]  pt-6 px-5 link-opposite--group after:!bg-white !text-white'>
				{name}
			</h3>
		</Link>
	)
}

export default AttractionCard
