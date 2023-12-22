"use client"
import Button from '@/components/ui/Button/Button'
import styles from './Link.module.scss'

import { useSelectedLayoutSegment } from 'next/navigation'


type HeaderLinkProps = {
    svg: React.ReactNode,
    path: string | null,
    title?: string
    smaller: boolean
}

export default function HeaderLink({ svg, path, title, smaller }: HeaderLinkProps) {
    const activeSegment = useSelectedLayoutSegment();

    return (
        <Button
            classes={`${styles.headerLink} ${smaller ? styles.smaller : ''}`}
            path={path === null ? '/' : `/${path}`}
            active={activeSegment === path}
            ariaLabel={`retourner à la page ${path}`} 
        >
            {svg}
            {title && <span>{title}</span>}
        </Button>
    )
}