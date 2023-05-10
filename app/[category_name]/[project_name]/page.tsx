"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Project  from '../../../types/project'
import projects from '../../../content/project.json';
import Error from '@/components/organisms/404/404';


export default function Page ({params} : { 
    params: {project_name : string, category_name : string}
}) {
    const [projectDatas, setProjectDatas] = useState<Project>(projects.filter((el) => 
        el.category_name == params.category_name &&
        el.project_name.split(' ').join('_') == params.project_name
    )[0])

    return (
        <>
            { !projectDatas ? <Error /> :
                <main>
                    <h1>{projectDatas.project_name}</h1>
                    <p>{projectDatas.desciption}</p>
                </main>
            }
        </>
    )
}