import styles from "./ThreeDText.module.scss"

type ThreeDTextProps = {
    text: string,
    smaller: boolean
}

export default function ThreeDText({ text, smaller } : ThreeDTextProps) {
    return (
        <strong className={`${styles.threeDText} ${smaller ? styles.smaller : ''}`}>
            {text}
        </strong>
    )
}