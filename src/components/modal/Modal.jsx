import { useContext } from 'react'
import { AppContext } from '../../App.js'
import styles from './modal.module.css'

function Modal ({children}) {
	
	
	// close modal when clicing on background
	return(
		<div 
			className={styles.modal}
		>
			<div 
				className={styles.modal_content}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
}

export default Modal
