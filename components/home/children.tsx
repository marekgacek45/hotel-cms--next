import TextImageBlock from '@/components/text-image-block'
import LinkBtn from '@/components/link-btn'

import children from '@/public/assets/children.jpg'
import { List, ListItem } from '@/components/list'

const Children = () => {
	return (
		<TextImageBlock reverse  img={children} alt='children image' heading='Hotel z atrakcjami dla dzieci'>
			<List>
				<ListItem variant='secondary' href='#' title='Animacje' description='dla dzieci i dorosłych' />
				<ListItem variant='secondary' href='#' title='game room'  />
                <ListItem variant='secondary' href='#' title='play room' description='czyli miejsce dla najmłodszych Gości, z licznymi zabawkami interaktywnymi' />
                <ListItem variant='secondary' href='#' title='brodzik dla dzieci' description='z podgrzewaną wodą' />
                <ListItem variant='secondary' href='#' title='RODZINNA STREFA WELLNESS'  />
                <ListItem variant='secondary' href='#' title='Kids menu' description="dostępne w restauracji a'la carte*" />
                <ListItem variant='secondary' href='#' title='Zabiegi dla dzieci' description="w Spa*" />
			</List>

            <span className='italic text-sm'>*Usługa dodatkowo płatna.</span>

			<LinkBtn variant={'outline'} className='self-start mt-11' href='#'>
				Czytaj więcej
			</LinkBtn>
		</TextImageBlock>
	)
}

export default Children
