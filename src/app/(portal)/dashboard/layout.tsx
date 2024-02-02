import Header from '@/components/customs/Header/Header'
import Footer from '@/components/customs/Footer/Footer'
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
