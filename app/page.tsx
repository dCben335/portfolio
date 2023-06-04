import styles from './styles/modules/index.module.scss';
import projects from '@/contents/project.json';
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';
import Form from '@/components/molecules/Form/Form';
import formDatas from "@/contents/formDatas.json";
import { frameworks } from '@/components/Icons/PL/PL';

import ProgLanguages from '@/components/molecules/ProgLanguages/ProgLanguages';
import TypeScript from '@/components/Icons/PL/TypeScript/TypeScript';
import Button from '@/components/atoms/Button/Button';


export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          <span>Hi, I&apos;m </span>
          <ThreeDText text='Ben' smaller={false}/>
          <br />
          <span className={styles.subtitle}>A <ThreeDText text='Full stack' smaller={true}/> developer</span>
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
          <Button path="/about">know more</Button>
        </div>
      </section>
      <section>
        <h2>My lastest Work</h2>
        {projects &&
          <ProjectWrapper 
            projects={projects}
            categorieFilters={false}
            rowLimit={true}
            nbOfRows={2}
            pagination={false}
          />
        }
        <div className={styles.link}>
          <Button path="/my-work">see more</Button>
        </div>
      </section>
      <section className={styles.contact}>
        <h2>Contact me</h2>
        <div>
          <Form 
            groupForms={formDatas}
            submitLink="https://eo1za6eg6grst3h.m.pipedream.nett"
          />
        </div>
      </section>
    </main>
  )
}
