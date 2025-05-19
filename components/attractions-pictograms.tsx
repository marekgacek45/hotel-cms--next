import { Clock11Icon as Clock, MapPin, Tickets, Car } from 'lucide-react'
import Link from 'next/link'

const AttractionsPictograms = ({ distance, opening_hours, price_list, directions }) => {
	return (
		<section className='bg-black/30'>
			<div className='flex flex-col sm:flex-row flex-wrap justify-start sm:justify-center gap-12 mx-auto max-w-screen-lg py-16 wrapper'>
				{distance && (
					<div className='flex'>
						<div className='flex justify-center items-start gap-5'>
							<MapPin className='size-12 text-primary-400 stroke-1 ' />
							<div className='flex flex-col justify-between items-start gap-3'>
								<span className='font-semibold'>Odległość</span>
								<span className='font-light'>{distance}</span>
							</div>
						</div>
					</div>
				)}
				{opening_hours && (
					<div className='flex'>
						<div className='flex justify-center items-start gap-5'>
							<Clock className='size-12 text-primary-400 stroke-1 ' />
							<div className='flex flex-col justify-between items-start gap-3'>
								<span className='font-semibold'>Godziny otwarcia</span>
								<Link href={opening_hours} className='font-light uppercase'>
									Sprawdź
								</Link>
							</div>
						</div>
					</div>
				)}

				{price_list && (
					<div className='flex'>
						<div className='flex justify-center items-start gap-5'>
							<Tickets className='size-12 text-primary-400 stroke-1 ' />
							<div className='flex flex-col justify-between items-start gap-3'>
								<span className='font-semibold'>Cennik</span>
								<Link href={price_list} className='font-light uppercase'>
									Sprawdź
								</Link>
							</div>
						</div>
					</div>
				)}

				{directions && (
					<div className='flex'>
						<div className='flex justify-center items-start gap-5'>
							<Car className='size-12 text-primary-400 stroke-1 ' />
							<div className='flex flex-col justify-between items-start gap-3'>
								<span className='font-semibold'>Jak dojechać</span>
								<Link href={directions} className='font-light uppercase'>
									Sprawdź
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default AttractionsPictograms
