import { CSSProperties } from "react";
import styles from './EvaluationSquare.module.scss'

export default function EvaluationSquare({
    color,
    active,
    text
} : {
    color: CSSProperties,
    active: boolean,
    text : string
}) {
    return (
        <span 
            className={`${styles.square} ${active ? styles.active : ''}`} 
            style={{...color}}
            data-text={text}>    
        </span>
    )
}