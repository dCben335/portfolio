
import { CSSProperties, ReactElement } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'
import { accentsTidy } from '@/libs/utils'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string,
    blank?: boolean,
    active?: boolean, 
    activeColor?: CSSProperties

}
export default function Button({ children, className, href, blank, active, activeColor, ...props} : ButtonProps & (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>) ) {
    if (href) {
        return (
            <Link 
                href={accentsTidy(href)}
                style={active && activeColor ? activeColor : {}}
                className={`${styles.btn} ${active ? styles.active : '' } ${className}`}
                target={blank ? '_blank' : '_self'}
            >
                {children}
            </Link>
        )
    }
    return (   
        <button 
            style={active && activeColor ? activeColor : {}}
            className={`${styles.btn} ${active ? styles.active : ''} ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}



