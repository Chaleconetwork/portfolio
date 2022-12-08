import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Skills from '../components/Skills'
import Link from 'next/link'
import { Fragment } from 'react'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <Fragment>
            <div className={styles.container}>
                <h1>
                    Hola, <br />
                    Soy Chaleco, <br />
                    <span className={styles.letraGris}>Programador .NET</span>
                </h1>
                <div className={styles.seccion1}>
                    <p>
                        Programador desde 2019,
                    </p>
                    <br />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quidem ducimus adipisci quaerat qui eum accusamus temporibus. Velit nulla iure quo esse natus eaque facilis inventore, quos facere ullam placeat?
                    </p>
                    <div className={styles.btnContainer}>
                        <button className={styles.btnCv}>Ver CV</button>
                    </div>
                </div>
                <div className={styles.seccion2}>
                    <h2>Habilidades y conocimientos</h2>
                    <div>
                        <div>
                            <Skills name='Frontend | React js' percent={70} />
                            <div className={styles.menu}>
                                <div className={styles.barra1}></div>
                            </div>
                        </div>
                        <div>
                            <Skills name='Backend | C# .NET' percent={60} />
                            <div className={styles.menu}>
                                <div className={styles.barra2}></div>
                            </div>
                        </div>
                        <div>
                            <Skills name='Python' percent={80} />
                            <div className={styles.menu}>
                                <div className={styles.barra3}></div>
                            </div>
                        </div>
                        <div>
                            <Skills name='SQL' percent={70} />
                            <div className={styles.menu}>
                                <div className={styles.barra4}></div>
                            </div>
                        </div>
                        <div>
                            <Skills name='Inglés' percent={60} />
                            <div className={styles.menu}>
                                <div className={styles.barra5}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.seccion3}>
                    <h2>Proyectos</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque, esse animi voluptatem adipisci cum similique doloremque quibusdam consectetur officiis repellat, est aut sapiente ad ipsum soluta recusandae quaerat commodi.
                    </p>
                </div>
                <div className={styles.seccion4}>
                    <h2>Contactos</h2>
                    <div className={styles.contactos}>
                        <Link href='https://github.com/Chaleconetwork' target='_blank'>
                            <i className="bi bi-github"></i>
                        </Link>
                        <Link href='https://www.linkedin.com/in/chaleco/' target='_blank'>
                            <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link href='https://github.com/Chaleconetwork' target='_blank'>
                            <i className="bi bi-instagram"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
