
import { CSSProperties, ReactElement } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    renderAs: "link"
    href: string
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    renderAs?: "button" 
}

type Props = (LinkProps | ButtonProps) & {
    active?: boolean
    activeColor?: CSSProperties
}

export default function Button({ children, className, active, activeColor, ...props} : Props ) {    
    
    if (props.renderAs === 'link') {
        const { renderAs, ...newProps } = props

        return (
            <Link {...newProps}
                style={active && activeColor ? activeColor : {}}
                className={`${styles.btn} ${active ? styles.active : '' } ${className}`}     
            >
                {children}
            </Link>
        )
    }

    return (   
        <button {...props}
            style={active && activeColor ? activeColor : {}}
            className={`${styles.btn} ${active ? styles.active : ''} ${className}`} 
        >
            {children}
        </button>
    )
}



