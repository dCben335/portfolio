import Button from "@/components/ui/Button/Button"
import styles from './Categories.module.scss'
import { useState } from "react"

type ProjectCategoriesProps = {
    categories: string[],
    clicked: Function,
    activeCategory: number
}

export default function ProjectCategories({ categories, clicked, activeCategory } : ProjectCategoriesProps) {
    const [opened, setOpened] = useState(false)

    const handleClick = () => {
        setOpened(!opened)
    }

    const categoriesColors:string[] = categories.map((el, idx) => `#${Math.floor(((idx + 1) * 0.85/categories.length) * 16777215).toString(16)}`)

    return (
        <div className={styles.categories}>
            <Button 
                clicked={() => handleClick()}
                active={activeCategory !== undefined}
            >{"filters"}</Button>
            <ul className={opened ? styles.opened : ''}>
                {categories.sort().map((category, idx) => 
                    <li key={idx}>
                        <Button 
                            clicked={() => clicked && clicked(idx)} 
                            active={activeCategory === idx}
                            activeColor={{backgroundColor : categoriesColors[idx]}} 
                        >{category}</Button>
                    </li>
                )}                  
            </ul>
        </div>  
    )

}