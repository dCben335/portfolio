"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import projects from '../../content/project.json';


export default function Page ({params} : { params: {category_name : string}}) {
    const projectList = projects.filter((el) => el.categorie_name == params.category_name);
    const router = useRouter();

    useEffect(() => {
        !projectList[0] ? router.push('/') : ''
    }, [])

    return (
        <main>
            <h1>{params.category_name}</h1>
            <div>
                {projectList && 
                   projectList.map((project, idx) => {
                    return (
                        <article key={idx}>
                            <h3>{project.project_name}</h3>
                        </article>
                    )
                   })
                }                
            </div>
        </main>
    )
}