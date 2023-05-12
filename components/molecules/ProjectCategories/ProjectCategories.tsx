import Button from "@/components/atoms/Button/Button"
import styles from './ProjectCategories.module.css'

export default function ProjectCategories({
    categories,
    clicked,
    activeCategory
} : {
    categories: Array<string>,
    clicked: Function,
    activeCategory: number
}) {

    const categoriesColors:Array<string>  = categories.map((el, idx) => `#${Math.floor(((idx + 1) * 0.85/categories.length) * 16777215).toString(16)}`)
    
    return (
        <nav className={styles.categories}>
            <ul>
                {categories.map((category, idx) => 
                    <Button 
                        key={idx} 
                        text={category}
                        clicked={() => clicked(idx)} 
                        active={activeCategory === idx}
                        activeColor={{backgroundColor : categoriesColors[idx]}} 
                    />
                )}                  
            </ul>
        </nav>  
    )

}