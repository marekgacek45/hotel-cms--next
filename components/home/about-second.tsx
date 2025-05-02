'use client'

import Image from 'next/image'


import pattern from '@/public/assets/pattern-1.svg'
import pattern2 from '@/public/assets/pattern-7.svg'

import { SwiperSlide } from 'swiper/react'

import CarouselFullFraction from '../carousel-full-fraction'
import SlideFull from '../slide-full'
import Link from 'next/link'


import morning from '@/public/assets/morning.webp'
import restaurant from '@/public/assets/restaurant.webp'

const AboutSecond = () => {
	return (
		<section className='section lg:!pt-[190px]'>
			<div className='relative'>
				<Image
					src={pattern}
					alt=''
					className='hidden lg:block absolute top-24 right-50 w-[470px]  object-cover object-center -z-10'
				/>

				<div className='hidden lg:flex absolute -top-[100px] right-[170px] -z-10'>
					<Image src={pattern2} alt='' className=' w-[335px]   z-10' />
				</div>

				<h2 className='text-6xl md:text-[120px] font-light tracking-[-0.3333] leading-[.8] uppercase text-primary-600 ml-5 lg:ml-20'>
					Chwile <br /> relaksu i <br /> zabawa
				</h2>


			
				<CarouselFullFraction>


                <div className='mt-12 lg:mt-0 lg:absolute inset-0 flex flex-col items-start justify-end text-left text-white px-6 lg:ml-20 h-[85%] xl:h-full max-w-[600px] pb-[80px] z-20'>
					<h3 className='text-[32px] md:text-[38px] lg:text-[32px] leading-tight'>
						Przestronne Pokoje i Apartamenty
					</h3>
					<p className='mt-2 max-w-lg text'>
						W hotelu Elements Goście mogą zatrzymać się w przestronnych pokojach i apartamentach urządzonych w nowoczesnym stylu. Każdy pokój jest wyposażony w najwyższej jakości meble, wygodne łóżka oraz bogate w wyposażenie łazienki.
					</p>
					<Link href='#' className='link !uppercase !md:text-[17px] mt-10 !text-white after:!bg-white'>
						zobacz więcej
					</Link>
				</div>


					<SwiperSlide>
						<SlideFull>
                        <Image src={morning} alt='morning image' fill className='w-full h-full object-cover object-center ' />
                        </SlideFull>
					</SwiperSlide>
					<SwiperSlide>
						<SlideFull>
                        <Image src={restaurant} alt='morning image' fill className='w-full h-full object-cover object-center ' />
                        </SlideFull>
					</SwiperSlide>
					<SwiperSlide>
						<SlideFull>
                        <Image src={morning} alt='morning image' fill className='w-full h-full object-cover object-center ' />
                        </SlideFull>
					</SwiperSlide>
					<SwiperSlide>
						<SlideFull>
                        <Image src={restaurant} alt='morning image' fill className='w-full h-full object-cover object-center ' />
                        </SlideFull>
					</SwiperSlide>
					<SwiperSlide>
						<SlideFull>
                        <Image src={morning} alt='morning image' fill className='w-full h-full object-cover object-center ' />
                        </SlideFull>
					</SwiperSlide>
					<SwiperSlide>
						<SlideFull>
                        <Image src={restaurant} alt='morning image' fill className='w-full h-full object-cover object-center ' />
                        </SlideFull>
					</SwiperSlide>
				
				</CarouselFullFraction>

                </div>
			
		</section>
	);
};

export default AboutSecond
