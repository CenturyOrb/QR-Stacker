import { createContext, useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.css'
import SideBar from './components/side-bar/SideBar.jsx'
import Main from './components/main/Main.jsx'
import SignUp from './components/signup/SignUp.jsx'

export const ViewContext = createContext();

import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

function App() {
	const [view, setView] = useState([
		{ content: 'Dashboard', selected: true, icon: RxDashboard, path: '/' },         	
        { content: 'Inventory', selected: false, icon: MdOutlineInventory2, path: '/inventory' },
        { content: 'Setting', selected: false, icon: IoSettingsOutline, path: '/setting' }	
	]);

	return (
		<div className={styles.app}>
			<ViewContext.Provider value={{view, setView}}>
				<SideBar />
				<Routes>
          			<Route path="/" element={<Main />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/setting" element={<p>working lol</p>}/>
					<Route path="/inventory" element={<p>workign lol</p>}/>
        		</Routes>
			</ViewContext.Provider>
		</div> 
	);
}

export default App
