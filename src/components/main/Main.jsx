import { useContext } from 'react'
import styles from './main.module.css'
import { ViewContext } from '../../App.jsx'

import DashboardSummary from './dashboard/DashboardSummary.jsx'

const Main = () => {
	const { view, setView } = useContext(ViewContext);
	
	return(
		<main className={styles.main}>
			<DashboardSummary />
		</main>
	);
}

export default Main
