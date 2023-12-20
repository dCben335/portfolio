"use client"

import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import styles from './page.module.scss'

import { useEffect, useState } from 'react';
import { fetching } from '@/libs/functions';
import { Project } from '@/libs/types';

export default function Page() {
    const [projects, setProject] = useState<Project[]>()

    useEffect(() => {
        (async function getProjects() {
            setProject(await fetching('/assets/contents/project.json'))
        })()
    }, [])

    return (         
        <main className={styles["my-work"]}>
            <section>
                {projects &&
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
                }    
            </section>
            
        </main>
    )
}