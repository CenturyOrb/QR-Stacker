import { useState } from 'react'
import styles from './sidebar.module.css'
import globalStyles from '../globalStyles.module.css'
import { Colors } from '../../constants.js'

import NavButton from './NavButton.jsx'

const SideBar = () => { 
	const [navData, setNavData] = useState([
		{content: 'Dashboard', selected: true},
		{content: 'Inventory', selected: false},
		{content: 'Summary', selected: false}	
	]);

	return (
		<section className={styles.side_bar}>
			<h1 className={styles.logo}>Stacker</h1>
			<nav>
				<ul className={styles.nav}>
					{navData.map((data, index) => (
						<NavButton 
							key={index} 
							data={data}
						/>
					))}
				</ul>
			</nav>
		</section>
	);
}

export default SideBar
