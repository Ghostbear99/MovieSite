import React from 'react';
import styles from '/home/chris/Documents/Coding Projects/movie-site/src/Components/myStyle.module.css';

const movie = (props) => {
    return(
       <div className={styles.recentMovieDiv} onClick={() => {alert("Clicked")}}>
           <img className={styles.recentMoveImg}></img>
           <h3>{props.movieTitle}</h3>
       </div>
    )
}

export default movie;