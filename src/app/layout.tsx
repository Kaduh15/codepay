import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'CodePay',
  description: 'Checkout transparente para seu negócio.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <Analytics />
      <body
        className={twMerge(
          inter.variable,
          'mx-auto min-h-screen font-sans text-slate-700',
        )}
      >
        {children}
      </body>
    </html>
  )
}
