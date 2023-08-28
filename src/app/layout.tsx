import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cuprum } from 'next/font/google'
import ReactQueryProvider from './ReactQueryProvider'
import Head from 'next/head'
import StoreProvider from '@/redux/StoreProvider'
import { CartDrawer } from '@/components/CartActions'

const inter = Inter({ subsets: ['latin'] })
const cuprum = Cuprum({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SHOPAZONE',
  description: 'Shop for your favorite products',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <ReactQueryProvider>
        <html lang="en" >
          {/* add fav icons */}
          <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link
              rel="icon"
              href="/icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />

          </head>

          <body >
            <Header />
            <main
              className={` ${cuprum.className} w-full h-full flex flex-col scroll-smooth`}
            >
              {children}
              <CartDrawer/>
            </main>
          </body>
        </html>
      </ReactQueryProvider>
    </StoreProvider>
  )
}
