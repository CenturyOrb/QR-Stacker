import styles from './itempreview.module.css'

const ItemPreview = ({ item }) => {
    return (
        <div className={styles.preview_container}>
            <div className={styles.preview_image}>
                <img src={item.image} alt={item.name} />
            </div>

            <div className={styles.preview_info}>
                <h2 className={styles.preview_name}>{item.name}</h2>

				<p className={styles.preview_price}>				
                    ${item.price.toFixed(2)}
                </p>

				<div className={styles.preview_description}>
                    {item.description}
                </div>

				<p className={styles.preview_location}>
	                Location: {item.location}
                </p>
			
				<button onClick={() => console.log('WIP edit button')}>
					Edit
				</button>

				<button onClick={() => console.log('WIP mark sold button')}>
                	Mark Sold
                </button>

				<button onClick={() => console.log('WIP QR code button')}>
					QR Code	
				</button>
            </div>
        </div>
    );
}

export default ItemPreview;
