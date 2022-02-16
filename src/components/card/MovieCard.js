import React from 'react'
import styles from './MovieCard.module.css'

function MovieCard(props) {
  return (
    <div className={styles.poster_card}>
      <div className={styles.image}>
        <img
            className={styles.image}
            src={props.poster}
            alt='Movie poster'
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; 
              currentTarget.src="placeholder_for_missing_posters.png";
            }}
        />
      </div>
      <div className={styles.title_box}>
        <h6 className={styles.title} style={{color: "white"}}>{props.title}</h6>
      </div>
    </div>
  )
}

export default MovieCard