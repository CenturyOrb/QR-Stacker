import styles from './main.module.css'
import { Colors } from '../../constants.js'
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { PiStackSimple } from "react-icons/pi";

import SearchBar from '../search-bar/SearchBar.jsx'
import Container from '../container/Container.jsx'

const Main = () => {
	return(
		<main className={styles.main}>
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
				letterSpacing: '1.5px'}
			}>
				Dashboard
			</h2>	
			
			{/* general summary of items and boxes */}
			<section className={styles.categories}>
				<div className={styles.summary}>
					<Container customStyles={styles.item_summary}>	
						<CiFileOn size={20}/>
						Items
					</Container>
					<Container customStyles={styles.box_summary}>	
						<PiStackSimple size={20} />
                    	Inventory
                    </Container>
					<Container customStyles={styles.inventory_summary}>	
                    	Inventory
                    </Container>
					<Container customStyles={styles.revenue_summary}>	
                    	Revenue
                    </Container>
				</div>
			</section>
		</main>
	);
}

export default Main
