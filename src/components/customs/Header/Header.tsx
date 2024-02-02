"use client"

import styles from './Header.module.scss'
import BurgerButton from '@/components/ui/BurgerButton/BurgerButton'
import { routeLink } from '@/types/types'
import Link from './Link/Link'

import ArrowLeft from '@/components/Icons/ArrowLeft/ArrowLeft'
import { useState } from 'react'

type HeaderProps = {
    routes : routeLink[],
    admin: boolean
}

const Header = ({ routes, admin } :  HeaderProps) => {

    const [smallMenu, setSmallMenu] = useState<boolean>(!admin)    

    const handleClick = () => {
        setSmallMenu(!smallMenu)
    }

    
    return (
        <header className={`${styles.header} ${smallMenu ? styles.smaller : ""}`}>
            {admin && (
                <BurgerButton 
                    className={styles.burger}
                    onClick={handleClick}
                    cross={!smallMenu}
                />
            )}
            <nav>
                {admin && (
                    <Link 
                        path={null}
                        svg={<ArrowLeft />}
                        title={"get back to client side"}
                        isSmaller={smallMenu}
                    />  
                )}
                <ul>
                    {routes.map((route, index) => 
                        <li key={index}>
                            <Link 
                                path={route.path}
                                svg={route.children}
                                title={route.name}
                                isSmaller={smallMenu}
                            />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

Header.displayName = 'Header';

export default Header;
