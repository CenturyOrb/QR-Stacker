import styles from './dashboardsummary.module.css'
import { Colors } from '../../../constants.jsx'
import { IoSearch } from 'react-icons/io5'
import { FaRegBell } from 'react-icons/fa'
import { CiFileOn } from 'react-icons/ci'
import { PiStackSimple } from 'react-icons/pi'
import { HiOutlineRectangleStack } from 'react-icons/hi2'
import { MdAttachMoney } from 'react-icons/md'

import SearchBar from '../../search-bar/SearchBar.jsx'
import Container from '../../container/Container.jsx'

const DashboardSummary = () => {
	return(
		<>
			{/* header */}
			<header className={styles.header}>
				<SearchBar icon={<IoSearch />} customContainer={styles.search_bar}/>
				<section className={styles.header_right}>
					Crownless
					<FaRegBell size={20}/>					
				</section>
			</header>
			
			<h2 style={
				{color: Colors.primary_light,
				fontFamily: 'Poppins, sans-serif',
				letterSpacing: '1.5px',
				marginTop: '1rem'}
			}>
				Dashboard
			</h2>	
			
			{/* general summary of items and boxes */}
			<section className={styles.dashboard_content}>
				<div className={styles.summary}>
					<Container customStyles={styles.item_summary}>	
						<CiFileOn size={20}/>
						Items
					</Container>
					<Container customStyles={styles.box_summary}>	
						<PiStackSimple size={20}/>
                    	Containers
                    </Container>
					<Container customStyles={styles.inventory_summary}>	
						<HiOutlineRectangleStack size={20}/>
                    	Inventory
                    </Container>
					<Container customStyles={styles.revenue_summary}>	
						<MdAttachMoney size={20}/>
                    	Revenue
                    </Container>
				</div>
				<Container customStyles={styles.recent_updates}>
					Recent updates goes here
				</Container>
			</section>
		</>
	);
}

export default DashboardSummary
