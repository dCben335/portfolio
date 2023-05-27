import styles from './styles/modules/index.module.scss';
import projects from '@/contents/project.json';
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';
import HyperLink from '@/components/atoms/HyperLink/HyperLink';
import Form from '@/components/molecules/Form/Form';
import formDatas from "@/contents/formDatas.json";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>
          <span>Hi, I&apos;m </span>
          <ThreeDText text='Ben' smaller={false}/>
          <br />
          <span className={styles.subtitle}>A <ThreeDText text='Full stack ' smaller={true}/> developer</span>
        </h1>
      </section>
      <section className={styles.about}>
        <h2>Learn About me</h2>

        <HyperLink path="/about">know more</HyperLink>
      </section>
      <section>
        <h2>My lastest Work</h2>
        <ProjectWrapper 
          projects={projects}
          categorieFilters={false}
          rowLimit={true}
          nbOfRows={2}
          pagination={false}
        />
        <HyperLink path="/my-work">see more</HyperLink>
      </section>
      <section className={styles.contact}>
        <h2>Contact me</h2>
        <div>
          <Form 
            title='Formulaire de contact'
            groupForms={formDatas}
          />
        </div>
      </section>


    </main>
  )
}
