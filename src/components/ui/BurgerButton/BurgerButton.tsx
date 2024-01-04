import styles from "./BurgerButton.module.scss"

interface BurgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    cross: boolean,
}

export default function BurgerButton({ cross, className, ...props }:  BurgerButtonProps) { 

    return (
        <button 
            className={`${styles["burger-btn"]} ${cross ? styles.cross : ""} ${className}`}
            title="burger-button" 
            {...props}
            >
            <span title="burger-menu-bar"></span>
            <span title="burger-menu-bar"></span>
            <span title="burger-menu-bar"></span>
        </button>
    )
}