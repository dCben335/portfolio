"use client"

import ProjectWrapper from '@/components/organisms/ProjectWrapper/ProjectWrapper';
import ThreeDText from '@/components/atoms/3dText/ThreeDText';
import styles from '../styles/modules/my-work.module.scss'
import { useEffect, useState } from 'react';
import { fetching } from '@/utils/functions';


export default function Page () {
    
    const [projects, setProject] = useState()

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
                    />
                </>
                }    
            </section>
            
        </main>
    )
}