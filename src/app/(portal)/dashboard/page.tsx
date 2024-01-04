"use client"

import ProjectWrapper from '@/app/features/Projects/Wrapper/Wrapper';
import styles from './page.module.scss'
import { fetching } from '@/libs/utils';
import { Project } from '@/types/types';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default  function Page() {
    // const session = await getServerSession(authConfig);

    // if (!session) {
    //     return redirect('/')
    // }

    const [projects, setProject] = useState<Project[]>()

    useEffect(() => {
        (async function getProjects() {
            setProject(await fetching('/assets/contents/project.json'))
        })()
    }, [])

    
    return (         
        <main className={styles["my-work"]}>
            <section>
                <h1>
                    <span>Dashboard {"/>"}</span>
                </h1>
                {projects &&
                    <ProjectWrapper 
                        projects={projects}
                        categorieFilters={true}      
                        rowLimit={false}
                        searchfield={true}
                        pagination={true}
                        nbOfRows={4}
                    />
                }    
            </section>
            
        </main>
    )
}