import { GroupForm } from "@/types/types"
import styles from "./Group.module.scss"

type FormGroupProps = {
    changed? : (e: any) => any
    groupForm: GroupForm
}

const Group = ({ groupForm, changed } : FormGroupProps) => {
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

Group.displayName = 'Form_Group';

export default Group;