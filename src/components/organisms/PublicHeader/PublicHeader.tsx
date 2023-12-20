"use client"

import styles from './PublicHeader.module.scss'
import { routeLink } from '@/libs/types'

import { useSelectedLayoutSegment } from 'next/navigation'
import Button from '@/components/atoms/Button/Button'

export default function PublicHeader({ 
    routes 
} : {
    routes : routeLink[]
}) {

    const activeSegment = useSelectedLayoutSegment()

    return (
        <header className={styles.header}>
            <ul>
                {routes.map((route, index) => 
                    <li key={index}>
                        <Button
                            path={route.path === null ? '/' : `/${route.path}`}
                            active={activeSegment === route.path}
                            ariaLabel={`retourner à la page ${route.path}`} 
                        >{route.children}</Button>
                    </li>
                )}
            </ul>
        </header>
    )
}