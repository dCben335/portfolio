'use client'

import { Fragment, useState } from "react"
import styles from "./ProgLanguages.module.scss"
import Button from "@/components/ui/Button/Button"
import { ProgrammingLanguagesProps } from "@/types/types"

export default function ProgLanguages({ languages, title } : ProgrammingLanguagesProps) {
    const [showText, setShowText] = useState<boolean>(false)

    const handleClick = (state: boolean) => {
        setShowText(state)
    }

    return (
        <article>
            <nav className={styles.nav}>
                <h3>{title}</h3>
                <div>
                    <Button active={showText} onClick={() => handleClick(true)}>text</Button>
                    <Button active={!showText} onClick={() => handleClick(false)}>icon</Button>
                </div>
            </nav>
            <ul>
                {!showText 
                    ? Object.values(languages).map((language, idx) =>
                        <li key={idx}> {language}</li>
                    
                    ) : Object.keys(languages).map((language, idx) =>
                        <li key={idx}>{language}</li>
                    ) 
                }
            </ul>
        </article>
    )

}