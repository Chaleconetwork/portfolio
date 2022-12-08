import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navegacion}>
            <ul className={styles.nav}>
                <Link href='/'>
                    <li>Inicio</li>
                </Link>
                <Link href='/'>
                    <li>Proyectos</li>
                </Link>
                <Link href='/'>
                    <li>Habilidades</li>
                </Link>
                <Link href='/'>
                    <li>Contactos</li>
                </Link>
            </ul>
            <i className="bi bi-list"></i>
        </nav>
    )
}
