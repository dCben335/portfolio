import styles from './styles/modules/index.module.css'
import projects from '../content/project.json'
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';


export default function Home() {
  return (
    <main className={styles.index}>
      <section className={styles.hero}>
        <h1>
          <span>Hi, I'm </span>
          <ThreeDText text='Ben' smaller={false}/>
          <br />
          <ThreeDText text='Full stack' smaller={true}/>
          <span> developper junior</span>
        </h1>
      </section>
      <section>
        <ProjectWrapper 
          projects={projects}
          categorieFilters={false}
          rowLimit={true}
          nbOfRows={2}
          pagination={false}
        />
      </section>
    </main>
  )
}
