import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css'
import { Colors } from '../../constants.jsx'
import { ViewContext } from '../../App.jsx'

import NavButton from './NavButton.jsx'
import GoogleButton from '../google-button/GoogleButton.jsx'
import Modal from '../modal/Modal.jsx'
import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

import axios from 'axios'
import { FirebaeAuth } from '../../firebase/firebase-config.js'
import { 
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged
} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();

const SideBar = () => { 
	const { view, setView } = useContext(ViewContext);
	const [ isToggleSignInModal, setToggleSignInModal ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleLogin = async () => {                                                 			
    	try { 
    		const userGoogleCred = await signInWithPopup(FirebaeAuth, googleProvider);
    		// JWT token grabbed from user logged in state
    		const idToken = await userGoogleCred.user.getIdToken(); 
    	
    		// send token to the backend where it will verify the token
    		const res = await axios.get('http://localhost:3000/api/auth/login', {
    			headers: { 
    				Authorization: `Bearer ${idToken}`,
    			}
    		})
			setToggleSignInModal(false);
    	} catch (err) { console.error(err) } // error here
    }

	const changeCurrentSelected = (i) => { 
		setView(
			prevView => 
			prevView.map((item, j) => 
				({ ...item, selected: j === i })
			)
		);	
	}

	return (
		<section className={styles.side_bar}>
			<h1 className={styles.logo}>Stacker</h1>
			<nav>
				<ul className={styles.nav}>
					{view.map((data, index) => (
						<NavButton 
							key={index} 
							data={data}
							changeSelected={() => changeCurrentSelected(index)}
						/>
					))}
				</ul>
			</nav>

			<button 
				className={styles.user_container}
				onClick={(e) => setToggleSignInModal(!isToggleSignInModal)}
			>
				Sign In 
			</button>
	
			{isToggleSignInModal && (
				<Modal setModal={setToggleSignInModal}>
					<h2 style={{color: "grey"}} >Sign In</h2>										
					<div className={styles.sign_in_reg}> 
						<input
            				type="email"
            				placeholder="Email"
            				value={email}
            				onChange={(e) => setEmail(e.target.value)}
            				required
          				/>	
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button type="submit" className={styles.sign_in}
							style={{backgroundColor: Colors.primary}}
						>					
                        	Sign In
                        </button>
					</div>
					<span style={{color: "grey"}}>OR</span>
					<GoogleButton login={handleLogin}/>
				</Modal>
			)}
		</section>
	);
}

export default SideBar
