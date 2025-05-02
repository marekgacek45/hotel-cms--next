import { cn } from '@/lib/utils'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import SwiperInstance from 'swiper'

export interface SwiperButtonProps {
	swiperRef: React.RefObject<SwiperInstance | null>
    className? : string
}

const ButtonsFraction = ({ swiperRef,className }: SwiperButtonProps) => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [totalSlides, setTotalSlides] = useState(1)

	useEffect(() => {
		if (!swiperRef.current) return

		const swiper = swiperRef.current

		// Ustawienie początkowej liczby slajdów
		setTotalSlides(swiper.slides.length)

		// Aktualizacja numeru slajdu przy zmianie
		const updateSlideNumber = () => {
			setCurrentSlide(swiper.realIndex + 1) // realIndex zaczyna się od 0
			setTotalSlides(swiper.slides.length)
		}

		swiper.on('slideChange', updateSlideNumber)

		// Cleanup eventu
		return () => {
			swiper.off('slideChange', updateSlideNumber)
		}
	}, [swiperRef])

	return (
		<div className={`${cn('flex  xl:flex-col justify-center items-center',className)} `}>
			<button
				onClick={() => swiperRef.current?.slidePrev()}
				className='cursor-pointer border border-primary-600 border-r-0 xl:border-r-1 xl:border-b-0 size-12 xl:size-28 flex justify-center items-center hover:bg-primary-600 duration-300 group'
				aria-label='poprzedni'>
				<ChevronLeft className='size-8 xl:size-11 text-primary-600 stroke-1 group-hover:text-white duration-300' />
			</button>

			<div className='border border-primary-600 border-x-0 xl:border-x-2 px-20 xl:px-0 size-12 xl:size-28 flex justify-center items-center text-primary-600 font-medium'>
				{currentSlide}/{totalSlides}
			</div>

			<button
				onClick={() => swiperRef.current?.slideNext()}
				className='cursor-pointer border border-primary-600 border-l-0 xl:border-l-1 xl:border-t-0 size-12 xl:size-28 flex justify-center items-center hover:bg-primary-600 duration-300 group'
				aria-label='następny'>
				<ChevronRight className='size-8 xl:size-11 text-primary-600 stroke-1 group-hover:text-white duration-300' />
			</button>
		</div>
	)
}

export default ButtonsFraction
