import styles from './navbutton.module.css'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react'

const NavButton = ({data, changeSelected}) => { 
	const highlight = data.selected
		? styles.highlight
		: null;
	
	return(
		<motion.li
		    onClick={changeSelected}
		    whileHover={{ scale: 1.02 }}
		    whileTap={{ scale: 0.95 }}
		>
			<Link 
				to={data.path}
				className={`${styles.nav_button} ${highlight}`}
			>
		    	{data.icon && <data.icon size={24} style={{ marginRight: '8px' }} />}
		    	<span style={{ verticalAlign: '0' }}>{data.content}</span>
			</Link>
		</motion.li>
	);
}

export default NavButton
