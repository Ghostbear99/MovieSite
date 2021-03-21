import React, { useEffect, useState } from 'react'
import styles from '/home/chris/Documents/Coding Projects/movie-site/src/Components/myStyle.module.css';
import Movie from '/home/chris/Documents/Coding Projects/movie-site/src/Components/movie.js';
//  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=07aafd6ca068473405dc6ec6dbd9bf08&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_original_language=en';

const recentMovies = () => {
    return(
        <div>
            <h2 className={styles.divText}>Recent Movies</h2>
            <div>
                {putDiv()}
            </div>
        </div>
    )
}

const putDiv = () => {
    const movies = ["One", "Two", "Three"];
        return(    
            <div>
                {movies.map((key,value) => {
                    return <Movie movieTitle={value}></Movie>
                })}
            </div>
        )
}

export default recentMovies;