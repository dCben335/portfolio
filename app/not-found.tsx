"use client"

import styles from './styles/modules/not-found.module.scss'
import Button from '@/components/atoms/Button/Button'
import { useRouter } from 'next/navigation'
import ThreeDText from '@/components/atoms/3dText/ThreeDText'

export default function Custom404() {

    const router = useRouter()

    return (
        <main className={styles.notFound}>
            <section>
                <h1><ThreeDText text='404' smaller={false}/></h1>
                <div>
                    <p>La page que vous recherchez n&apos;existe pas</p>
                    <div className={styles.flex}>
                        <Button clicked={() => router.replace('')}>go home</Button>  
                        <Button clicked={() => router.back()}> go back </Button>  
                    </div>
                </div>

            </section>
        </main>
    )
}