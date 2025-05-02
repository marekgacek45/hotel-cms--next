import Link from 'next/link'

import TextImageBlock from '@/components/text-image-block'
import LinkBtn from '@/components/link-btn'
import { List, ListItem } from '@/components/list'

import about from '@/public/assets/about.jpg'

const About = () => {
	return (
		<TextImageBlock idName='hotel' img={about} alt='about image' heading='Hotel o doskonałej lokalizacji'>
			<p className='text'>
				Zachwyć się unikatowym położeniem w uzdrowiskowej miejscowości Świeradów-Zdrój. Poznaj hotel otoczony
				klimatyczną scenerią Gór Izerskich, z doskonałą lokalizacją blisko
				<Link href='#' className='link ml-1.5'>
					atrakcji w okolicy
				</Link>
				<br />
				To tu znajdziesz miejsce, w którym w pełni wypoczniesz.
			</p>

			<p className='text'>
				Elements Hotel & Spa został stworzony z dbałością o szczegóły, składa się z trzech skrzydeł, które tworzą między
				sobą kąty 120 stopni, co pozwala z niemal każdego pokoju podziwiać niecodzienny górski widok. Elewacja nawiązuje
				do tradycyjnych elementów architektury w regionie, to połączenie drewna, kamieni, jasnego betonu i szkła.
				Wszystko to sprawia, że obiekt wpisuje się w pełni w wyjątkowy krajobraz malowniczej miejscowości w Sudetach.
			</p>

			<Link href='#' className='link !uppercase md:!text-[17px] self-center'>
				ZOBACZ MAPĘ OBIEKTU
			</Link>

			<List>
				<ListItem href="#" title='Zajęcia fitness' />
				<ListItem href="#" title='WEEKENDOWE ANIMACJE W MARCU' />
				<ListItem href="#" title='WEEKENDOWE ANIMACJE W KWIETNIU' />
				<ListItem href="#" title='ANIMACJE WIELKANOCNE' />
				<ListItem href="#" title='WIELKANOCNE BALONOWE SHOW' />
				<ListItem href="#" title='ANIMACJE PODCZAS MAJÓWKI' />
				<ListItem href="#" title='ANIMACJE NA DZIEŃ DZIECKA' />
			</List>
			<LinkBtn variant={'outline'} className='self-start mt-11' href='#'>
				Wiosna w górach izerskich
			</LinkBtn>
		</TextImageBlock>
	)
}

export default About
