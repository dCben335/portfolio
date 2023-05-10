import Error from '@/components/organisms/404/404';
import projects from '../../content/project.json';


export default function Page ({params} : { params: {category_name : string}}) {
    const projectList = projects.filter((el) => el.category_name == params.category_name);

    return (
        <>
            {!projectList[0] ? <Error /> :
                <main>
                    <h1>{params.category_name}</h1>
                    <div>
                        {
                            projectList.map((project, idx) => {
                                return (
                                    <a href={`${params.category_name}/${project.project_name.split(' ').join('_')}`} key={idx}>
                                        <h3>{project.project_name}</h3>
                                    </a>
                                )
                            })
                        }                
                    </div>
                </main>
            }
        </>
    )
}