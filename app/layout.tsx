import './styles/globals.scss'
import styles from './styles/modules/RootLayout.module.scss'
import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CABOCEL Benoit portfolio',
  description: 'Discover me with my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.layout}`}>
          <Header />
          {children}
          <Footer classes={[styles.footer]}/>
      </body>
    </html>
  )
}
