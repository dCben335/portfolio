import { ReactElement } from "react"
import styles from './Wrapper.module.css'

export default function Wrapper({
    children
}: {
    children: Array<ReactElement>
}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}