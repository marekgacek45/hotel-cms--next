import BlocksRenderer from '@/components/blocks/blocks-renderer'
import { getSpecialOffersPageData } from '@/lib/queries'


const Page = async () => {

    const data = await getSpecialOffersPageData()

  return (
   <BlocksRenderer blocks={data.blocks} />
  )
}

export default Page