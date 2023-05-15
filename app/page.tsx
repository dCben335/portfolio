import styles from './styles/modules/index.module.sass'
import projects from '../content/project.json'
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.index}>
      <section className={styles.hero}>
        <h1>
          <span>Hi, I'm </span>
          <ThreeDText text='Ben' smaller={false}/>
          <br />
          <span className={styles.subtitle}>A <ThreeDText text='Full stack ' smaller={true}/> developer</span>
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
        <Link href="/my-work">see more</Link>
      </section>
    </main>
  )
}
