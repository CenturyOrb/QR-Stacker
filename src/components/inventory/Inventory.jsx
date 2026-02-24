import { useState } from 'react'
import styles from './inventory.module.css'
import {Colors } from '../../constants.jsx'
import { IoSearch } from 'react-icons/io5'
import { FaRegBell } from 'react-icons/fa'

import SearchBar from '../search-bar/SearchBar.jsx'
import Modal from '../modal/Modal.jsx'

const Inventory = () => {
	const [ isToggleNewItem , setToggleNewItem ] = useState(false);

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
			<button
				onClick={() => setToggleNewItem(!isToggleNewItem)}
			>
				Add Item
			</button>
			{isToggleNewItem && (
				<Modal setModal={setToggleNewItem}>
					<div className={styles.form_container}>
						<div className={styles.image_section}>
							<input type="file"/>
						</div>
						<div className={styles.details_section}>
							<div className={styles.input_container}>
								Item Name:
								<input type="text"/>
							</div>
							<div className={styles.input_container}>
								Item Description:
                            	<input type="text"/>
                            </div>
							<div className={styles.input_container}>
								Item Price:
                            	<input type="text"/>
                            </div>
                        </div>
					</div>
				</Modal>
			)}
			</div>
		</main>
	);
}

export default Inventory
