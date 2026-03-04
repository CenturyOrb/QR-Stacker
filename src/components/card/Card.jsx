import styles from './card.module.css'

const Card = ({ item }) => {
	return(
		<div className={styles.card}>
			<img src={item.image} className={styles.item_image}/>
			<p className={styles.item_price}>{'$' + numberWithCommas(item.price)}</p>
			<p className={styles.item_name}>{item.name}</p>
			<p className={styles.item_location}>Location</p>
		</div>		
	);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Card
