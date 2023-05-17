import { Img, accentsTidy, TransformPorperties } from "@/types/project";
import Link from "next/link";
import styles from './ProjectCard.module.scss'
import { CSSProperties, useRef, useState, MouseEvent } from "react";

export default function ProjectCard({
    image,
    title,
    path,
    transformPorperties = {
        perspective: 1000,
        maxAngle: 3.5,
        scale: 1.01,
    }
}: {
    image: Img
    title: string
    path: string
    transformPorperties?: TransformPorperties
}) {

    const projectCard = useRef<HTMLElement | null>(null)
    const [transform, setTransform] = useState<CSSProperties>({}) 
      
    const mouseOnProject = (event: MouseEvent) => {
        if (projectCard.current) {
            const projectCardHeight = projectCard.current.clientHeight;
            const projectCardWidth = projectCard.current.clientWidth;
            const mouseX = event.pageX - (projectCard.current.offsetLeft + (projectCardWidth / 2));
            const mouseY = event.pageY - (projectCard.current.offsetTop + (projectCardHeight / 2));
            const projectCardRotateX = (-transformPorperties.maxAngle * mouseY) / (projectCardHeight / 2);
            const projectCardRotateY = (transformPorperties.maxAngle * mouseX) / (projectCardWidth / 2);
            
            setTransform({transform: 
                `perspective(${transformPorperties.perspective}px) rotateX(${projectCardRotateX}deg) rotateY(${projectCardRotateY}deg) scale3d(${transformPorperties.scale}, ${transformPorperties.scale}, ${transformPorperties.scale})`
            })
        }
    }
    
    const mouseLeaveProject = () =>  {
        setTransform({transform: `perspective(${transformPorperties.perspective}px)`})
    }

    return (
        <article className={styles.card} ref={projectCard}
            onMouseMove={(e) => mouseOnProject(e)}
            onMouseLeave={() => mouseLeaveProject()} 
            style={{...transform}}

            ><Link href={accentsTidy(path)} className={styles.link}>
                <img src={image.path} alt={image.alt} />
                <h3>{title}</h3>
            </Link> 
        </article>
    )
}