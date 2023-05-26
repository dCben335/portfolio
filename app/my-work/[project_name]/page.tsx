"use client"
import { useState } from 'react';
import { notFound } from 'next/navigation';
import {Project}  from '@/utils/types'
import { accentsTidy } from '@/utils/functions';

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
                    <section>
                    <h1>{projectDatas.project_name}</h1>
                    <div className={styles.grid}>          
                        <div>
                            {projectDatas.images &&
                                <Slider sliderWidth={styles.sliderWidth}>
                                    {projectDatas.images.map((image, idx) => 
                                        <img src={image.path} alt={image.alt} key={idx}/>
                                    )}
                                </Slider>
                            }
                        </div>
                        <div>
                            <p>{projectDatas.desciption}</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, sapiente quis. Consectetur sunt expedita, illo adipisci totam magni officiis dicta consequuntur placeat. Ipsa consectetur temporibus culpa est accusantium, dicta explicabo? Voluptas dolorum ullam fuga sunt voluptatem, eligendi minus incidunt eum numquam quas, a sapiente iste cum ratione commodi quibusdam! Nisi, voluptates ex in impedit illo repellat laborum quae repudiandae facilis a dolores optio quisquam eaque nam deleniti amet. Consectetur, minima nemo tenetur rem quo veniam. Pariatur, cum corporis reiciendis ratione provident impedit sapiente doloremque odio animi, explicabo eum! Veniam odio harum provident illum modi doloremque ratione sit amet doloribus obcaecati exercitationem accusantium libero adipisci saepe corporis quo voluptatem, eum distinctio aliquid facere sequi deleniti aliquam similique error? Est inventore non asperiores earum vitae nobis eius perferendis! Voluptate vero maxime mollitia officiis obcaecati error reprehenderit similique. Impedit dicta, optio, alias error fugiat quae corporis cum, rerum minus quibusdam facilis perspiciatis aliquam laudantium officia illum. Rerum fugit, sit perferendis esse ipsa, cupiditate voluptates distinctio omnis voluptatem explicabo quae asperiores nisi praesentium similique? Reiciendis veritatis ab totam ex nobis aliquid facilis similique iure sint cumque accusantium et libero, dolorum odio? Dicta earum eaque temporibus quisquam, beatae dignissimos voluptas recusandae molestiae sequi facere quos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in magnam perspiciatis eos quasi velit nemo beatae ullam, explicabo omnis, porro inventore consectetur odio reprehenderit libero nostrum harum iusto quod exercitationem voluptas quaerat corporis ad tempore. Illo eius in consequuntur nemo consectetur vel qui perferendis voluptatibus consequatur illum cumque ipsam, soluta dolor aut est incidunt doloribus. Nesciunt, provident? Minima dolorem tempore, vel ab inventore explicabo cumque dolore fugiat ullam consequuntur eum odit non voluptatum blanditiis repudiandae voluptates mollitia aspernatur asperiores quia similique laboriosam. Nisi accusantium praesentium, asperiores consequuntur modi hic ratione quos, quis autem totam itaque laudantium voluptas quam harum.
                            </p>
                        </div>

                    </div>

                    </section>

                </main>
            }
        </>
    )
}