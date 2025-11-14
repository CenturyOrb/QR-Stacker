import { useState, useContext } from 'react'
import styles from './sidebar.module.css'
import globalStyles from '../globalStyles.module.css'
import { Colors } from '../../constants.js'
import { ViewContext } from '../../App.jsx'

import NavButton from './NavButton.jsx'
import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => { 
	const { view, setView } = useContext(ViewContext);

	const changeCurrentSelected = (i) => { 
		setView(
			prevView => 
			prevView.map((item, j) => 
				({ ...item, selected: j === i })
			)
		);	
	}

	return (
		<section className={styles.side_bar}>
			<h1 className={styles.logo}>Stacker</h1>
			<nav>
				<ul className={styles.nav}>
					{view.map((data, index) => (
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
