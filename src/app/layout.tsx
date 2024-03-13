"use client"

import './globals.scss'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient();

export default function RootLayout({
  children,
} : {
  children: ReactNode,
}) {
  return (
    <html lang="fr">
      <body className={`${inter?.className ? inter.className : "" }`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>      
      </body>
    </html>
  )
}
