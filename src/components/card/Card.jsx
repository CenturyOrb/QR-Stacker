import styles from './card.module.css'

const Card = ({ item, ...props }) => {
	return(
		<div className={styles.card} {...props}>
			<img src={item.image} className={styles.item_image}/>
			<p className={styles.item_price}>{'$' + numberWithCommas(item.price)}</p>
			<p className={styles.item_name}>{item.name}</p>
			<p className={styles.item_location}>Location</p>
		</div>		
	);
}

function numberWithCommas(x) {
	return Number(x)
  		.toFixed(2)
  		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Card
