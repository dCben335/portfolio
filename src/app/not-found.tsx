import styles from './not-found.module.scss'
import Button from '@/components/ui/Button/Button'
import ThreeDText from '@/components/ui/3dText/ThreeDText'

export default function Custom404() {

    return (
        <main className={styles.notFound}>
            <section>
                <h1><ThreeDText text='404' smaller={false}/></h1>
                <div>
                    <p>La page que vous recherchez n&apos;existe pas</p>
                    <div className={styles.flex}>
                        <Button href='/' renderAs='link'>go home</Button>  
                    </div>
                </div>
            </section>
        </main>
    )
}