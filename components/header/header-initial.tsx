import TopBar from '@/components/header/topbar'
import NavbarInitial from '@/components/header/navbar-initial'

const HeaderInitial = ({global}: {global: Global}) => {
	return (
		<>
			<TopBar global={global}/>
            <NavbarInitial/>
		</>
	)
}

export default HeaderInitial
