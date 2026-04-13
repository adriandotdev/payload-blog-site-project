import '@/styles/global.css'
import { ThemeProvider } from 'next-themes'
import { Poppins } from 'next/font/google'
import React from 'react'
import LayoutHeader from './_components/LayoutHeader'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const poppins = Poppins({
  weight: ['700', '600', '500', '400'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${poppins.className}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LayoutHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
