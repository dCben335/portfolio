import styles from './page.module.scss'
import Projects from '@/components/customs/Projects/Projects';

export default  function Page() {
   
    return (         
        <main className={styles["my-work"]}>
            <section>
                <h1>
                    <span>Dashboard {"/>"}</span>
                </h1>
            
                <Projects
                    isCategories={true}
                    isPaginate={true}
                    isSearchfield={true}
                    nbOfRows={4}
                />                  
            </section>          
        </main>
    )
}