import styles from './app.module.css'
import SideBar from './components/side-bar/SideBar.jsx'
import Main from './components/main/Main.jsx'

function App() {
	return (
		<div className={styles.app}>
			<SideBar />
			<Main />
		</div> 
	);
}

export default App
