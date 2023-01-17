import styles from './SearchResult.module.scss'
type Props = { result: string }
const SearchResult = ( {result} : Props ) => {
  return(
    <div className={styles.search_result}>
      {result}
    </div>
  )
}
export default SearchResult