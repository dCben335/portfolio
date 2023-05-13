import projects from '../../content/project.json';
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';

export default function Page () {

    return (         
        <main>
            <section>
                <h1>Project</h1>
                <ProjectWrapper 
                    projects={projects}
                    categorieFilters={true}      
                    rowLimit={false}
                    pagination={true}
                    nbOfRows={4}
                />
            </section>
        </main>
    )
}