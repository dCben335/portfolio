"use client"

import { useEffect, useState, useRef, MutableRefObject, RefObject } from "react";
import { Project } from "@/types/project"
import styles from "./ProjectWrapper.module.css"
import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import ProjectCategories from "@/components/molecules/ProjectCategories/ProjectCategories";


export default function ProjectWrapper({
    projects,
    categorieFilters,
    rows,
    nbOfRows = 1
} : {
    projects: Array<Project>,
    categorieFilters: boolean,
    rows: boolean,
    nbOfRows?: number
}) {
    const projectWrapper = useRef<any>()
    const [projectList, setProjectList] = useState<Array<Project>>();
    const [activeCategory, setActiveCategory]:any = useState<Number>();

    const categories:Array<string>|undefined = categorieFilters 
        ? projects.map((project) => project.category_name).filter((item, idx, arr) => arr.indexOf(item) == idx)
        : undefined


    const handleClick = categories ? (index: number) => {    
        if ( activeCategory !== index ) {
            setProjectList(projects.filter((project) => project.category_name === categories[index]))
            setActiveCategory(index)
        } else {
            setProjectList(projects)
            setActiveCategory(undefined)
        } 
    } : undefined

    const handleRows = () => {
        if(rows && projectWrapper.current && projectWrapper.current.children[0]) {
            const nbOfProjectPerRow = 
                Math.min(Math.floor(
                    (window.innerWidth / 100 * 85) 
                    / Number(projectWrapper.current.children[0].offsetWidth))
                , 4);
            const nbOfProject = nbOfProjectPerRow !== 0 ? nbOfProjectPerRow * nbOfRows : 1 * nbOfRows
            setProjectList(projects.filter((project, idx) => idx < nbOfProject ));
        }
    }

    useEffect(() => {
        setProjectList(projects)
        if (rows) {
            handleRows()
            window.addEventListener('resize', () =>  handleRows())
        }
    }, [projectWrapper.current])


    return (
        <>
            { categories && 
                <ProjectCategories 
                    categories={categories}
                    activeCategory={activeCategory}
                    clicked={handleClick}
                />
            }
            <div className={styles.projectWrapper} ref={projectWrapper}>
                {projectList && projectList.map((project, idx) => 
                    <ProjectCard 
                        
                        key={idx}
                        path={`my-work/${project.project_name.split(' ').join('_')}`}
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