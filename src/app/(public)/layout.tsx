"use client"

import Header from '@/components/customs/Header/Header'
import Footer from '@/components/customs/Footer/Footer'
import routes from './routes'
import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className={`layout`}>
            <Header routes={routes} admin={false}/>
            {children}
        </div>
        <Footer />
      </QueryClientProvider>
    </>
  )
}
