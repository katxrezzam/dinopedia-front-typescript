import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {Dispatch} from "react";
import styles from './SearchInput.module.scss'
type Props = {
  query: string,
  setQuery: Dispatch<string>
}
const SearchInput = ( { query, setQuery } : Props ) => {
  return(
    <>
      <input
        type='text'
        className={styles.search_input}
        placeholder={'Buscar'}
        value={query}
        onChange={ e => setQuery(e.target.value)}
      />
      { query &&
        <span className={styles.x_mark} onClick={ () => setQuery('')}>
          <FontAwesomeIcon icon={faXmark}/>
        </span>
      }
    </>
  )
}
export default SearchInput