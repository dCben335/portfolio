import Header from '@/components/organisms/PortalHeader/PortalHeader'
import Footer from '@/components/organisms/Footer/Footer'
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
          <Header routes={routes} />
          {children}
      </div>
      <Footer />
    </>
  )
}
