import { useState } from "react";
import { Project } from "@/types/project"
import styles from "./ProjectWrapper.module.css"
import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import ProjectCategories from "@/components/molecules/ProjectCategories/ProjectCategories";
import { usePathname  } from 'next/navigation'


export default function ProjectWrapper({
    projects,
    categories,

} : {
    projects: Array<Project>
    categories?: Array<string>
}) {

    const [projectList, setProjectList] = useState<Array<Project>>(projects);

    const pathname = usePathname()



    // const handleClick = (index: number) => {
    //     if ( activeCategory !== index ) {
    //         setProjectList(projects.filter((project) => project.category_name === categories[index]))
    //         setActiveCategory(index)
    //     } else {
    //         setProjectList(projects)
    //         setActiveCategory(undefined)
    //     }
    // }


    return (
        <>
            { categories && 
                <ProjectCategories 
                    categories={categories}
                    activeCategory={}
                    clicked={() => handleClick()}
                />
            }
            <div className={styles.projectWrapper}>
                {projectList.map((project, idx) => 
                    <ProjectCard 
                        key={idx}
                        path={`${pathname}/${project.project_name.split(' ').join('_')}`}
                        image={{
                            path: `https://picsum.photos/200/300?random=${idx}`,
                            alt: "test"
                        }}
                        title={project.project_name}
                    />
                )}  
            </div>
        </>
    )
}