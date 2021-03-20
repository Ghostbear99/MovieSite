import React from 'react';
import styles from '/home/chris/Documents/Coding Projects/movie-site/src/Components/myStyle.module.css';

const header = () => {
    return (
        <div className={styles.header}>
            <input type='search' placeholder='Search for movies' className={styles.headerSearch}></input>
        </div>
    )
}

export default header;