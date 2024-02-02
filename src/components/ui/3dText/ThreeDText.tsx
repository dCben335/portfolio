import styles from "./ThreeDText.module.scss"

type ThreeDTextProps = {
    text: string,
    smaller: boolean
}

const ThreeDText = ({ text, smaller } : ThreeDTextProps) => {
    return (
        <strong className={`${styles.threeDText} ${smaller ? styles.smaller : ''}`}>
            {text}
        </strong>
    )
}

ThreeDText.displayName = 'ThreeDText';

export default ThreeDText;