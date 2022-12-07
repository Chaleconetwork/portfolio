import Image from 'next/image'
import React from 'react'
import styles from '../styles/Sidebar.module.css'
import logo from '../static/images/vista.jpg'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <h3>chaleco</h3>
            </div>

            <nav className={styles.nav}>
                <div className={styles.navTitle}>
                    Navegación
                </div>

                <ul>
                    <Link href="/">
                        <li className={styles.navItem}>
                            <span>Inicio</span>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={styles.navItem}>
                            <span>Proyectos</span>
                        </li>
                    </Link>
                    <Link href="/habilidades">
                        <li className={styles.navItem}>
                            <span>Habilidades</span>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={styles.navItem}>
                            <span>Estudios</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
