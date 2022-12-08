import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Skills from '../components/Skills'
import Link from 'next/link'
import { Fragment } from 'react'
import Footer from '../components/Footer'
import { motion, useTransform, useScroll } from 'framer-motion'


export default function Home() {

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, -2]);
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <Fragment>
            <Head>
                <title>Chaleco - Portafolio</title>
            </Head>
            <div className={styles.container}>
                <motion.h1
                    initial={{ scale: -1 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }} style={{ scale }}>
                    Hola, <br />
                    Soy Chaleco, <br />
                    Programador<span className={styles.letraColor}> .NET</span>
                </motion.h1>
                <motion.div className={styles.seccion1} style={{ scale }}>
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
                </motion.div>
                <div id='habilidades'></div>
                <br />
                <br />
                <motion.div className={styles.seccion2}>
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
                </motion.div>
                <div id='proyectos'></div>
                <div className={styles.seccion3}>
                    <h2>Proyectos</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque, esse animi voluptatem adipisci cum similique doloremque quibusdam consectetur officiis repellat, est aut sapiente ad ipsum soluta recusandae quaerat commodi.
                    </p>
                </div>
                <div id='contactos'></div>
                <div className={styles.seccion4}>
                    <h2>Contactos</h2>
                    <motion.div className={styles.contactos}
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}>
                        <Link href='https://github.com/Chaleconetwork' target='_blank'>
                            <i className="bi bi-github"></i>
                        </Link>
                        <Link href='https://www.linkedin.com/in/chaleco/' target='_blank'>
                            <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link href='https://github.com/Chaleconetwork' target='_blank'>
                            <i className="bi bi-instagram"></i>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
