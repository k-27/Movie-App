import React, {useState} from 'react'
import styles from './Header.module.css'
import {Row,Col} from 'react-bootstrap';
import {setSearch,clearSearch } from '../../redux/actions/movieListing';
import { useDispatch } from "react-redux";

function Header() {

const [search, setSearchFlag] = useState(false)
const [keyword, setKeyword] = useState('')
const dispatch = useDispatch();

function handleSearch(){
  dispatch(setSearch(keyword));
}
function handleCancelSearch(){
  dispatch(clearSearch());
  setSearchFlag(false);
  setKeyword('')

}

  return (
    <Row className={styles.header}>
      <Col className={styles.header_back_button} xs={1} sm={1} md={1}>
        <img onClick={handleCancelSearch} className={styles.header_back_button_img} src="Back.png" alt="Go Back" width="25" height="25"/>
      </Col>
      <Col xs={10} sm={10} md={10}>
        {search ? (
          <input className={styles.input} type='text' value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder='Search Movie'/>
        ) : (
          <h2  style={{color: 'white'}}>Romantic Comedy </h2>
        )}
      </Col>
      <Col className={styles.header_back_button} xs={1} sm={1} md={1}>
        {search ? (
          <img className={styles.header_search_button_img} onClick={handleSearch}  src="search.png" alt="Go Back" width="25" height="25"/> 
        ) : (
          <img className={styles.header_search_button_img} onClick={()=> setSearchFlag(true)}  src="search.png" alt="Go Back" width="25" height="25"/>
        )}
      </Col>
    </Row>
  )
}

export default Header

