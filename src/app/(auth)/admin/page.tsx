import styles from './page.module.scss'
import GithubButton from "./components/GithubButton"

export default function Page() {
    return (
        <main className={styles.main}>
            <GithubButton />
        </main>
    )
}