import { Img, TransformPorperties } from "@/utils/types";
import { accentsTidy } from "@/utils/functions";
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
    const [cardMouseHoverStyle, setCardMouseHoverStyle] = useState<CSSProperties>({}) 
    const [cardMouseHoverTitleStyle, setCardMouseHoverTitleStyle] = useState<CSSProperties>({}) 
      
    const mouseOnProject = (event: MouseEvent) => {
        if (projectCard.current) {
            const projectCardHeight = projectCard.current.clientHeight;
            const projectCardWidth = projectCard.current.clientWidth;
            const mouseX = event.pageX - projectCard.current.offsetLeft;
            const mouseY = event.pageY - projectCard.current.offsetTop;

            const mouseXFromCenter = (mouseX - projectCardWidth  / 2)
            const mouseYFromCenter = (mouseY  - projectCardHeight / 2)
            const projectCardRotateX = (-transformPorperties.maxAngle * mouseYFromCenter) / (projectCardHeight / 2);
            const projectCardRotateY = (transformPorperties.maxAngle * mouseXFromCenter) / (projectCardWidth / 2);
            
            const distance =  Math.sqrt( mouseXFromCenter ** 2 + mouseYFromCenter ** 2)

            const baseScale = 1
            const maxScaling = 1.5;
            const scalingFactor = 1.25;
            
            const adjustedScaling = maxScaling - ((distance / 1000) * scalingFactor)
            const scale = adjustedScaling >= baseScale ? adjustedScaling : baseScale

            setCardMouseHoverStyle({transform: `
                perspective(${transformPorperties.perspective}px) 
                scale(${transformPorperties.scale})
                rotateX(${projectCardRotateX}deg)
                rotateY(${projectCardRotateY}deg)`,

                "--data-light-x" : ` ${mouseX}px`,
                "--data-light-y" : ` ${mouseY}px`,
            } as React.CSSProperties)

            setCardMouseHoverTitleStyle({
                transform: `rotate(${(projectCardRotateX + projectCardRotateY) / -2}deg)
                translateY(${(mouseY  - projectCardHeight / 2) * 0.05}px)
                translateX(${(mouseX - projectCardWidth / 2) * 0.05}px)
                scale(${scale})`,
            })
        }
    }

    const mouseLeaveProject = () =>  {
        setCardMouseHoverStyle({...cardMouseHoverStyle, transform: `perspective(${transformPorperties.perspective}px)`})
    }

    return (
        <article className={styles.card} ref={projectCard}
            onMouseMove={(e) =>  mouseOnProject(e)}
            onMouseLeave={() => mouseLeaveProject()} 
            style={{...cardMouseHoverStyle}}
            
            >
            <Link href={accentsTidy(path)} className={styles.link}>
                <img src={image.path} alt={image.alt} />
                <h3 >
                    <span style={{...cardMouseHoverTitleStyle}}>{title}</span>
                </h3>
            </Link> 
        </article>
    )
}