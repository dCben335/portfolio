"use client"

import styles from './PortalHeader.module.scss'
import BurgerButton from '@/components/atoms/BurgerButton/BurgerButton'
import { routeLink } from '@/libs/types'

import ArrowLeft from '@/components/Icons/ArrowLeft/ArrowLeft'
import { useSelectedLayoutSegment } from 'next/navigation'
import Button from '@/components/atoms/Button/Button'
import { useEffect, useState } from 'react'

export default function PortalHeader({ 
    routes 
} : {
    routes : routeLink[]
}) {

    const [smallMenu, setSmallMenu] = useState<boolean>(false)
    
    const activeSegment = useSelectedLayoutSegment()

    const handleClick:Function = () => {
        setSmallMenu(!smallMenu)
    }
        useEffect(() => {
            console.log(activeSegment)
        }, [activeSegment])
    
    return (
        <header className={`${styles.header} ${smallMenu ? styles.smaller : ""}`}>
            <BurgerButton 
                classes={[styles.burger]}
                clicked={handleClick}
                cross={!smallMenu}
            />
            <nav>
                <Button
                    path="/"
                    ariaLabel={`retourner à la page d'accueil`} 
                ><ArrowLeft /><span>get back to client side</span></Button>
                <ul>
                    {routes.map((route, index) => 
                        <li key={index}>
                            <Button
                                path={route.path === "" ? '/' : `/${route.path}`}
                                active={activeSegment === route.path}
                                ariaLabel={`retourner à la page ${route.path}`} 
                            >
                                {route.children} 
                                <span>{route.name}</span>
                            </Button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}