import Image from 'next/image'

import Link from 'next/link'
import { SOCIALS } from '@/lib/socials'

import marketingMix from '@/public/assets/marketingmix-logo--light.svg'
import { getAssetUrl } from '@/lib/utils'

const Footer = ({ global: { name, logo, phone, mail, address, city } }: { global: Global }) => {
	return (
		<footer className='pt-16 pb-32  relative px-7 2xl:px-0'>
			{/* <Image src={bgPattern} alt='bg' className='absolute top-0 left-0 w-full h-full object-cover -z-10' fill /> */}

			<div className='max-w-screen-xl mx-auto '>
				{/* LOGO */}
				<Image src={getAssetUrl(logo)} alt={name} width={84} height={86} className=' mx-auto size-20' />
				{/* GRID */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 mt-11 '>
					{/* links */}
					<div className='text-center lg:text-left'>
						<h2 className='text-lg  text-primary-600 uppercase'>Przydatne linki</h2>
						<ul className='flex flex-col justify-start items-center  lg:items-start gap-3.5 mt-6'>
							<li>
								<Link href='#' className='utility-link !text-base !text-white/66 !font-normal hover:!text-primary-600'>
									Polityka prywatności
								</Link>
							</li>
							<li>
								<Link href='#' className='utility-link !text-base !text-white/66 !font-normal hover:!text-primary-600'>
									Kontakt
								</Link>
							</li>
							<li>
								<Link href='#' className='utility-link !text-base !text-white/66 !font-normal hover:!text-primary-600'>
									Regulaminy
								</Link>
							</li>
							<li>
								<Link href='#' className='utility-link !text-base !text-white/66 !font-normal hover:!text-primary-600'>
									Kariera
								</Link>
							</li>
						</ul>
					</div>
					{/* info */}
					<div className='text-center'>
						<h2 className='text-lg  text-primary-600 uppercase'>{name}</h2>
						<div className='flex flex-col justify-center items-center gap-6 mt-6'>
							<Link href='#' className='group flex flex-col'>
								<span className='!text-base !text-white/66 !font-normal group-hover:!text-primary-600 duration-300'>
									{address}
								</span>
								<span className='!text-base !text-white/66 !font-normal group-hover:!text-primary-600 duration-300'>
									{city}
								</span>
							</Link>
							<div className='flex flex-col justify-center items-center gap-1.5'>
								<Link
									href={`tel:${phone}`}
									className='utility-link !text-base !text-white/66 !font-normal !lowercase hover:!text-primary-600'>
									+48 {phone}
								</Link>
								<Link
									href={`mailto:${mail}`}
									className='utility-link !text-base !text-white/66 !font-normal !lowercase hover:!text-primary-600'>
									{mail}
								</Link>
							</div>
						</div>
					</div>
					{/* social */}
					<div className='text-center lg:text-right'>
						<h2 className='text-lg  text-primary-600 uppercase'>Odwiedź nas</h2>

						<ul className='flex justify-center lg:justify-end items-center gap-3 mt-6'>
							{/* {SOCIALS.map(({ name, link, icon: Icon }) => (
								<li key={name}>
									<Link
										href={link}
										target='_blank'
										rel='noopener noreferrer nofollow'
										className='block border border-primary-600 rounded-full p-3 hover:border-gray-400 group duration-300'
										aria-label={name}>
										<Icon className='size-4 text-primary-600 group-hover:text-gray-400 duration-300 transition-colors ' />
									</Link>
								</li>
							))} */}
						</ul>
						<div className='flex flex-col items-center lg:items-end gap-4 lg:gap-1.5 mt-10'>
							<span className='flex justify-center items-center gap-2  utility-link !text-base !text-white/66 !font-normal !normal-case'>
								Created by:{' '}
								<Link href='https://marketingmix.pl'>
									<Image src={marketingMix} alt='MarketingMix' width={100} height={30} />
								</Link>
							</span>

							<Link
								href='#'
								className='utility-link !text-sm !text-white/66 !font-normal !normal-case hover:!text-primary-600'>
								Ustawienia cookies
							</Link>
						</div>
					</div>
				</div>
				{/* TEXT */}
				<p className='mt-8 text-primary-600 text-center'>
					Dane do faktury: Operator Świeradów Zdrój Sp. z o.o. Sp. k. ul. Widok 8 00-023 Warszawa NIP 5213858235 REGON
					382681700
				</p>
			</div>
		</footer>
	)
}

export default Footer
