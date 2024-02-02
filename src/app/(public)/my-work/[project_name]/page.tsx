"use client"
import { notFound } from 'next/navigation';
import Slider from '@/components/customs/Slider/Slider'
import styles from './page.module.scss'
import { Project }  from '@/types/types'
import useProjects from '@/hooks/useProjects';
import { accentsTidy } from '@/libs/utils';


export default function Page({params} : { 
    params: {project_name : string}
}) {
    const { data, error, isLoading } = useProjects();

    const project = data?.find((el : Project) =>  accentsTidy(el.name.split(' ').join('_')) == params.project_name) as Project;

    if (isLoading || !project) return <div>Loading...</div>
    if (error || (!project)) return notFound();

    
    return (
        <main className={styles.project}>
            <section>
                <h1>{project.name}</h1>
                <div className={styles.grid}>          
                    {project.images &&
                        <Slider>
                            {project.images.map((image, idx) => 
                                <img src={image.path} alt={image.alt} key={idx}/>
                            )}
                        </Slider>
                    }
                    <div>
                        <p>{project.desciption}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}