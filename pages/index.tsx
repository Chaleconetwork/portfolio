import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quis, sint quam similique aut delectus rem corporis ad fugit, distinctio iste laboriosam esse, cum ut? Cum error aspernatur natus pariatur culpa sint perspiciatis quo, expedita a eaque libero voluptatibus perferendis, ea voluptas magni laboriosam sequi dignissimos ipsum sed veritatis qui maxime. Dolor quae incidunt, quasi nihil soluta libero animi praesentium expedita accusamus tempora corporis recusandae dolorum officia totam pariatur facilis eius in voluptatem. Itaque debitis dicta perferendis molestias tenetur doloremque quidem at? Exercitationem totam quaerat temporibus, eaque eligendi itaque nostrum tempore illo sint voluptatibus accusantium nulla maiores officiis deserunt cupiditate.
                </p>
            </div>
            <div className={styles.seccion2}>
                
            </div>
        </div>
    )
}
