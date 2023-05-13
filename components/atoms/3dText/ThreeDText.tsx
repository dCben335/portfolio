import styles from "./ThreeDText.module.css"

export default function ThreeDText({
    text,
    smaller
} : {
    text: string,
    smaller: boolean
}) {
    return (
        <strong className={`${styles.threeDText} ${smaller ? styles.smaller : ''}`}>
            {text}
        </strong>
    )
}