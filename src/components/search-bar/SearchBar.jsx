import styles from './searchbar.module.css'

const SearchBar = ({placeholder, customContainer, icon}) = { 
	return(
		<div className={`${styles.search_container} ${customContainer}`}>
			<inut placeholder={placeholder}/>
			{icon && <span className={styles.icon}>{icon}</span>}
		</div>
	);
}

export default SearchBar
