import styles from './navbutton.module.css'
import { motion } from 'motion/react'

const NavButton = ({data, changeSelected}) => { 
	const highlight = data.selected
		? styles.highlight
		: null;

	return(
		<motion.li 
			className={`${styles.nav_button} ${highlight}`}
			onClick={changeSelected}
			whileHover={{ scale: 1.02 }}
  			whileTap={{ scale: 0.95 }}
		>
			{data.icon && <data.icon size={24} style={{ marginRight: '8px' }} />}
			<span style={{verticalAlign: '0'}}>{data.content}</span>
		</motion.li>	
	);
}

export default NavButton
