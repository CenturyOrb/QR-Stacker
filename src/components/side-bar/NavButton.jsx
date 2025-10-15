import styles from './navbutton.module.css'

const NavButton = ({data}) => { 
	const highlight = data.selected
		? styles.highlight
		: null;

	return(
		<li className={`${styles.nav_button} ${highlight}`}>{data.content}</li>	
	);
}

export default NavButton
