import { GroupForm } from "@/utils/types"
import styles from "./FormGroup.module.scss"

export default function FormGroup({
    groupForm,
    changed
} : {
    groupForm : GroupForm
    changed : any

}) {
    return (
        <label className={styles.label}>
            <span>{groupForm.label}</span>
            {groupForm.type !== "textarea" ?
                <input 
                    type={groupForm.type}
                    name={groupForm.name} 
                    placeholder={groupForm.placeholder} 
                    onChange={changed && changed}
                    required
                /> : 
                <textarea 
                    name={groupForm.name} 
                    placeholder={groupForm.placeholder} 
                    onChange={changed && changed}
                    cols={30} 
                    rows={10}
                    required>
                </textarea>
            }
        </label>
    )
}