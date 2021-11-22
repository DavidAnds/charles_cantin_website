import React from 'react'
import styles from './Title.module.css'

export default function Title(props) {
    return (
        <div className={styles.title}>
            <h1 className={styles.title__item}>{props.children}</h1>
        </div>
    )
}
