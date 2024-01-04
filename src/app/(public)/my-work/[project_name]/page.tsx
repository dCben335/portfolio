"use client"
import { notFound } from 'next/navigation';
import Slider from '@/components/ui/Slider/Slider'
import styles from './page.module.scss'

import { useEffect, useState } from 'react';
import { fetching } from '@/libs/utils';
import { accentsTidy } from '@/libs/utils';
import { Project }  from '@/types/types'


export default function Page({params} : { 
    params: {project_name : string}
}) {
    const [projectDatas, setProjectDatas] = useState<Project | false>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        projectDatas === undefined &&
            (async function getProjects() {
                const projects = await fetching('/assets/contents/project.json')

                const thisProject = projects.filter((el:Project) => 
                    accentsTidy(el.name.split(' ').join('_')) == params.project_name
                )[0] 
                
                setProjectDatas(thisProject ? thisProject : false) 
            })()
    }, [])

    useEffect(() => {
        projectDatas !== undefined && setLoading(false)
    }, [projectDatas])

    return (
        <>
            { !loading && !projectDatas ? notFound() :
                <main className={styles.project}>
                    {!projectDatas ? <></> :
                    <section>
                        <h1>{projectDatas.name}</h1>
                        <div className={styles.grid}>          
                            {projectDatas.images &&
                                <div>
                                    <Slider sliderWidth={styles.sliderWidth}>
                                        {projectDatas.images.map((image, idx) => 
                                            <img src={image.path} alt={image.alt} key={idx}/>
                                        )}
                                    </Slider>
                                </div>
                            }
                            <div>
                                <p>{projectDatas.desciption}</p>
                            </div>
                        </div>
                    </section>
                    }
                </main>
            }
        </>
    )
}