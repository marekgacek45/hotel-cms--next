import LinkBtn from '@/components/link-btn'

import { ChevronDown, ChevronRight, Check } from 'lucide-react'

const Panel = () => {
	const Item = ({ children }: { children: React.ReactNode }) => {
		return (
			<div className='flex items-center gap-4'>
				<Check className='size-5 ' />
				<strong className='text-sm leading-[1.25] font-medium'>{children}</strong>
			</div>
		)
	}

	return (
		<div className=' absolute bottom-0 hidden xl:flex justify-center items-center gap-9 py-2.5 px-3 bg-primary-600 z-10 '>
			<div className='flex items-center gap-9 text-font-light '>
				<Item>
					Gwarancja <br /> najniższej ceny
				</Item>
				<Item>
					Najlepsze oferty <br />
					tylko na naszej stronie
				</Item>
				<Item>
					Rezerwujesz <br />
					bez pośredników
				</Item>
			</div>

			<LinkBtn size={'lg'} variant={'secondary'} href='#'>
				Sprawdź oferty
			</LinkBtn>
		</div>
	)
}

const Hero = () => {
	return (
		<section className='relative w-full h-dvh flex justify-center items-center  overflow-hidden '>
			<video
				className='absolute inset-0 w-full h-full object-cover'
				autoPlay
				muted
				loop
				playsInline
				poster='/assets/hero-poster.jpg'>
				<source src='/assets/hero.mp4' type='video/mp4' />
			</video>
			<div className='absolute inset-0 w-full h-full bg-background-dark/20  z-10'></div>

			<div className=' flex flex-col justify-center items-center gap-12 z-20'>
				<h1 className='flex flex-col justify-center items-center px-5 md:px-0 font-extralight text-center '>
					<span className='text-6xl md:text-9xl 2xl:text-[140px] md:leading-36 font-extralight tracking-[-.05em]'>
						ELEMENTS
					</span>
					<span className='text-xs md:text-lg tracking-[0.5em] uppercase'>RODZINNY HOTEL Z BASENEM W GÓRACH</span>
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

			<a href='#hotel' className='absolute left-7 bottom-6 z-20 flex justify-center items-center gap-1 group'>
				<span className='text-sm font-semibold uppercase group-hover:text-primary-400 duration-300'>zobacz więcej</span>
				<ChevronDown className='size-4 group-hover:text-primary-400 duration-300 ' />
			</a>

			<Panel />

			<div className='absolute right-0 top-[180px] hidden xl:flex flex-col items-end gap-4'>
				<LinkBtn className='rounded-r-none' href='/#hotel'>
					Wybierz termin <ChevronRight className='size-3' />
				</LinkBtn>
				<LinkBtn className='rounded-r-none' href='/#hotel'>
					Kup na prezent <ChevronRight className='size-3' />
				</LinkBtn>
				<LinkBtn variant={'eco'} className='rounded-r-none w-[85%]' href='/#hotel'>
					Bike friendly <ChevronRight className='size-3' />
				</LinkBtn>
			</div>
		</section>
	)
}

export default Hero
