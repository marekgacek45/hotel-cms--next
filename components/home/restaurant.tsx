import Image from 'next/image'

import restaurant from '@/public/assets/restaurant.webp'
import restaurant2 from '@/public/assets/restaurant-2.jpg'
import Link from 'next/link'

const Restaurant = () => {
	return (
		<section className='section'>
			<div className='max-w-screen-3xl h-[550px] lg:h-[90vh] mx-auto relative'>
				<Image src={restaurant} alt='restaurant image' fill className='object-cover object-center' />
			</div>

			<div className='max-w-screen-xl mx-auto mt-10 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-28 px-5 2xl:px-0'>
				<Image src={restaurant2} alt='restaurant image' width={580} height={600} className='max-h-[550px] lg:max-h-[740px] w-full  object-cover object-center lg:-mt-[180px] z-20 order-1 lg:order-none' />

				<div className='lg:max-w-[475px] flex flex-col justify-start  gap-6'>
					<h2 className='heading'>Restauracja Elements</h2>

					<p className='text'>
						<Link href='#' className='link mr-1.5'>
							Restauracja Elements
						</Link>
						to miejsce kreacji naszych znakomitych dań. Usiądź wygodnie i rozkoszuj się górskim widokiem w połączeniu z
						pysznym jedzeniem. Nasze bogate śniadania i obiadokolacje z pewnością przypadną do gustu najbardziej
						wymagającym smakoszom. A po obfitym posiłku zapraszamy na drinka lub pobudzającą kawę najlepszego gatunku w
						Lobby Barze na poziomie 2.
					</p>

          <Link href='#' className='link !text-xl  uppercase'>
							Odkryj menu a la carte
						</Link>
          <Link href='#' className='link  uppercase'>
							Odkryj menu forum bar
						</Link>
				</div>
			</div>
		</section>
	)
}

export default Restaurant
