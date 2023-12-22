// "use client"

import ProjectWrapper from '@/app/features/Projects/Wrapper/Wrapper';
import styles from './page.module.scss'

import { useEffect, useState } from 'react';
import { fetching } from '@/libs/functions';
import { Project } from '@/libs/types';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await getServerSession(authConfig);

    if (!session) {
        return redirect('/')
    }
    // const [projects, setProject] = useState<Project[]>()

    // useEffect(() => {
    //     (async function getProjects() {
    //         setProject(await fetching('/assets/contents/project.json'))
    //     })()
    // }, [])

    return (         
        <main className={styles["my-work"]}>
            <section>
                {/* {projects &&
                <>
                    <h1>
                        <span>Dashboard {"/>"}</span>
                    </h1>
                    <ProjectWrapper 
                        projects={projects}
                        categorieFilters={true}      
                        rowLimit={false}
                        searchfield={true}
                        pagination={true}
                        nbOfRows={4}
                    />
                </>
                }     */}
            </section>
            
        </main>
    )
}