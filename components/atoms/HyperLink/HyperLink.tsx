import { ReactElement } from "react"
import { accentsTidy } from "@/types/project"
import Link from "next/link"
import styles from "./HyperLink.module.scss"


export default function HyperLink({
    path,
    children
} : {
    path : string
    children : ReactElement | string 
}) {
    return (
        <Link href={accentsTidy(path)} className={styles.hyperLink}>
            {children}
        </Link> 
    )
}