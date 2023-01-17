import {Dispatch, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import SearchResult from "./components/search-result/SearchResult";
import SearchInput from "./components/search-input/SearchInput";
import styles from './Header.module.scss'
type Props = {
  toggle: boolean,
}
const Header = ( {toggle} : Props) => {

  const [query, setQuery] = useState('')

  return(
    <header className={ toggle ? styles.header : `${styles.header} ${styles.close}` }>
      <div className={styles.search_box}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faSearch}/>
        </div>
        <SearchInput query={query} setQuery={setQuery}/>
        { query && <SearchResult result={query}/> }
      </div>
    </header>
  )
}
export default Header