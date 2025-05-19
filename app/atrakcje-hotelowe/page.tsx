import BlocksRenderer from '@/components/blocks/blocks-renderer'
import { getHotelAttractionsPageData } from '@/lib/queries'

const Page = async () => {
	const data = await getHotelAttractionsPageData()
    
	return <BlocksRenderer blocks={data.blocks} />
}

export default Page
