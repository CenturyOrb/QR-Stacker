import { useState, useEffect } from 'react'
import styles from './inventory.module.css'
import { Colors } from '../../constants.jsx'
import { IoSearch } from 'react-icons/io5'
import { FaRegBell } from 'react-icons/fa'
import { FirebaeAuth } from '../../firebase/firebase-config.js'
import axios from 'axios'

import SearchBar from '../search-bar/SearchBar.jsx'
import Modal from '../modal/Modal.jsx'
import Card from '../card/Card.jsx'

const Inventory = () => {
	const [ isToggleNewItem , setToggleNewItem ] = useState(false);
	const [ itemImage, setItemImage ] = useState(null);
	const [ itemName, setItemName] = useState('');
	const [ itemDescription, setItemDescription ] = useState('');
	const [ itemPrice, setItemPrice ] = useState('');
	const [ items, setItems ] = useState([]);
	const [ preview, setPreview ] = useState(null);

	useEffect(() => {
		const fetchItems = async () =>  { 
			if (!FirebaeAuth.currentUser) return;
			try { 
				const idToken = FirebaeAuth.currentUser.accessToken;
				
				const res = await axios.get(
					"http://localhost:3000/api/item",
					{
						headers: { Authorization: `Bearer ${idToken}` }
					}
				);
				setItems(res.data);
			} catch (err) { console.error(err) }
		}
		fetchItems();
	}, []);
	
	useEffect(() => {
		setPreview(null);	
		setItemImage(null);
		setItemName('');
		setItemDescription('');
		setItemPrice('');
	}, [isToggleNewItem]);

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

	const handleSubmit = async () => {
		setItemImage(null);
		setItemName('');
		setItemDescription('');
		setItemPrice('');
		setToggleNewItem(false);
		setPreview(null);
		// axios post to backend
		const itemData = new FormData();
		itemData.append('image', itemImage);
		itemData.append('name', itemName);
		itemData.append('description', itemDescription);
		itemData.append('price', itemPrice);

		// user session access token
		const idToken = FirebaeAuth.currentUser.accessToken;
		  
		try {
    		const res = await axios.post(
      			"http://localhost:3000/api/item", 
				itemData,
				{	
					headers: { Authorization: `Bearer ${idToken}` }
				}
    		);

  		} catch (err) {
    		console.error(err.response?.data || err.message);
  		}
	}

	return(
		<main className={styles.inventory}>
			<header className={styles.header}>                                      			
            	<SearchBar icon={<IoSearch />} customContainer={styles.search_bar}/>
            	<section className={styles.header_right}>
            		Crownless
            		<FaRegBell size={20}/>					
            	</section>
            </header>
			<div className={styles.seperator}>
				<h2 style={                           			
        			{color: Colors.primary_light,
        			fontFamily: 'Poppins, sans-serif',
        			letterSpacing: '1.5px',
        			marginTop: '1rem'}
        			}>
       				Inventory
        		</h2>	
				<button
					onClick={() => setToggleNewItem(!isToggleNewItem)}
				>
					Add Item
				</button>
			{isToggleNewItem && (
				<Modal setModal={setToggleNewItem}>
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
								Add Item
                            </button>
                        </div>
					</div>
				</Modal>
			)}
			</div>
			<div className={styles.grid_container}>
				{items.map((item) => (
					<Card item={item}/>
				))}
			</div>
		</main>
	);
}

export default Inventory
