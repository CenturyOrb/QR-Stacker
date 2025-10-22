import styles from './searchbar.module.css'

const SearchBar = ({placeholder = 'Search', customContainer = '', icon = false}) => { 
	return(
		<div className={`${styles.search_container} ${customContainer}`}>
			<input placeholder={placeholder}/>
			{icon && <span className={styles.icon}>{icon}</span>}
		</div>
	);
}

export default SearchBar
