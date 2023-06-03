"use client"

import styles from './styles/modules/not-found.module.scss'
import Button from '@/components/atoms/Button/Button'
import { useRouter } from 'next/navigation'

export default function Custom404() {

    const router = useRouter()

    return (
        <main className={styles.notFound}>
            <h1>404</h1>
            <div>
                <Button clicked={() => router.replace('')}>go home</Button>  
                <Button clicked={() => router.back()}> go back </Button>  

            </div>
        </main>
    )
}