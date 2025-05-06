import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Children from '@/components/home/children'
import AboutSecond from '@/components/home/about-second'
import SpecialOffers from '@/components/home/special-offers'
import Morning from '@/components/home/morning'
import Restaurant from '@/components/home/restaurant'
import AttractionsArea from '@/components/home/attractions-area'
import AttractionsHotel from '@/components/home/attractions-hotel'
import Faq from '@/components/home/faq'
import Vouchers from '@/components/home/vouchers'
import { getHomeData, getSpecialOffers } from '@/lib/queries'
import BlocksRenderer from '@/components/blocks/blocks-renderer'

const Home = async () => {
	const homeHero = await getHomeData()

	const specialOffers = await getSpecialOffers([
		'title',
		'price',
		'stay_type',
		'min_nights',
		'thumbnail_type',
		'thumbnail_image.id',
		'thumbnail_image.description',
		'thumbnail_video',
		'thumbnail_poster',
		'ribbon',
		'ribbon_title',
		'ribbon_color',
	])

	const home = await getHomeData()



	return (
		<>
			<Hero data={homeHero} />

			<BlocksRenderer blocks={home.blocks} />

			{/* <About /> */}
			{/* <Children /> */}
			{/* <AboutSecond /> */}
			<SpecialOffers data={specialOffers} />
			<Morning />
			<Restaurant />
			{/* <AttractionsArea /> */}
			{/* <AttractionsHotel /> */}
			{/* <Faq /> */}
			{/* <Vouchers /> */}
		</>
	)
}

export default Home
