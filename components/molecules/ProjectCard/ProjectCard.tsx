import { Img, accentsTidy } from "@/types/project";
import Link from "next/link";
import styles from './ProjectCard.module.scss'

export default function ProjectCard({
    image,
    title,
    path,
}: {
    image: Img
    title: string
    path: string
}) {



    return (
        <article className={styles.card}>
            <Link href={accentsTidy(path)} className={styles.link}>
                <img src={image.path} alt={image.alt} />
                <h3>{title}</h3>
            </Link>
        </article>
    )
}