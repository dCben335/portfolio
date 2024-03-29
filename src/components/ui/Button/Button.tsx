
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
}

const Button = ({ children, className, active, ...props} : Props ) => {  
    const classes = `${styles.btn} ${active ? styles.active : ''} ${className ? className : ''}`
    
    if (props.renderAs === 'link') {
        const { renderAs, ...newProps } = props

        return (
            <Link {...newProps} className={classes}>
                {children}
            </Link>
        )
    }

    return (    
        <button {...props} className={classes}>
            {children}
        </button>
    )
}

Button.displayName = 'Button';

export default Button;



