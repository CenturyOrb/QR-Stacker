import { useState } from 'react'
import styles from './sidebar.module.css'
import globalStyles from '../globalStyles.module.css'
import { Colors } from '../../constants.js'

import NavButton from './NavButton.jsx'
import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => { 
	const [navData, setNavData] = useState([
		{ content: 'Dashboard', selected: true, icon: RxDashboard },
		{ content: 'Inventory', selected: false, icon: MdOutlineInventory2 },
		{ content: 'Setting', selected: false, icon: IoSettingsOutline}	
	]);

	const changeCurrentSelected = (i) => { 
		setNavData(
			prevNavData => 
			prevNavData.map((item, j) => 
				({ ...item, selected: j === i })
			)
		);	
	}

	return (
		<section className={styles.side_bar}>
			<h1 className={styles.logo}>Stacker</h1>
			<nav>
				<ul className={styles.nav}>
					{navData.map((data, index) => (
						<NavButton 
							key={index} 
							data={data}
							changeSelected={() => changeCurrentSelected(index)}
						/>
					))}
				</ul>
			</nav>
			<div className={styles.user_container}> 
				John Doe	
			</div>
		</section>
	);
}

export default SideBar
