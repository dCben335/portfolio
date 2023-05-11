"use client"

import projects from '../../content/project.json';
import { useEffect, useState } from 'react';
import Project from '@/types/project';
import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';
import { IndexInfo } from 'typescript';


export default function Page ({params}) {

    const [projectList, setProjectList] = useState<Array<Project>>(projects)
    const [activeCategory, setActiveCategory] = useState<Number>()

    const categories:Array<string> = projects.map((project) => project.category_name).filter((item, idx, arr) => arr.indexOf(item) == idx)
    const [categoriesColors, setCategoriesColor]  = useState<Array<string>>(categories.map((el, idx) => `#${Math.floor(((idx + 1) * 0.85/categories.length) * 16777215).toString(16)}`))
    
    console.log(params)

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
                <div>
                    {projectList.map((project, idx) => 
                        <Link href={`/work/${project.project_name.split(' ').join('_')}`} key={idx}>
                            <p>
                                {project.project_name}
                            </p>
                        </Link>
                    )}                
                </div>
            </section>
        </main>
    )
}