"use client"
import { useState } from 'react';
import { notFound } from 'next/navigation';
import {Project}  from '@/utils/types'
import { accentsTidy } from '@/utils/functions';

import projects from '@/contents/project.json';
import Slider from '../../../components/organisms/Slider/Slider'
import styles from '../../styles/modules/project.module.scss'

export default function Page ({params} : { 
    params: {project_name : string}
}) {
    const projectDatas: Project = projects.filter((el) => 
        accentsTidy(el.name.split(' ').join('_')) == params.project_name
    )[0]

    return (
        <>
            { !projectDatas ? notFound() :
                <main>
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

                </main>
            }
        </>
    )
}