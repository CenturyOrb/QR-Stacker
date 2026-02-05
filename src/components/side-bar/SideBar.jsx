import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css'
import { Colors } from '../../constants.jsx'
import { ViewContext } from '../../App.jsx'

import NavButton from './NavButton.jsx'
import Modal from '../modal/Modal.jsx'
import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => { 
	const { view, setView } = useContext(ViewContext);
	const [ isToggleSignInModal, setToggleSignInModal ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	useEffect(() => {
		console.log(isToggleSignInModal);
	}, [isToggleSignInModal]);

	const changeCurrentSelected = (i) => { 
		setView(
			prevView => 
			prevView.map((item, j) => 
				({ ...item, selected: j === i })
			)
		);	
	}

	const testClick = () => {
		console.log('test click');
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
					<h2>Sign In</h2>										
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
				</Modal>
			)}
		</section>
	);
}

export default SideBar
