"use client"
import Button from '@/components/ui/Button/Button'
import styles from './Link.module.scss'

import { useSelectedLayoutSegment } from 'next/navigation'


type HeaderLinkProps = {
    svg: React.ReactNode,
    path: string | null,
    title?: string
    isSmaller: boolean
}

const HeaderLink = ({ svg, path, title, isSmaller }: HeaderLinkProps) => {
    const activeSegment = useSelectedLayoutSegment();

    return (
        <Button
            renderAs="link"
            className={`${styles.headerLink} ${isSmaller ? styles.smaller : ''}`}
            href={path === null ? '/' : `/${path}`}
            active={activeSegment === path}
        >
            {svg}
            {title && <span>{title}</span>}
        </Button>
    )
}

HeaderLink.displayName = 'Header_Link';

export default HeaderLink;