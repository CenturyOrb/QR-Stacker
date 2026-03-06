import { useState } from 'react'
import styles from './edititem.module.css'
import axios from 'axios'

const EditItem = ({item}) => {
	// preview, handleImageChange, *itemInputFieldStates*
	const [ preview, setPreview ] = useState(item.image);
	const [ itemImage, setItemImage ] = useState(null);
	const [ itemName, setItemName ] = useState(item.name);	
	const [ itemPrice, setItemPrice ] = useState(item.price);
	const [ itemDescription, setItemDescription ] = useState(item.description);
	
	const handleImageChange = (e) => {
		setItemImage(e.target.files[0]);           		
                                                    
        const file = e.target.files[0];
                                                    
        if (!file) return;
                                                    
        if (!file.type.startsWith("image/")) {
          	alert("Please select an image file");
          	return;
        }
                                                    
        const imageUrl = URL.createObjectURL(file);
	 	setPreview(imageUrl);
	}

	const handleSubmit = () => {
		console.log(item.uuid);
	}	

	return (<>
	<div className={styles.form_container}>
		<div className={styles.image_section}>
			{preview ? (
				<img
					src={preview}
					alt="Preview"
					style={{ width: "200px", marginTop: "10px" }}	
				/>
			) : (
				<input type="file"              								
	            	accept='image/*'
	            	onChange={handleImageChange}
	            />
			)}
		</div>
		<div className={styles.details_section}>
			<div className={styles.input_container}>
				<p>Item Name:</p>
				<input type="text" 
					value={itemName} 
					onChange={(e) => setItemName(e.target.value)}
				/>
			</div>
			<div className={styles.input_container}>
	        	<p>Item Price:</p>
				<input type="number" 
	        		value={itemPrice}
	        		onChange={(e) => setItemPrice(e.target.value)}
	        		placeholder='0.00'
	        	/>
	        </div>
			<div className={styles.input_container}>
				<p>Item Description:</p>
	        	<textarea 
					value={itemDescription}
					onChange={(e) => setItemDescription(e.target.value)}
				/>
	        </div>
			<button onClick={handleSubmit}>
				Save Item
	        </button>
	    </div>
	</div>
	</>);
}

export default EditItem;
