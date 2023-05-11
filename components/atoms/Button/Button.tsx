
import { CSSProperties } from 'react'
import styles from './Button.module.css'

export default function({
    text, 
    clicked,
    active,
    activeColor
} : {
    text: String, 
    clicked: Function,
    active: Boolean,
    activeColor: CSSProperties
}) {

    return (
       <button 
            style={active && activeColor ? activeColor : {}}
            className={`${styles.btn} ${active ? styles.active : ''}`} 
            onClick={() => clicked && clicked()}
        >{ text }</button>
    )
}