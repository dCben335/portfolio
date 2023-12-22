"use client"

import ProjectWrapper from '@/app/features/Projects/Wrapper/Wrapper';
import ThreeDText from '@/components/ui/3dText/ThreeDText';
import styles from './page.module.scss'
import { useEffect, useState } from 'react';
import { fetching } from '@/libs/functions';
import { Project } from '@/libs/types';


export default function Page () {
    
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
                        <span>Mes </span>
                        <ThreeDText text='Projets' smaller={false}/>
                    </h1>
                    <ProjectWrapper 
                        projects={projects}
                        categorieFilters={true}      
                        rowLimit={false}
                        pagination={true}
                        nbOfRows={2}
                        searchfield={false}
                    />
                </>
                }    
            </section>
            
        </main>
    )
}