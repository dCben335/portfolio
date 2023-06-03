import projects from '@/contents/project.json';
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';
import styles from '../styles/modules/my-work.module.scss'

export default function Page () {
    return (         
        <main className={styles["my-work"]}>
            <section>
                <h1>
                    <span>My </span>
                    <ThreeDText text='Work' smaller={false}/>
                </h1>
                <ProjectWrapper 
                    projects={projects}
                    categorieFilters={true}      
                    rowLimit={false}
                    pagination={true}
                    nbOfRows={2}
                />
            </section>
            
        </main>
    )
}