import Slider from '@/components/customs/Slider/Slider'
import styles from './page.module.scss'
import { Project }  from '@/types/types'
import { accentsTidy } from '@/libs/utils';
import data from '@/contents/projects.json';

export default function Page({params} : { 
    params: {project_name : string}
}) {
    const project = data?.find((el : Project) =>  accentsTidy(el.name.split(' ').join('_')) == params.project_name) as Project;
    
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