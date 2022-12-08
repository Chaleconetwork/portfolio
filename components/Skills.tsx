import React, { Fragment } from 'react'
import styles from '../styles/Skills.module.css'

type Skills = {
    name: string
    percent: number
}

export default function Skills(props: Skills) {
    return (
        <Fragment>
            <div className={styles.detalles}>
                <span>{props.name}</span>
                <span>{props.percent}%</span>
            </div>
        </Fragment>
    )
}
