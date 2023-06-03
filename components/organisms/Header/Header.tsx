"use client"

import styles from './Header.module.scss'
import HyperLink from '@/components/atoms/HyperLink/HyperLink'
import Home from '@/components/Icons/pages/Home/Home'
import About from '@/components/Icons/pages/About/About'
import Work from '@/components/Icons/pages/Work/Work'

import { useSelectedLayoutSegment } from 'next/navigation'

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
                        <HyperLink
                            path={link.path === null ? '' : `/${link.path}`}
                            active={activeSegment === link.path} 
                        >{link.children}</HyperLink>
                    </li>
                )}
            </ul>
        </header>
    )
}