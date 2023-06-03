import { ReactElement } from "react"
import { accentsTidy } from "@/utils/functions"
import Link from "next/link"
import styles from "./HyperLink.module.scss"


export default function HyperLink({
    path,
    children,
    active,
} : {
    path : string
    children : ReactElement | string 
    active?: boolean
}) {
    return (
        <Link href={accentsTidy(path)} className={`${styles.hyperLink} ${active ? styles.active : '' }`}>
            {children}
        </Link> 
    )
}