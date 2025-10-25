import { createContext, useState} from 'react'
import styles from './app.module.css'
import SideBar from './components/side-bar/SideBar.jsx'
import Main from './components/main/Main.jsx'

export const ViewContext = createContext();

import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

function App() {
	const [view, setView] = useState([
		{ content: 'Dashboard', selected: true, icon: RxDashboard },         	
        { content: 'Inventory', selected: false, icon: MdOutlineInventory2 },
        { content: 'Setting', selected: false, icon: IoSettingsOutline}	
	]);

	return (
		<div className={styles.app}>
			<ViewContext.Provider value={{view, setView}}>
				<SideBar />
				<Main />
			</ViewContext.Provider>
		</div> 
	);
}

export default App
