import Attractions from "./attractions"
import AttractionsHotelWrapper from "./attractions-hotel-wrapper"
import AttractionsWrapper from "./attractions-wrapper"
import BlockAttractionsGrid from "./block-attractions-grid"
import BlockHero from "./block-hero"
import BlockSpecialOffersGrid from "./block-special-offers-grid"
import BlockSpecialOffersWrapper from "./block-special-offers-wrapper"
import BlockTextGalleryWrapper from "./block-text-gallery-wrapper"
import BlockTextImage from "./block-text-image"
import BlockTextImageFull from "./block-text-image-full"
import BlockTextImageSpecial from "./block-text-image-special"
import Faq from "./faq"
import Vouchers from "./vouchers"


const BlocksRenderer = ({ blocks }: { blocks: Home['blocks'] }) => {
	let textImageIndex = 0

	return (
		<>
			{blocks.map((block, index) => {
				// const isFirstBlock = index === 0
				// const isLastBlock = index === blocks.length - 1
				// const blockClass = `${isFirstBlock ? '!pt-20' : ''} ${isLastBlock ? '!pb-20' : ''}`
				const blockClass = ''

				if (block.collection === 'block_faq') {
					return <Faq key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_attractions') {
					return <AttractionsWrapper  key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_attractions_hotel') {
					return <AttractionsHotelWrapper  key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_vouchers') {
					return <Vouchers  key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_special_offers') {
					return <BlockSpecialOffersWrapper  key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_text_image') {
					const reverse = textImageIndex % 2 !== 0
					textImageIndex++

					return <BlockTextImage  key={block.item.id} {...block.item} reverse={reverse} />
				}
				if (block.collection === 'block_text_image_full') {
					

					return <BlockTextImageFull  key={block.item.id} {...block.item} />
				}

				if (block.collection === 'block_text_image_special') {
					

					return <BlockTextImageSpecial  key={block.item.id} {...block.item} />
				}
				if (block.collection === 'block_text_gallery') {
					

					return <BlockTextGalleryWrapper  key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_hero') {
					

					return <BlockHero  key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_special_offers_grid') {
					

					return <BlockSpecialOffersGrid  key={block.item.id} {...block.item}  />
				}
				if (block.collection === 'block_attractions_grid') {
					

					return <BlockAttractionsGrid  key={block.item.id} {...block.item}  />
				}

			
			})}
		</>
	)
}

export default BlocksRenderer