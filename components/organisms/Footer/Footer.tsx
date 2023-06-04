import Link from 'next/link'
import styles from './Footer.module.scss'
import GitHub from '@/components/Icons/Socials/GitHub/GitHub'
import LinkedIn from '@/components/Icons/Socials/LinkedIn/LinkedIn'


export default function Footer({
    classes
} : {
    classes: Array<any>
}) {
    return (
        <footer className={`${styles.footer} ${classes ? [...classes] : ''}`}>
            <div className={styles.wrapper}>
                <nav>
                    <strong>my infos</strong>
                    <ul>
                        <li><Link href={"tel:0603468320"} className={styles.link} target='_blank'>06 03 46 83 20</Link></li>
                        <li><Link href={"mailto:benoit.cabocel.335@gmail.com"} className={styles.link} target='_blank'>benoit.cabocel.335@gmail.com</Link></li>
                        <li><Link href={"https://www.google.fr/maps/place/21000+Dijon"} className={styles.link} target='_blank'>France, 21000 Dijon</Link></li>
                    </ul>
                </nav>
                <nav>
                    <strong>prestations</strong>
                    <ul>
                        <li><Link href={"/"} className={styles.link}>home</Link></li>
                        <li><Link href={"/about"} className={styles.link}>about me</Link></li>
                        <li><Link href={"/my-work"} className={styles.link}>my work</Link></li>
                        <li><Link href={"/conditions-generales-utilisation"} className={styles.link}>conditions générales d'utilisation</Link></li>
                        <li><Link href={"/politique-de-confidentialite"} className={styles.link}>politique de confidentialité</Link></li>
                    </ul>
                </nav>
                
                <nav>
                    <strong>find me</strong>
                    <ul className={styles.socials}>
                        <li><Link href={"https://github.com/dCben335"} className={styles.link} target='_blank'><GitHub /></Link></li>
                        <li><Link href={"https://www.linkedin.com/in/benoit-cabocel-748aaa22b/"} className={styles.link} target='_blank'><LinkedIn /></Link></li>
                    </ul>                    
                </nav>
            </div>
            <div>
                <p>Benoît CABOCEL</p>
                <p>Copyright © 2023. All rights reserved</p>
                <p>Made with Next.js</p>
            </div>
        </footer>
    )
}