import styles from '../styles/modules/legal.module.scss';
import Link from 'next/link';

export default function PolitiqueDeConfidentialite() {
    return (
        <main className={styles.legal}>
            <section>
                <h1>Politique de Confidentialité</h1>
                <div>
                    <p><em>En vigueur depuis 2023</em></p>
                </div>
                <div className={styles.grid}>
                    <article>
                        <h2>Introduction</h2>
                        <p>Dans le cadre de son activité, Benoît CABOCEL est amenée à collecter et à traiter des informations dont certaines sont qualifiées de «&nbsp;données personnelles&nbsp;». IOTA Solutions attache une grande importance au respect de la vie privée, et n’utilise que des donnes de manière responsable et confidentielle et dans une finalité précise.</p>
                    </article>
                    <article>
                        <h2>Données personnelles</h2>
                        <p>Sur le site web iota-solutions.fr, il y a 2 types de données susceptibles d’être recueillies :</p>
                        <ul>
                            <li><b>Les données transmises directement: </b>
                            Ces données sont celles que vous nous transmettez directement, via un formulaire de contact ou bien par contact direct par email. Sont obligatoires dans le formulaire de contact le champs «&nbsp;prénom et nom&nbsp;», «&nbsp;entreprise ou organisation&nbsp;» et «&nbsp;email&nbsp;».
                            </li>
                            <li><b>&nbsp;Les données collectées automatiquement: </b>
                            Lors de vos visites, une fois votre consentement donné, nous pouvons recueillir des informations anonymes de type &nbsp;» web analytics &nbsp;» relatives à votre navigation, la durée de votre consultation, votre type et version de navigateur. La technologie utilisée est le cookie.
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h2>Utilisation des données</h2>
                        <p>Les données que vous nous transmettez directement sont utilisées dans le but de vous re-contacter et/ou dans le cadre de la demande que vous nous faites. Les données &nbsp;» web analytics &nbsp;» sont collectées de forme anonyme (en enregistrant des adresses IP anonymes) par Google Analytics, Youtube, et nous permettent de mesurer l’audience de notre site web, les consultations et les éventuelles erreurs afin d’améliorer constamment l’expérience des utilisateurs. Ces données sont anonymes. Ces données sont utilisées par Benoît CABOCEL responsable du traitement des données, et ne seront jamais cédées à un tiers ni utilisées à d’autres fins que celles détaillées ci-dessus
                        </p>
                    </article>

                    <article>
                        <h2>Base légale</h2>                    
                        <p>Les données personnelles ne sont collectées qu’après consentement obligatoire de l’utilisateur. Ce consentement est valablement recueilli (boutons et cases à cocher), libre, clair et sans équivoque.</p>
                    </article>
                    <article>
                        <h2>Durée de conservation</h2>                    
                        <p>Les données seront sauvegardées durant une durée maximale de 3 ans.</p>
                    </article>
                    <article>
                        <h2>Cookies</h2>                    
                        <p>Voici la liste des cookies utilisées et leur objectif :</p>
                        <ul>
                            <li>Cookies Google Analytics 
                                <Link href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">liste exhaustive</Link> : Web analytics
                            </li>
                            <li>
                                CookieLawInfoConsent : Permet de garder en mémoire le fait que vous acceptez les cookies afin de ne plus vous importuner lors de votre prochaine visite.
                            </li>
                        </ul>
                    </article>   
                    <article>
                        <h2>Vos droits concernant les données personnelles</h2>
                        <p>Vous avez le droit de consultation, demande de modification ou d’effacement sur l’ensemble de vos données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données.
                        </p>    
                    </article>                     
                    <article>
                        <h2>Contact délégué à la protection des données</h2>
                        <p>M. CABOCEL Benoît</p>
                        <p>Par email : <Link href="mailto:benoit.cabocel.335@gmail.com">benoit.cabocel.335@gmail.com</Link></p>
                    </article>
                </div>
            </section>    
        </main>
    )
}