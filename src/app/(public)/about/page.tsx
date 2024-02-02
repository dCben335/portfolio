"use client"
import styles from './page.module.scss'
import { useEffect, useState } from "react";

import ThreeDText from "@/components/ui/3dText/ThreeDText";
import ProgLanguages from "@/app/(public)/_components/ProgLanguages/ProgLanguages";
import Skills from '@/app/(public)/_components/Skills/Skills';

import { frameworks, CMS, nativeLanguages, others } from "@/components/Icons/PL/PL";
import { fetching } from "@/libs/utils";
import { ProgrammingLanguagesProps } from '@/types/types';


const programmingLanguages: ProgrammingLanguagesProps[] = [
    {
        title:"langages basiques",
        languages: nativeLanguages,
    },
    {
        title:"langages additionnels",
        languages: others,
    },
    {
        title:"frameworks",
        languages: frameworks
    },
    {
        title: "CMS",
        languages: CMS,
    }
]

export default function About() {
    const [skills, setSkills] = useState<{ [key: string]: {[key: string] : string}[]}>()


    useEffect(() => {
        (async function getProjects() {
            setSkills(await fetching('/assets/contents/skills.json'))
        })()
    }, [])

    return (
        <main className={styles.about}>
            <section>
                <h1>
                    <span>A propos de </span>
                    <ThreeDText text='moi' smaller={true} />
                </h1>

                <div className={styles.grid}>
                    <figure>
                        <img src="/assets/images/me.png" alt="me" />
                    </figure>
                    <div>
                        <p> Bonjour, je m&apos;appelle Benoit et je suis un étudiant français passionné des métiers de l&apos;internet et du multimédia. Mon objectif est de devenir un développeur web fullstack polyvalent et créatif. Actuellement en formation en BUT Métiers de l&apos;internet et du Multimédia, je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences et ma compréhension des technologies web modernes.
                        </p>
                        <p> Grâce à ma solide connaissance des langages de programmation tels que JavaScript, HTML et CSS, je suis capable de concevoir des interfaces utilisateur intuitives et esthétiquement plaisantes, tout en assurant une expérience utilisateur optimale.
                        </p>
                        <p> Je suis également passionné par le développement back-end et j&apos;ai acquis une expérience pratique en utilisant des technologies telles que MySql ET PHP pour construire des sites web robustes et sécurisées. Ma capacité à travailler à la fois sur le front-end et le back-end me permet de prendre en charge l&apos;ensemble du cycle de développement d&apos;une application web, de la conception initiale à la mise en production.
                        </p>
                        <p>Je suis constamment à l&apos;affût des dernières tendances et des meilleures pratiques en matière de développement web, et je suis toujours prêt à relever de nouveaux défis. Si vous recherchez un développeur web fullstack passionné, créatif et désireux d&apos;apprendre, n&apos;hésitez pas à me contacter. Je serais ravi de contribuer à vos projets et de mettre en valeur mes compétences au sein de votre équipe.
                        </p>
                    </div>
                </div>
            </section>
            {programmingLanguages && 
                <section>
                    <h2>Mes langages de programmation</h2>
                    <div className={styles["programming-languages"]}>
                        {programmingLanguages.map((programmingLanguage, idx) => 
                            <ProgLanguages 
                                key={idx}
                                {...programmingLanguage}
                            />
                        )}
                    </div>
                </section>
            }
            {skills && 
                <section>
                    <h2>Mon portfolio de compétences</h2>
                    <div className={styles["programming-languages"]}>
                        <Skills skills={skills}/>
                    </div>
                </section> 
            }
        </main>
    )
}