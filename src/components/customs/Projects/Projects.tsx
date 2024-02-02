"use client"

import { useEffect, useState, useRef, ChangeEvent, useMemo, useCallback } from "react";
import { Project } from "@/types/types"
import styles from "./Projects.module.scss"
import ProjectCategories from "@/components/customs/Projects/Categories/Categories";
import Pagination from "@/components/customs/Projects/Pagination/Pagination";
import Group from "@/components/customs/Form/Group/Group";
import Wrapper from "./Wrapper/Wrapper";

type ProjectWrapperProps = {
    projects: Project[],
    filters?: boolean,
    rowLimit?: boolean,
    pagination?: boolean,
    nbOfRows?: number,
    searchfield?: boolean
}

const searchfieldProps = {
    label: "",
    placeholder: "project_name",
    type: "text",
    name: "project_name"
}

export default function Projects({ projects, filters, rowLimit, pagination, nbOfRows = 1, searchfield } : ProjectWrapperProps) {
    const projectWrapper = useRef<any>()

    const [projectList, setProjectList] = useState<Project[]>([...projects])
    const [currentProjects, setCurrentProjects] = useState<Project[]>();
    const [activeCategory, setActiveCategory] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [nbOfProjectPerPages, setNbOfProjectPerPages] = useState<number>()

    const categories:string[]|null = useMemo(() => {
        if (!filters) return null;
        return projects
            .flatMap((project) => project.categories)
            .filter((item, idx, arr) => arr.indexOf(item) == idx);
    }, [projects, filters]);


    const handleClick: ((index: number) => void) = useCallback((index: number) => {
        if (categories && activeCategory !== index) {
            setProjectList(projects.filter((project) => project.categories.includes(categories[index])));
            setActiveCategory(index);
            pagination && setCurrentPage(1);

        } else {
            setProjectList(projects);
            setActiveCategory(undefined);

            if (pagination) {
                setCurrentPage(1);
                handlePagination();
            }
        }
        },[activeCategory, projects, categories, pagination]
    );

    const handleRows = useCallback(() => {
        if (projectWrapper.current && projectWrapper.current.children[0]) {
            const nbOfProjectPerRow = Math.min(
            Math.floor(
                projectWrapper.current.clientWidth 
                / Number(projectWrapper.current.children[0].offsetWidth)),
            4
            );
            nbOfProjectPerRow !== 0
                ? setNbOfProjectPerPages(nbOfProjectPerRow * nbOfRows)
                : setNbOfProjectPerPages(1 * nbOfRows);
        }
    }, [projectWrapper.current?.children, nbOfRows]);

    const handleResearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setCurrentProjects(projects.filter((project) => project.name.toLowerCase().includes(e.target.value.toLowerCase())))
    } 

    const handlePaginationClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handlePagination = useCallback(() => {
        if (nbOfProjectPerPages) {
            const indexOfLastPost = currentPage * nbOfProjectPerPages;
            const indexOfFirstPost = indexOfLastPost - nbOfProjectPerPages;
            setCurrentProjects(projectList.slice(indexOfFirstPost, indexOfLastPost));
        }
    }, [nbOfProjectPerPages, currentPage, projectList]);

    useEffect(() => {
        if (nbOfProjectPerPages && currentPage) {
            if(pagination) {
                handlePagination() 
            } else if(rowLimit) setCurrentProjects(projects.filter((_project, idx) => idx < nbOfProjectPerPages ));
        }
    }, [nbOfProjectPerPages, currentPage, pagination, rowLimit, projects, handlePagination]);


    useEffect(() => {
        setCurrentProjects(projects)
        if (rowLimit || pagination) {
            handleRows()

            const handleResize = () => {
                handleRows();
                setCurrentPage(1);
            };
        
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [projectWrapper, nbOfRows, rowLimit, pagination, handleRows, projects]);


    useEffect(() => {
        pagination || rowLimit && nbOfProjectPerPages ? handlePagination() : setCurrentProjects(projectList);
    }, [projectList, pagination, rowLimit, nbOfProjectPerPages, handlePagination]);
    

    return (
        <div className={styles.projects}>
            {(categories || searchfield) && (      
                <nav className={styles.navigation}>
                    {searchfield && (
                        <Group 
                            groupForm={searchfieldProps}
                            changed={(e : ChangeEvent<HTMLInputElement>) => handleResearch(e)}
                        />
                    )}
                    {categories && activeCategory && (
                        <ProjectCategories 
                            categories={categories}
                            activeCategory={activeCategory}
                            clicked={handleClick}
                        />
                    )}
                </nav>
            )}

            {currentProjects && ( 
                <Wrapper 
                    currentProjects={currentProjects} 
                    ref={projectWrapper}
                />
            )}

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