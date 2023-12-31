import Menu from '@/components/Menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { IProps } from '@/lib/props.interface'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Menu />
        <section className=' container mx-auto py-10'>{children}</section>
      </body>
    </html>
  )
}
