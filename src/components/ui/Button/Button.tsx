
import { CSSProperties, ReactElement } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'
import { accentsTidy } from '@/libs/functions'

type ButtonProps = { 
    children?: any,
    path?: string,
    clicked?: () => any
    active?: boolean, 
    activeColor?: CSSProperties
    classes?: string
    type?: "button" | "reset" | "submit" | undefined
    blank?: boolean
    ariaLabel?: string
}

export default function Button({
    children, 
    path,
    clicked,
    active,
    activeColor,
    classes,
    type,
    blank,
    ariaLabel,
} : ButtonProps) {

    return (
        <>
        {path ? 
            <Link 
                href={accentsTidy(path)}
                className={`${styles.btn} ${active ? styles.active : '' } ${classes ? classes : ""}`}
                target={blank ? '_blank' : ''}
                aria-label={ariaLabel}
            >
                {children}
            </Link>
            :
            <button 
                style={active && activeColor ? activeColor : {}}
                className={`${styles.btn} ${active ? styles.active : ''} ${classes ? classes : ""}`} 
                onClick={() => clicked && clicked()}
                type={type ? type : 'button'}
                aria-label={ariaLabel}
            >
                {children}
            </button>
            }
        </>

    )
}