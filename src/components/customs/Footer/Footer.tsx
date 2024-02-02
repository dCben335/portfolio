import Link from 'next/link'
import styles from './Footer.module.scss'
import GitHub from '@/components/Icons/Socials/GitHub/GitHub'
import LinkedIn from '@/components/Icons/Socials/LinkedIn/LinkedIn'


const Footer = ({}) => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={styles.wrapper}>
                <nav>
                    <strong>mes infos</strong>
                    <ul>
                        <li><Link href={"tel:0603468320"} className={styles.link} target='_blank'>06 03 46 83 20</Link></li>
                        <li><Link href={"mailto:benoit.cabocel.335@gmail.com"} className={styles.link} target='_blank'>benoit.cabocel.335@gmail.com</Link></li>
                        <li><Link href={"https://www.google.fr/maps/place/21000+Dijon"} className={styles.link} target='_blank'>France, 21000 Dijon</Link></li>
                    </ul>
                </nav>
                <nav>
                    <strong>prestations</strong>
                    <ul>
                        <li><Link href={"/"} className={styles.link}>accueil</Link></li>
                        <li><Link href={"/about"} className={styles.link}>a propos de moi</Link></li>
                        <li><Link href={"/my-work"} className={styles.link}>mes projets</Link></li>
                        <li><Link href={"/policies/conditions-generales-utilisation"} className={styles.link}>conditions générales d&apos;utilisation</Link></li>
                        <li><Link href={"/policies/politique-de-confidentialite"} className={styles.link}>politique de confidentialité</Link></li>
                    </ul>
                </nav>
                
                <nav>
                    <strong>Retrouvez-moi</strong>
                    <ul className={styles.socials}>
                        <li><Link href={"https://github.com/dCben335"} className={styles.link} target='_blank' aria-label={"mon Github"}><GitHub /></Link></li>
                        <li><Link href={"https://www.linkedin.com/in/benoit-cabocel-748aaa22b/"} className={styles.link} target='_blank' aria-label={"mon LinkedIn"}><LinkedIn /></Link></li>
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

Footer.displayName = 'Footer';

export default Footer;