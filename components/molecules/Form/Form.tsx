"use client"
import { ChangeEvent, useState } from "react";
import { GroupForm } from "@/utils/types";
import FormGroup from "@/components/atoms/FormGroup/FormGroup";
import Button from "@/components/atoms/Button/Button";
import styles from "./Form.module.scss"


export default function Form({
    title,
    groupForms
} : {
    title: string,
    groupForms : Array<GroupForm>
}) {
    const [formDatas, setFormDatas] = useState<Object>({})

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log(event)
        setFormDatas((prev) => {
            const newDatas : {[key: string] :Object} = {...prev}
            newDatas[event.target.name] = event.target.value
            return newDatas;
        })
        console.log(formDatas)
    }

    const handleSubmit = (event : SubmitEvent) => {
        event.preventDefault()
        if (formDatas && Object.keys(formDatas).length === groupForms.length) {
            console.log(formDatas)
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
            <Button text="Envoyer" type="submit"/>
        </form>
    )
}