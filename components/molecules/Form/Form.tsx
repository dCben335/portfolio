"use client"
import { ChangeEvent, useState } from "react";
import { GroupForm } from "@/utils/types";
import FormGroup from "@/components/atoms/FormGroup/FormGroup";
import Button from "@/components/atoms/Button/Button";
import styles from "./Form.module.scss"


export default function Form({
    title,
    groupForms,
    submitLink,
} : {
    title: string,
    groupForms: Array<GroupForm>,
    submitLink: string
}) {
    const [formDatas, setFormDatas] = useState<Object>({})
    const [submited, setSubmited] = useState<Number>(-1)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.target.value === '') return 
        setFormDatas((prev) => {
            const newDatas : {[key: string] :Object} = {...prev}
            newDatas[event.target.name] = event.target.value
            return newDatas;
        })
    }

    const handleSubmit = async (event : SubmitEvent) => {
        event.preventDefault()
        if (submited === 1) return
        if (formDatas && Object.keys(formDatas).length === groupForms.length) {
            try {
                await fetch(submitLink, {
                    method: 'POST',
                    body: JSON.stringify(formDatas),
                })
                setSubmited(1)
            } catch(err) {
                setSubmited(0)
            }
        } 
        
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <h3>{title}</h3>
            {groupForms && groupForms.map((groupForm, idx) => 
                <FormGroup 
                    key={idx}
                    groupForm={groupForm}
                    changed={(e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(e)}
                />
            )}
            {submited === 1 ? 
                <p className={styles.failed}>Envoi réussi</p>
                :
                <>
                    <Button text="Envoyer" type="submit"/>
                    {submited === 0 &&
                        <p className={styles.succeeded}>Réessayer plus tard</p>
                    }
                </>
            }
        </form>
    )
}