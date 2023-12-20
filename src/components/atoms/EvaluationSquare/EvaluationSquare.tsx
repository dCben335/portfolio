import { CSSProperties } from "react";
import styles from './EvaluationSquare.module.scss'


type EvaluationSquareProps = {
    color: CSSProperties,
    active: boolean,
    text : string

}

export default function EvaluationSquare({ color, active, text } : EvaluationSquareProps) {
    return (
        <span 
            className={`${styles.square} ${active ? styles.active : ''}`} 
            style={{...color}}
            data-text={text}>    
        </span>
    )
}