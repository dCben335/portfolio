import Button from "@/components/atoms/Button/Button"
import styles from './ProjectCategories.module.scss'
import { useState } from "react"

export default function ProjectCategories({
    categories,
    clicked,
    activeCategory
} : {
    categories: Array<string>,
    clicked: Function| undefined,
    activeCategory: number
}) {

    const [opened, setOpened] = useState(false)

    const handleClick = () => {
        setOpened(!opened)
    }

    const categoriesColors:Array<string>  = categories.map((el, idx) => `#${Math.floor(((idx + 1) * 0.85/categories.length) * 16777215).toString(16)}`)

    return (
        <nav className={styles.categories}>
            <Button 
                text={"filters"}
                clicked={() => handleClick()}
            />
            <ul className={opened ? styles.opened : ''}>
                {categories.sort().map((category, idx) => 
                    <Button 
                        key={idx} 
                        text={category}
                        clicked={() => clicked && clicked(idx)} 
                        active={activeCategory === idx}
                        activeColor={{backgroundColor : categoriesColors[idx]}} 
                    />
                )}                  
            </ul>
        </nav>  
    )

}