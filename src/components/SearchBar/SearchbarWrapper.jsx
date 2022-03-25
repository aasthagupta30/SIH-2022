import styles from './SearchBar.module.css';

const SearchbarWrapper = ({children}) => {
	return (
		<div id="searchbar_content" className={styles.content}>
			{children}
			
		</div>
	)
}

export default SearchbarWrapper
