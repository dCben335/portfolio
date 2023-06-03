import styles from './styles/modules/index.module.scss';
import projects from '@/contents/project.json';
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';
import HyperLink from '@/components/atoms/HyperLink/HyperLink';
import Form from '@/components/molecules/Form/Form';
import formDatas from "@/contents/formDatas.json";
import { frameworks } from '@/components/Icons/PL/PL';

import ProgLanguages from '@/components/molecules/ProgLanguages/ProgLanguages';
import TypeScript from '@/components/Icons/PL/TypeScript/TypeScript';


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
          <article>
            <h3>Moi</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam rerum ipsum totam harum voluptate obcaecati, labore quis, nesciunt vero ab. Numquam quisquam adipisci vitae sunt ipsa ullam, ratione fugit dolorum labore. Magnam atque totam et laboriosam nihil id expedita repellendus quaerat! Harum, totam dignissimos consectetur doloribus eum dolorum qui commodi nesciunt nihil fuga eveniet nostrum, consequatur saepe voluptatibus vitae error at. Dolorum maxime aut porro itaque reiciendis, deleniti suscipit voluptatibus a eius aperiam enim architecto temporibus libero quisquam, nisi nemo incidunt ipsa cumque quia, odio alias? Aliquam incidunt, nam cumque commodi quo, eum, sequi consequatur vitae quaerat vel omnis.</p>
          </article>
          <div>
            <ProgLanguages 
              languages={{...frameworks, "TypeScript": <TypeScript />}}
            />
          </div>
        </div>
        <div className={styles.link}>
          <HyperLink path="/about">know more</HyperLink>
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
          <HyperLink path="/my-work">see more</HyperLink>
        </div>
      </section>
      <section className={styles.contact}>
        <h2>Contact me</h2>
        <div>
          <Form 
            groupForms={formDatas}
            submitLink="https://eo1za6eg6grst3h.m.pipedream.net"
          />
        </div>
      </section>


    </main>
  )
}
