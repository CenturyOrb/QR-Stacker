import { createContext, useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.css'
import SideBar from './components/side-bar/SideBar.jsx'
import Main from './components/main/Main.jsx'
import Inventory from './components/inventory/Inventory.jsx'
import SignUp from './components/signup/SignUp.jsx'
import ProductPage from './components/product-page/ProductPage.jsx'

export const ViewContext = createContext();

import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

function App() {
	const [ view, setView ] = useState([
		{ content: 'Dashboard', selected: true, icon: RxDashboard, path: '/' },         	
        { content: 'Inventory', selected: false, icon: MdOutlineInventory2, path: '/inventory' },
        { content: 'Setting', selected: false, icon: IoSettingsOutline, path: '/setting' }	
	]);

	return (
			<ViewContext.Provider value={{view, setView}}>
				<Routes>
          			<Route path="/" element={
						<MainLayout>
							<Main />
						</MainLayout>
					}/>
					<Route path="/signup" element={
						<MainLayout>
							<SignUp />
						</MainLayout>
					}/>
					<Route path="/setting" element={
						<MainLayout>
							<p>working lol</p>
						</MainLayout>
					}/>
					<Route path="/inventory" element={
						<MainLayout>
							<Inventory />
						</MainLayout>
					}/>
					<Route path="/product/:uuid" element={<ProductPage />}/>
        		</Routes>
			</ViewContext.Provider>
	);
}

function MainLayout({ children }) {
  return (
	<div className={styles.app}>
      <SideBar />
      {children}
    </div>
  );
}

export default App
