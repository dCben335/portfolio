import Header from '@/components/customs/Header/Header'
import Footer from '@/components/customs/Footer/Footer'
import routes from './routes'
import { ReactNode } from 'react'

export const metadata = {
  title: 'CABOCEL Benoit portfolio',
  description: 'Discover me with my skills and projects',
}

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
        <div className={`layout`}>
            <Header routes={routes} admin={false}/>
            {children}
        </div>
        <Footer />
    </>
  )
}
