import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Skills from '../components/Skills'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>
                Hola, <br />
                Soy Chaleco, <br />
                Programador .NET
            </h1>
            <div className={styles.seccion1}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam tempore fugiat similique corrupti culpa dolor facilis sunt eius consequuntur voluptate vitae numquam officia, animi, hic tenetur voluptas, ratione quia.
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
                        <Skills name='Inglés' percent={60} />
                        <div className={styles.menu}>
                            <div className={styles.barra3}></div>
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
        </div>
    )
}
