"use client"

import projects from '../../content/project.json';
import { usePathname  } from 'next/navigation'
import { useState } from 'react';
import {Project} from '@/types/project';
import Link from 'next/link';
import ProjectCard from '@/components/molecules/ProjectCard/ProjectCard';
import Button from '@/components/atoms/Button/Button';
import Wrapper from '@/components/organisms/Wrapper/Wrapper';


export default function Page () {
    const [projectList, setProjectList] = useState<Array<Project>>(projects)
    const [activeCategory, setActiveCategory] = useState<Number>()

    const categories:Array<string> = projects.map((project) => project.category_name).filter((item, idx, arr) => arr.indexOf(item) == idx)
    const [categoriesColors, setCategoriesColor]  = useState<Array<string>>(categories.map((el, idx) => `#${Math.floor(((idx + 1) * 0.85/categories.length) * 16777215).toString(16)}`))
    
    const pathname = usePathname()

    const handleClick = (index: number) => {
        if ( activeCategory !== index ) {
            setProjectList(projects.filter((project) => project.category_name === categories[index]))
            setActiveCategory(index)
        } else {
            setProjectList(projects)
            setActiveCategory(undefined)
        }
    }

    return (         
        <main>
            <h1>Works</h1>
            
            <section>
                <nav>
                    <ul>
                        {categories.map((category, idx) => 
                            <Button 
                                key={idx} 
                                text={category}
                                clicked={() => handleClick(idx)} 
                                active={activeCategory === idx}
                                activeColor={{backgroundColor : categoriesColors[idx]}} 
                            />
                        )}                  
                    </ul>
                </nav>
                <Wrapper>
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
                </Wrapper>
            </section>
        </main>
    )
}