import BlocksRenderer from '@/components/blocks/blocks-renderer'
import { getAttractionsPageData } from '@/lib/queries'


const Page = async () => {

    const data = await getAttractionsPageData()



  return (
   <BlocksRenderer blocks={data.blocks} />
  )
}

export default Page