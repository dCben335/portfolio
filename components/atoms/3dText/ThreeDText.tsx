import styles from "./ThreeDText.module.css"

export default function ThreeDText({
    text,
    smaller
} : {
    text: string,
    smaller: boolean
}) {
    return (
        <span className={`${styles.threeDText} ${smaller ? styles.smaller : ''}`}>
            {text}
        </span>
    )
}