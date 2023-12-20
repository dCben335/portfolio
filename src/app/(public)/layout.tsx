import Header from '@/components/organisms/PublicHeader/PublicHeader'
import Footer from '@/components/organisms/Footer/Footer'
import routes from './routes'
import { ReactNode } from 'react'


export default function PublicLayout({
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
