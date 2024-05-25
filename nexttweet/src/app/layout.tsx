import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import '../styles/Global.scss';
import Modals from '@/components/Modals/Modals';

// const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <section className='main_container'>
          {children}
        </section>
        <Modals />
      </body>
      
    </html>
  )
}
