import React from 'react'
import styles from '/home/chris/Documents/Coding Projects/movie-site/src/Components/myStyle.module.css';
import Movie from '/home/chris/Documents/Coding Projects/movie-site/src/Components/movie.js';

const recentMovies = () => {
    return(
        <div>
            <h2 className={styles.divText}>Recent Movies</h2>
            <div>
                {putDiv(1)}
                {putDiv(2)}
                {putDiv(3)}
                {putDiv(4)}
                {putDiv(5)}
            </div>
        </div>
    )
}

const putDiv = (i) => {
    return(
        <div>
            <Movie movieTitle={i}></Movie>
        </div>
    )
}

export default recentMovies;