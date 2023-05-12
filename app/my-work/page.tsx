import projects from '../../content/project.json';
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';

export default function Page () {

    return (         
        <main>
            <h1>Works</h1>
            <ProjectWrapper 
                projects={projects}
                categorieFilters={true}      
                rows={false}
            />

        </main>
    )
}