import styles from './main.module.css'

import DashboardSummary from './dashboard/DashboardSummary.jsx'
import QRCodeGenerator from '../qrcode/QRCodeGenerator.jsx'

const Main = () => {
	return(
		<main className={styles.main}>
			<DashboardSummary />
			<QRCodeGenerator text={'hi'}/>
		</main>
	);
}

export default Main
