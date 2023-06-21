"use client"

import styles from './Header.module.scss'
import Home from '@/components/Icons/pages/Home/Home'
import About from '@/components/Icons/pages/About/About'
import Work from '@/components/Icons/pages/Work/Work'

import { useSelectedLayoutSegment } from 'next/navigation'
import Button from '@/components/atoms/Button/Button'

export default function Header () {

    const activeSegment = useSelectedLayoutSegment()

    const links = [
        {
            path: null,
            children: <Home />
        }, 
        {
            path: "about",
            children: <About />
        }, 
        {
            path: "my-work",
            children: <Work />
        }, 
    ]



    return (
        <header className={styles.header}>
            <ul>
                {links.map((link, index) => 
                    <li key={index}>
                        <Button
                            path={link.path === null ? '/' : `/${link.path}`}
                            active={activeSegment === link.path}
                            ariaLabel={`retourner à la page ${link.path}`} 
                        >{link.children}</Button>
                    </li>
                )}
            </ul>
        </header>
    )
}