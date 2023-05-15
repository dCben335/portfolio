
import { CSSProperties } from 'react'
import styles from './Button.module.scss'

export default function Button({
    text, 
    clicked,
    active,
    activeColor
} : {
    // text: String, 
    text: string, 
    clicked: Function,
    active?: boolean, 
    activeColor?: CSSProperties
}) {

    return (
       <button 
            style={active && activeColor ? activeColor : {}}
            className={`${styles.btn} ${active ? styles.active : ''}`} 
            onClick={() => clicked && clicked()}
        >{ text }</button>
    )
}