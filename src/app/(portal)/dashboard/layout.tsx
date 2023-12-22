import Header from '@/app/features/Header/Header'
import Footer from '@/components/Footer/Footer'
import routes from './routes'


import { ReactNode } from 'react'

export default async function PublicLayout({
  children,
}: {
  children: ReactNode
}) {
  
  return (
    <>
      <div className={`layout`}>
          <Header routes={routes} admin={true}/>
          {children}
      </div>
      <Footer />
    </>
  )
}
