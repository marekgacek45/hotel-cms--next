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
import { getHomeData } from '@/lib/queries'

const Home = async () => {

const homeHero = await getHomeData(['home_hero_type','home_hero_video','home_hero_image.id','home_hero_image.description','home_hero_preheading','home_hero_heading','home_hero_subheading',]);

console.log('HOMEPAGE',homeHero.home_hero_image)
	
	return (
		<>
			<Hero data={homeHero} />
			<About />
			<Children />
			<AboutSecond />
			<SpecialOffers />
			<Morning />
			<Restaurant />
			<AttractionsArea />
			<AttractionsHotel />
			<Faq />
			<Vouchers />
		</>
	)
}

export default Home
