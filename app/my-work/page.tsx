import projects from '../../content/project.json';
import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';

export default function Page () {

    return (         
        <main>
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
                    nbOfRows={3}
                />
            </section>
            
        </main>
    )
}