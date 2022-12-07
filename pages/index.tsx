import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
       <div className={styles.container}>
            <div className={styles.content}>
                <h1>
                    Hola
                </h1>
                <span>
                    Desarrollador Fullstack / Ingeniero Informático
                </span>
                <div>
                    <button className={styles.btnContactar}>Contactar</button>
                </div>
            </div>
       </div>
    )
}
