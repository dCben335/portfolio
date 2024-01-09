"use client"
import styles from './page.module.scss';

import ProjectWrapper from '@/app/features/Projects/Wrapper/Wrapper';
import ProgLanguages from '@/components/molecules/ProgLanguages/ProgLanguages';
import ThreeDText from '@/components/ui/3dText/ThreeDText';
import Form from '@/app/features/Form/Form';
import Button from '@/components/ui/Button/Button';

import { frameworks } from '@/components/Icons/PL/PL';
import TypeScript from '@/components/Icons/PL/TypeScript/TypeScript';

import { useEffect, useState } from 'react';
import { fetching } from '@/libs/utils';

import { Project } from '@/types/types';
import { GroupForm } from "@/types/types";

const formDatas: GroupForm[] = [
  {
    "placeholder": "Jonah",
    "label": "prénom",
    "type": "text",
    "name": "firstName"
  },
  {
    "placeholder": "Dupont",
    "label": "nom",
    "type": "text",
    "name": "lastName"
  },
  {
    "placeholder": "jonah.dupont@gmail.com",
    "label": "email",
    "type": "email",
    "name": "email"
  },
  {
    "placeholder": "Bonjour Monsieur",
    "label": "message",
    "type": "textarea",
    "name": "message"
  }
]

export default function Home() {
  const [projects, setProject] = useState<Project[]>()

  useEffect(() => {
    (async function getProjects() {
      setProject(await fetching('/assets/contents/project.json'))
    })()
  }, [])


  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          <span>Bonjour, je suis </span>
          <ThreeDText text='Benoît' smaller={false}/>
          <br />
          <span className={styles.subtitle}><ThreeDText text='Full stack' smaller={true} /> developer Junior</span>
        </h1>
      </section>
      <section className={styles.about}>
        <h2>Qui je suis</h2>
        <div className={styles.grid}>
          <figure>
            <img src="/assets/images/me.png" alt="" />
          </figure>
          <div>
            <p>Bonjour, je m&apos;appelle Benoit et je suis un étudiant français passionné des métiers de l&apos;internet et du multimédia. Mon objectif est de devenir un développeur web fullstack polyvalent et créatif. Actuellement en formation en BUT Métiers de l&apos;internet et du Multimédia, je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences et ma compréhension des technologies web modernes.</p>
            <ProgLanguages 
              languages={{...frameworks, "TypeScript": <TypeScript />}}
            />
          </div>
        </div>
        <div className={styles.link}>
          <Button href="/about">voir plus</Button>
        </div>
      </section>

      {projects &&
        <section className={styles.work}>
          <h2>Mes derniers Projets</h2>
            <ProjectWrapper 
              projects={projects}
              categorieFilters={false}
              rowLimit={true}
              nbOfRows={2}
              pagination={false}
              searchfield={false}
            />
          <div className={styles.link}>
            <Button href="/my-work">voir plus</Button>
          </div>
        </section>
      }

      {formDatas &&
        <section className={styles.contact}>
          <h2>Contactez moi</h2>
          <div>
            <Form 
              groupForms={formDatas}
              submitLink="https://eo1za6eg6grst3h.m.pipedream.net"
              successMessage={"Envoi réussi"}
              failedMessage={"Une erreur est survenue, Veuillez réessayer plus tard"}
            />
          </div>
        </section>  
      }
    </main>
  )
}