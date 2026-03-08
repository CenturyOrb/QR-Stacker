import { useState } from 'react'
import styles from './itempreview.module.css'
import EditItem from './EditItem.jsx'

const ItemPreview = ({ item }) => {
	const [ view, setView ] = useState('preview');
	
    return (
        <div className={styles.preview_container}>
			{view === 'preview' && previewView(item, setView)}
			{view === 'edit' && editView(item)}
			{view === 'qr' && qrView(item)}
        </div>
    );
}

const previewView = (item, setView) => (
	<>
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
    
    	<button onClick={() => setView('edit')}>
    		Edit
    	</button>
                                                              
    	<button onClick={() => console.log('WIP Mark Sold')}>
        	Mark Sold
        </button>
    </div>
	</>
);

const editView = (item, setView) => (
	<EditItem item={item}/>
);

const qrView = (item, setView) => (
	<p>qr view</p>
);

export default ItemPreview;
