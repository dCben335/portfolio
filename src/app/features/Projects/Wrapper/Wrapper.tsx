"use client"

import { useEffect, useState, useRef, ChangeEvent } from "react";
import { Project } from "@/libs/types"
import styles from "./Wrapper.module.scss"
import ProjectCard from "@/app/features/Projects/Card/Card";
import ProjectCategories from "@/app/features/Projects/Categories/Categories";
import Pagination from "@/app/features/Projects/Pagination/Pagination";
import FormGroup from "@/app/features/Form/Group/Group";

type ProjectWrapperProps = {
    projects: Project[],
    categorieFilters?: boolean,
    rowLimit?: boolean,
    pagination?: boolean,
    nbOfRows?: number,
    searchfield?: boolean
}

export default function ProjectWrapper({ projects, categorieFilters, rowLimit, pagination, nbOfRows = 1, searchfield } : ProjectWrapperProps) {
    const projectWrapper = useRef<any>()

    const [projectList, setProjectList] = useState<Project[]>([...projects])
    const [currentProjects, setCurrentProjects] = useState<Project[]>();
    const [activeCategory, setActiveCategory]:any = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [nbOfProjectPerPages, setNbOfProjectPerPages] = useState<number>()
    
    const categories:string[]|undefined = categorieFilters 
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

    const handleResearch:Function = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setCurrentProjects(projects.filter((project) => project.name.toLowerCase().includes(e.target.value.toLowerCase())))
    } 

    const handlePaginationClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handlePagination:Function = () => {
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
        <div>
            {(categories || searchfield) && (      
                <nav className={styles.navigation}>
                    {searchfield && (
                        <FormGroup 
                            groupForm={{
                                label: "",
                                placeholder: "project_name",
                                type: "text",
                                name: "project_name"
                            }}
                            changed={(e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleResearch(e)}
                        />
                    )}
                    {categories && handleClick && (
                        <ProjectCategories 
                            categories={categories}
                            activeCategory={activeCategory}
                            clicked={handleClick}
                        />
                    )}
                </nav>
            )}
            <div className={pagination ? styles.projectWrapperContainer : ''}>
                <div className={styles.projectWrapper} ref={projectWrapper}>
                    {(currentProjects ?? []).map((project, idx) => 
                        <ProjectCard      
                            key={project.name.split(' ').join('_')}
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
            {pagination && nbOfProjectPerPages && projectList &&
                <Pagination 
                    postsPerPage={nbOfProjectPerPages}
                    totalPosts={projectList.length}
                    paginate={handlePaginationClick}
                    activePage={currentPage}
                />  
            }
        </div>
    )
}