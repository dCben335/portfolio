"use client"
import styles from './styles/modules/index.module.scss';

import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ProgLanguages from '@/components/molecules/ProgLanguages/ProgLanguages';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';
import Form from '@/components/molecules/Form/Form';
import Button from '@/components/atoms/Button/Button';

import { frameworks } from '@/components/Icons/PL/PL';
import TypeScript from '@/components/Icons/PL/TypeScript/TypeScript';

import { useEffect, useState } from 'react';
import { fetching } from '@/utils/functions';

export default function Home() {
  const [projects, setProject] = useState()
  const [formDatas, setFormDatas] = useState()

  useEffect(() => {
    (async function getProjects() {
      
      const projectDatas = await fetching('/assets/contents/project.json')
      setProject(projectDatas)

      const forms = await fetching('/assets/contents/formDatas.json')
      setFormDatas(forms)

    })()
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          <span>Bonjour, je suis </span>
          <ThreeDText text='Benoît' smaller={false}/>
          <br />
          <span className={styles.subtitle}><ThreeDText text='Full stack' smaller={true}/> developer Junior</span>
        </h1>
      </section>
      <section className={styles.about}>
        <h2>Learn About me</h2>
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
          <Button path="/about">voir plus</Button>
        </div>
      </section>

      {projects &&
        <section>
          <h2>Mes derniers Projets</h2>
            <ProjectWrapper 
              projects={projects}
              categorieFilters={false}
              rowLimit={true}
              nbOfRows={2}
              pagination={false}
            />
          <div className={styles.link}>
            <Button path="/my-work">voir plus</Button>
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
            />
          </div>
        </section>  
      }
    </main>
  )
}
