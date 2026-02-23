import styles from './inventory.module.css'
import {Colors } from '../../constants.jsx'
import SearchBar from '../search-bar/SearchBar.jsx'
import { IoSearch } from 'react-icons/io5'
import { FaRegBell } from 'react-icons/fa'

const Inventory = () => {
	return(
		<main className={styles.inventory}>
			<header className={styles.header}>                                      			
            	<SearchBar icon={<IoSearch />} customContainer={styles.search_bar}/>
            	<section className={styles.header_right}>
            		Crownless
            		<FaRegBell size={20}/>					
            	</section>
            </header>
			<div className={styles.seperator}>
			<h2 style={                           			
        		{color: Colors.primary_light,
        		fontFamily: 'Poppins, sans-serif',
        		letterSpacing: '1.5px',
        		marginTop: '1rem'}
        		}>
       			Inventory
        	</h2>	
			<button>
				Add Item
			</button>
			</div>
		</main>
	);
}

export default Inventory
