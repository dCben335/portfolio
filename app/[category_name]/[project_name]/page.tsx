"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Project  from '../../../types/project'
import projects from '../../../content/project.json';

export default function Page ({params} : { 
    params: {project_name : string, category_name : string}
}) {
    const [projectDatas, setProjectDatas] = useState<Project>()

    const project:Array<Project> = projects.filter((el) => 
        el.category_name == params.category_name &&
        el.project_name == params.project_name
    )
    
    const router = useRouter();
    
    useEffect(() => {
        !project[0] ? router.push('/') : setProjectDatas(project[0])
    }, [])

    return (
        <>
            { projectDatas && (
                <main>
                    <h1>{projectDatas.project_name}</h1>
                    <p>{projectDatas.desciption}</p>
                </main>
            )}
        </>
    )
}