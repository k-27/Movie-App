import React from 'react'
import styles from './MovieCard.module.css'


function FallBackCard() {
  return (
    <div className={styles.poster_card}>
      <div className={styles.imagePlaceholder}>
      </div>
      <div className={styles.imagePlaceholder}>
        <h6 className={styles.title} style={{color: "white"}}>{"loading"}</h6>
      </div>
    </div>
  )
}

export default FallBackCard