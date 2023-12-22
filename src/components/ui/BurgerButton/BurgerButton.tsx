"use client"

import styles from "./BurgerButton.module.scss"

type BurgerButtonProps = {
    clicked?: Function,
    cross: boolean,
    classes?: string[]
}


export default function BurgerButton({ clicked, cross, classes }:  BurgerButtonProps) { 

    return (
        <button className={`${styles["burger-btn"]} ${cross ? styles.cross : ""}  ${classes ? [...classes] : ''}`}
            title="burger-button" 
            onClick={() => clicked && clicked()}
            >
            <span title="burger-menu-bar"></span>
            <span title="burger-menu-bar"></span>
            <span title="burger-menu-bar"></span>
        </button>
    )
}