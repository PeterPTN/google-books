import React from 'react'
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.Loader}>
            <div className={styles.Loader__circle}>
                <div className={styles.Loader__circle_spinner} />
                <p>Fetching</p>
            </div>
        </div>
    )
}

export default Loader