import Image from 'next/image'
import styles from './styles/modules/index.module.css'
import projects from '../content/project.json'

export default function Home() {

  const test = projects.map((el) =>el.category_name)
  const category_name = test.filter((x, i) => test.indexOf(x) === i);

  return (
   <main className={styles.main}>

   </main>
  )
}
