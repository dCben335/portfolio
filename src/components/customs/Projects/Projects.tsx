"use client"

import { useEffect, useState, useRef, ChangeEvent, useMemo, useCallback } from "react";
import { Project } from "@/types/types"
import styles from "./Projects.module.scss"
import ProjectCategories from "@/components/customs/Projects/Categories/Categories";
import Pagination from "@/components/customs/Projects/Pagination/Pagination";
import FormGroup from "@/components/customs/Form/Group/Group";
import Wrapper from "./Wrapper/Wrapper";
import useCategories from "@/hooks/useCategories";
import data from "@/contents/projects.json";
import { accentsTidy } from "@/libs/utils";
import useGridCalculation from "@/hooks/useGridCalculation";


interface ProjectWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    isCategories: boolean,
    isPaginate: boolean,
    isSearchfield: boolean,
    nbOfRows?: number,
}

interface ProjectsParams {
    postPerPage: number,
    pageNumber: number,
    filteredProjects: Project[],
    currentProjects: Project[],
    activeCategory: number,
}

type setProjectsParamsProps = {
    filteredProjects: Project[],
    start?: number,
    pageNumber?: number,
    activeCategory?: number
}


const projects: Project[] = [...data];
const searchfieldProps = {
    label: "",
    placeholder: "project_name",
    type: "text",
    name: "project_name"
}

const Projects = ({ className, nbOfRows = 2, isCategories, isPaginate, isSearchfield, ...props } : ProjectWrapperProps) => { 

    const projectWrapper = useRef<HTMLDivElement>(null);

    const [params, setParams] = useState<ProjectsParams>({
        postPerPage: -1,
        pageNumber: -1,
        filteredProjects: [],
        currentProjects: [],
        activeCategory: -1,
    }) 

    const { postPerPage } = params;

    const { gridColumnWidths } = useGridCalculation(projectWrapper);
    const categories= useCategories(projects, isCategories); 

    const handleSetParams = ({filteredProjects, start = 0, pageNumber = 1, activeCategory } : setProjectsParamsProps) => {
        const currentProjects = filteredProjects.slice(start, params.postPerPage + start);
        setParams((prev) => {
            return {
                ...prev,
                filteredProjects: filteredProjects,
                currentProjects: currentProjects,
                pageNumber: pageNumber,
                activeCategory: activeCategory !== undefined ? activeCategory : prev.activeCategory
            }
        })
    }

    const handleFilterClick = (categoryIndex: number) => {
        if (categoryIndex === params.activeCategory) {
            return handleSetParams({filteredProjects: projects, activeCategory: -1})
        }
        const categoryProjects = projects.filter((project) => project.categories.includes(categories[categoryIndex])) 
        handleSetParams({ filteredProjects: categoryProjects, activeCategory: categoryIndex})
    }

    const handlePaginationClick = (pageNumber: number) => {
        const start = params.postPerPage * (pageNumber - 1);
        handleSetParams({filteredProjects: params.filteredProjects, start: start, pageNumber: pageNumber})
    }

    const handleResearch = (e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const filteredProjects = projects.filter((project) => accentsTidy(project.name).includes(e.target.value.toLowerCase()));
        handleSetParams({filteredProjects: filteredProjects, activeCategory: -1})
    }


    useEffect(() => {
        if (projectWrapper.current && gridColumnWidths !== 0) {
            const projectPerLines = Math.floor(projectWrapper.current.clientWidth / gridColumnWidths);
            const newPostPerPage = projectPerLines * nbOfRows;

            if (newPostPerPage === 0 || newPostPerPage === postPerPage) return;
            
            setParams((prev) => {
                return {
                    ...prev,
                    postPerPage: newPostPerPage,
                    filteredProjects: projects,
                    currentProjects: projects.slice(0, newPostPerPage),
                    pageNumber: 1,
                }
            })   
        }
    }, [gridColumnWidths, projectWrapper, nbOfRows, postPerPage])


    return (    
        <div className={className} {...props}>
            {(categories || isSearchfield) && (      
                <nav className={styles.navigation}>
                    {isSearchfield && (
                        <form>
                            <FormGroup 
                            groupForm={searchfieldProps}
                            changed={(e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleResearch(e)}
                            />
                        </form>
                    )}
                    {isCategories && (
                        <ProjectCategories 
                            categories={categories}
                            activeCategory={params.activeCategory}
                            clicked={handleFilterClick}
                        />
                    )}
                </nav>
            )}
            
            <Wrapper currentProjects={params.currentProjects} ref={projectWrapper}/>        

            {isPaginate && params.pageNumber !== -1 && params.filteredProjects.length > 0 && params.postPerPage > 0 && (
                <Pagination 
                    postsPerPage={params.postPerPage}
                    totalPosts={params.filteredProjects.length}
                    activePage={params.pageNumber}
                    paginate={handlePaginationClick}
                />
            )}
        </div>
    )
}

export default Projects