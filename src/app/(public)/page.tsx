import styles from './page.module.scss';
import ProgLanguages from '@/app/(public)/_components/ProgLanguages/ProgLanguages';
import ThreeDText from '@/components/ui/3dText/ThreeDText';
import Form from '@/app/(public)/_components/Form/Form';
import Button from '@/components/ui/Button/Button';

import { frameworks } from '@/components/Icons/PL/PL';
import TypeScript from '@/components/Icons/PL/TypeScript/TypeScript';
import { GroupForm } from "@/types/types";
import Projects from '@/components/customs/Projects/Projects';

const formDatas: GroupForm[] = [
  {
    "placeholder": "Jonah",
    "label": "prénom",
    "type": "text",
    "name": "firstName"
  },
  {
    "placeholder": "Dupont",
    "label": "nom",
    "type": "text",
    "name": "lastName"
  },
  {
    "placeholder": "jonah.dupont@gmail.com",
    "label": "email",
    "type": "email",
    "name": "email"
  },
  {
    "placeholder": "Bonjour Monsieur",
    "label": "message",
    "type": "textarea",
    "name": "message"
  }
]

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          <span>Bonjour, je suis </span>
          <ThreeDText text='Benoît' smaller={false}/>
          <br />
          <span className={styles.subtitle}><ThreeDText text='Full stack' smaller={true} /> developer Junior</span>
        </h1>
      </section>
      <section className={styles.about}>
        <h2>Qui je suis</h2>
        <div className={styles.grid}>
          <figure>
            <img src="/assets/images/me.png" alt="" />
          </figure>
          <div>
            <p>Bonjour, je m&apos;appelle Benoit et je suis un étudiant français passionné des métiers de l&apos;internet et du multimédia. Mon objectif est de devenir un développeur web fullstack polyvalent et créatif. Actuellement en formation en BUT Métiers de l&apos;internet et du Multimédia, je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences et ma compréhension des technologies web modernes.</p>
            <ProgLanguages 
              languages={{...frameworks, "TypeScript": <TypeScript />}}
            />
          </div>
        </div>    
        <Button renderAs='link' href="/about" className={styles.link}>voir plus</Button> 
      </section>

      <section className={styles.work}>
        <h2>Mes derniers Projets</h2>
          <Projects
            isCategories={false}
            isPaginate={false}
            isSearchfield={false}
            nbOfRows={2}
          />
        <Button renderAs="link" href="/my-work" className={styles.link}>voir plus</Button>
      </section>
      

      {formDatas &&
        <section className={styles.contact}>
          <h2>Contactez moi</h2>
          <div>
            <Form 
              groupForms={formDatas}
              submitLink="https://eo1za6eg6grst3h.m.pipedream.net"
              successMessage={"Envoi réussi"}
              failedMessage={"Une erreur est survenue, Veuillez réessayer plus tard"}
            />
          </div>
        </section>  
      }

    </main>
  )
}
