import { useState } from "react";

import styles from './Skills.module.scss'
import Button from "@/components/atoms/Button/Button";


export default function Skills({
    skills
} : {
    skills: { [key: string]: Array<{[key: string] : string}>}
}) {

    const [currentSkill, setCurrentSkill] = useState<string>(Object.keys(skills)[0])

    const handleClick = (skill : string) => {
        setCurrentSkill(skill);
    }

    return (
        <>
            <nav className={styles.skills}>
                <ul>
                    {Object.keys(skills).map((skill, idx) => 
                        <li key={idx}>
                            <Button
                                active={skill === currentSkill}
                                clicked={() => handleClick(skill)}
                            >{skill}</Button>
                        </li>
                    )}
                </ul>
            </nav>   
            <div className={styles.ac}>
                {(skills[currentSkill] ?? []).map((skill, idx) => 
                    <article key={idx}>
                        <div>
                            <h3>{skill.ac}</h3>
                            <p>{skill.status}</p>
                        </div>
                        <strong>{skill.label}</strong>
                        <p>{skill.description}</p>
                        <div>
                            <Button path={skill.link}>voir le projet</Button>
                        </div>
                    </article>
                )}
            </div>      
        </>
    )
}