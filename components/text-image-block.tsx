import { getAssetUrl } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

const TextImageBlock = ({
    idName,
	img,
	alt,
	heading,
	children,
    reverse
}: {
    idName?: string
	img:  StaticImageData | string 
	alt: string
	heading: string
	children: React.ReactNode
    reverse?: boolean
}) => {
	return (
		<section {...idName ? { id: idName } : {}}  className='section'>
			<div className='flex flex-col lg:flex-row justify-center gap-12 xl:gap-24 max-w-screen-3xl mx-auto px-5 lg:px-0'>
				<Image
					src={getAssetUrl(img)}
					alt={alt}
					width={700}
					height={500}
					quality={70}
					sizes='(max-width: 1024px) 100vw, 860px'
					className={`max-h-[550px] lg:max-h-[740px] w-full lg:w-1/2 object-cover object-center order-1 h-auto ${reverse? '' : 'lg:order-none'}`}
					
				/>
				<div className={`flex  ${reverse? 'justify-end' : ' justify-start'} w-full lg:w-1/2  lg:mt-16   ${reverse? 'lg:pl-8' : ' lg:pr-8'}`}>
                <div className='lg:max-w-[475px] flex flex-col justify-start  gap-6'>

					<h2 className='text-primary-600 text-2xl md:text-[43px] font-normal leading-[1.1] after:block after:w-[35px] after:border-t after:border-primary-600 after:border-b after:p-[2px] after:mt-6'>{heading}</h2>

					{children}
                </div>
				</div>
			</div>
		</section>
	)
}

export default TextImageBlock
