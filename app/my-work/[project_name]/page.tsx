"use client"
import { useState } from 'react';
import { notFound } from 'next/navigation';

import {Img, Project, accentsTidy}  from '../../../types/project'
import projects from '../../../content/project.json';
import Slider from '../../../components/organisms/Slider/Slider'
import styles from '../../styles/modules/project.module.scss'


export default function Page ({params} : { 
    params: {project_name : string}
}) {
    const [projectDatas, setProjectDatas] = useState<Project>(projects.filter((el) => 
        accentsTidy(el.project_name.split(' ').join('_')) == params.project_name
    )[0])

   

    return (
        <>
            { !projectDatas ? notFound() :
                <main>
                    <h1>{projectDatas.project_name}</h1>
                    <p>{projectDatas.desciption}</p>
                
                    <div className={styles.slider}>
                        {projectDatas.images &&
                            <Slider sliderWidth={styles.sliderWidth}>
                                {projectDatas.images.map((image) => 
                                    <img src={image.path} alt={image.alt} />
                                )}
                            </Slider>
                        }
                    </div>

                </main>
            }


        </>
    )
}