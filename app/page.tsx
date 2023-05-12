import styles from './styles/modules/index.module.css'
import projects from '../content/project.json'
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';


export default function Home() {
  return (
    <main className={styles.index}>
      <section>
        <ProjectWrapper 
          projects={projects}
          categorieFilters={false}
          rows={true}
          nbOfRows={2}
        />
      </section>
    </main>
  )
}
