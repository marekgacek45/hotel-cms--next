import Attractions from "./attractions"
import AttractionsWrapper from "./attractions-wrapper"
import Faq from "./faq"


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
					return <AttractionsWrapper key={block.item.id} {...block.item}  />
				}

			
			})}
		</>
	)
}

export default BlocksRenderer