import { ChevronRight, ChevronLeft } from 'lucide-react'
import SwiperInstance from 'swiper'

export interface SwiperButtonProps {
	swiperRef: React.RefObject<SwiperInstance | null>
	direction: 'prev' | 'next'
}

const ChevronButton = ({ swiperRef, direction }: SwiperButtonProps) => {
	return (
		<button
			onClick={() => (direction === 'prev' ? swiperRef.current?.slidePrev() : swiperRef.current?.slideNext())}
			className='cursor-pointer group'
			aria-label={direction === 'prev' ? 'poprzedni' : 'następny'}>
			{direction === 'prev' ? (
				<ChevronLeft className='size-11 text-primary-600 stroke-1 group-hover:translate-x-1 transition-transform duration-150' />
			) : (
				<ChevronRight className='size-11 text-primary-600 stroke-1 group-hover:translate-x-1 transition-transform duration-150' />
			)}
		</button>
	)
}

export default ChevronButton
