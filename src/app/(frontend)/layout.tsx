import '@/styles/global.css'
import { ThemeProvider } from 'next-themes'
import { Aboreto, Montserrat, Poppins } from 'next/font/google'
import React from 'react'
import LayoutFooter from './_components/LayoutFooter'
import LayoutHeader from './_components/LayoutHeader'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const poppins = Poppins({
  weight: ['700', '600', '500', '400'],
  subsets: ['latin'],
})

const aboreto = Aboreto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-aboreto',
})

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${poppins.className} ${aboreto.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col justify-between min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LayoutHeader />
          <main>{children}</main>
          <LayoutFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
