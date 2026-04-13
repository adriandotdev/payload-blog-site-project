import '@/styles/global.css'
import { Poppins } from 'next/font/google'
import React from 'react'

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
    <html lang="en" className={`${poppins.className}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
