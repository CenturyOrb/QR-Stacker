import styles from './productpage.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductPage = () => {
	const { uuid } = useParams();
	const [ item, setItem ] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/api/item/${uuid}`);
				setItem(response.data);
			} catch (err) { console.error(err); }
		}
		fetchData();
	}, []);
	
	if (!item) return <p styles={{color: 'black'}}>Loading...</p>

	return(
		<div className={styles.container}>
      		{item.image && (
      		  <img
      		    src={item.image}
      		    alt={item.name}
      		    className={styles.image}
      		  />
      		)}

      		<div className={styles.info}>
      		  <h1 className={styles.name}>{item.name}</h1>
      		  <p className={styles.price}>${item.price}</p>
      		  <p className={styles.description}>{item.description}</p>
      		  <p className={styles.location}>Location: {item.location}</p>
      		</div>
    	</div>
	);	
}

export default ProductPage
