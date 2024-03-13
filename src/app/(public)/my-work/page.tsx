import ThreeDText from '@/components/ui/3dText/ThreeDText';
import styles from './page.module.scss';
import Projects from '@/components/customs/Projects/Projects';

export default function Page () {
    
    return (         
        <main className={styles["my-work"]}>
            <section>
                <h1>
                    <span>Mes </span>
                    <ThreeDText text='Projets' smaller={false}/>
                </h1>
                <Projects
                    isCategories={true}
                    isPaginate={true}
                    isSearchfield={false}
                    nbOfRows={2}
                />
            </section>
        </main>
    )
}