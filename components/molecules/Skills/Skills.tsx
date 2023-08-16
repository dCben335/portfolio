import { useState } from "react";

import styles from './Skills.module.scss'
import Button from "@/components/atoms/Button/Button";
import EvaluationSquare from '../../atoms/EvaluationSquare/EvaluationSquare'



export default function Skills({
    skills
} : {
    skills: { [key: string]: {[key: string] : string}[]}
}) {

    const evaluations = [
        {
            color: {
                background: 'red'
            },
            text: "Non acquis"
        },
        {
            color: {
                background: 'orange'
            },
            text: "En cours d'acquisition"
        },
        {
            color: {
                background: 'green'
            },
            text: "Acquis"
        }
    ]

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
                            <div className={styles.eval}>
                                {evaluations && evaluations.map((evaluation, idx) => 
                                    <EvaluationSquare
                                        key={idx}
                                        color={evaluation.color} 
                                        text={evaluation.text} 
                                        active={skill.status === evaluation.text} />

                                )}
                            </div>
                        </div>
                        <strong>{skill.label}</strong>
                        <p>{skill.description}</p>
                        <div>
                            <Button path={skill.link} blank={true}>voir le projet</Button>
                        </div>
                    </article>
                )}
            </div>      
        </>
    )
}