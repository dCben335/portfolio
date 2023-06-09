"use client"

import { useEffect, useState, useRef } from "react";
import { Project } from "@/utils/types"
import styles from "./ProjectWrapper.module.scss"
import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import ProjectCategories from "@/components/molecules/ProjectCategories/ProjectCategories";
import Pagination from "@/components/molecules/Pagination/Pagination";


export default function ProjectWrapper({
    projects,
    categorieFilters,
    rowLimit,
    pagination,
    nbOfRows = 1
} : {
    projects: Array<Project>,
    categorieFilters: boolean,
    rowLimit: boolean,
    pagination: boolean,
    nbOfRows?: number
}) {
    
    const projectWrapper = useRef<any>()

    const [projectList, setProjectList] = useState<Array<Project>>([...projects])
    const [currentProjects, setCurrentProjects] = useState<Array<Project>>();
    const [activeCategory, setActiveCategory]:any = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [nbOfProjectPerPages, setNbOfProjectPerPages] = useState<number>()


    const categories:Array<string>|undefined = categorieFilters 
        ? projects.flatMap((project) => project.categories).filter((item, idx, arr) => arr.indexOf(item) == idx)
        : undefined


    const handleClick = categories ? (index: number) => {    
        if ( activeCategory !== index ) {
            setProjectList(projects.filter((project) => project.categories.includes(categories[index])))
            setActiveCategory(index)
            pagination && setCurrentPage(1)
        }  else {
            setProjectList(projects)
            setActiveCategory(undefined)
            if (pagination) {
                setCurrentPage(1)
                handlePagination()
            }
        } 
    } : undefined

    const handleRows = () => {
        if(projectWrapper.current && projectWrapper.current.children[0]) {
            const nbOfProjectPerRow = 
                Math.min(Math.floor(
                    projectWrapper.current.clientWidth
                    / Number(projectWrapper.current.children[0].offsetWidth)
                ), 4);            
            nbOfProjectPerRow !== 0 
                ? setNbOfProjectPerPages(nbOfProjectPerRow * nbOfRows)
                : setNbOfProjectPerPages(1 * nbOfRows)
        }
    }

    const handlePaginationClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handlePagination = () => {
        if (nbOfProjectPerPages) {
            const indexOfLastPost = currentPage * nbOfProjectPerPages;
            const indexOfFirstPost = indexOfLastPost - nbOfProjectPerPages;
            setCurrentProjects(projectList.slice(indexOfFirstPost, indexOfLastPost))
        }
    }

    useEffect(() => {
        if (nbOfProjectPerPages && currentPage) {
            if(pagination) {
                handlePagination() 
            } else if(rowLimit) setCurrentProjects(projects.filter((project, idx) => idx < nbOfProjectPerPages ));
        }
    }, [nbOfProjectPerPages, currentPage])

    useEffect(() => {
        setCurrentProjects(projects)
        if (rowLimit || pagination) {
            handleRows()
            window.addEventListener('resize', () =>  {
                handleRows()
                setCurrentPage(1)
            })
            return () => window.removeEventListener('resize', () => {
                handleRows()
                setCurrentPage(1)
            });
        }
    }, [projectWrapper.current, nbOfRows])

    useEffect(() => {
        pagination || rowLimit && nbOfProjectPerPages ? handlePagination() : setCurrentProjects(projectList)
    }, [projectList])

    return (
        <>
            { categories && 
                <ProjectCategories 
                    categories={categories}
                    activeCategory={activeCategory}
                    clicked={handleClick}
                />
            }
            <div className={pagination ? styles.projectWrapperContainer : ''}>
                <div className={styles.projectWrapper} ref={projectWrapper}>
                    {currentProjects && currentProjects.map((project, idx) => 
                        <ProjectCard      
                            key={idx}
                            path={`my-work/${project.name.split(' ').join('_')}`}
                            image={{
                                path: project.images[0].path,
                                alt: project.images[0].alt,
                            }}
                            title={project.name}
                        />
                    )}  
                </div>
            </div>
            {pagination && nbOfProjectPerPages && currentProjects && projectList &&
                <Pagination 
                    postsPerPage={nbOfProjectPerPages}
                    totalPosts={projectList.length}
                    paginate={handlePaginationClick}
                    activePage={currentPage}
                />  
            }
        </>
    )
}