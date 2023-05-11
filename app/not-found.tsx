
"use client"

import styles from './styles/modules/not-found.module.css'
import Button from '@/components/atoms/Button/Button'

export default function Custom404() {

    const handledClick = () => {
        window.history.go(-1)
    }

    return (
        <main className={styles.notFound}>
            <h1>404</h1>
            <Button 
                text="go back"
                clicked={() => handledClick()}
            />


        
        </main>
    )
}