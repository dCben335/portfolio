import { Img } from "@/types/project";
import Link from "next/link";
import styles from './ProjectCard.module.css'

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
            <Link href={path} className={styles.link}>
                <img src={image.path} alt={image.alt} />
                <h3>{title}</h3>
            </Link>
        </article>
    )
}