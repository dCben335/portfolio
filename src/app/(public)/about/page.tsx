import styles from './page.module.scss'

import ThreeDText from "@/components/ui/3dText/ThreeDText";
import ProgLanguages from "@/app/(public)/_components/ProgLanguages/ProgLanguages";
import Skills from '@/app/(public)/_components/Skills/Skills';

import { frameworks, CMS, nativeLanguages, others } from "@/components/Icons/PL/PL";
import { ProgrammingLanguagesProps } from '@/types/types';

import skills from "@/contents/skills.json";


// const programmingLanguages: ProgrammingLanguagesProps[] = [
//     {
//         title:"langages basiques",
//         languages: nativeLanguages,
//     },
//     {
//         title:"langages additionnels",
//         languages: others,
//     },
//     {
//         title:"frameworks",
//         languages: frameworks
//     },
//     {
//         title: "CMS",
//         languages: CMS,
//     }
// ]
const programmingLanguages: ProgrammingLanguagesProps[] = [];

export default function About() {

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
                        <p>Je suis constamment à l&apos;affût des dernières tendances et des meilleures pratiques en matière de développement web, et je suis toujours prêt à relever de nouveaux défis. Si vous recherchez un développeur web fullstack passionné, créatif et désireux d&apos;apprendre, n&apos;hésitez pas à me contacter. Je serais ravi de contribuer à vos projets et de mettre en valeur mes compétences au sein de votre équipe.
                        </p>
                    </div>
                </div>
            </section>
            {programmingLanguages?.at(0) && 
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
                        <Skills skills={skills} />
                    </div>
                </section> 
            }
        </main>
    )
}