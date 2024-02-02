import './globals.scss'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CABOCEL Benoit portfolio',
  description: 'Discover me with my skills and projects',
}

export default function RootLayout({
  children,
} : {
  children: ReactNode,
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
