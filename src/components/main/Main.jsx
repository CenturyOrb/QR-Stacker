import styles from './main.module.css'

import DashboardSummary from './dashboard/DashboardSummary.jsx'

const Main = () => {
	return(
		<main className={styles.main}>
			<DashboardSummary />
		</main>
	);
}

export default Main
