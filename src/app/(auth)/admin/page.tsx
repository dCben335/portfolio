import Form from "@/components/molecules/Form/Form"
import styles from './page.module.scss'
import { GroupForm } from "@/libs/types"

const login: GroupForm[] = [
    {
        label: 'username',
        placeholder: 'jean',
        type: 'text',
        name: 'username',
    },
    {
        label: 'password',
        placeholder: '',
        type: 'password',
        name: 'password',
    }
]

export default function Page() {
    return (
        <main className={styles.main}>
            <Form 
                title="Log In"
                groupForms={login}
                submitLink="api?qzdzq"
                successMessage={"Connexion Réussit"}
                failedMessage={"Identifiant incorrect"}
            />
        </main>
    )
}