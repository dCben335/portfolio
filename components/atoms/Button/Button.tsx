
import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from 'react'
import styles from './Button.module.scss'
import { types } from 'util'

export default function Button({
    children, 
    clicked,
    active,
    activeColor,
    classes,
    type,
} : {
    children?: string, 
    clicked?: Function,
    active?: boolean, 
    activeColor?: CSSProperties
    classes?: string
    type?: "button" | "reset" | "submit" | undefined
}) {

    return (
       <button 
            style={active && activeColor ? activeColor : {}}
            className={`${styles.btn} ${active ? styles.active : ''} ${classes ? classes : ""}`} 
            onClick={() => clicked && clicked()}
            type={type ? type : 'button'}

        >{ children }</button>
    )
}