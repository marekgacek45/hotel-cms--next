import { getAssetUrl } from '@/lib/utils'
import Image from 'next/image'



const AttractionsHero = ({hero_type,hero_poster,hero_video,hero_image,name}) => {
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
		
					<span className='text-4xl md:text-5xl 2xl:text-6xl md:leading-36 font-light tracking-[-.05em] uppercase'>
						{name}
					</span>
					
				</h1>

				
			</div>

			

			

			
		</section>
  )
}

export default AttractionsHero