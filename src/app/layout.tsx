import './globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts/fonts'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"/>
      </head>
      <body className={`${inter.className} 2xl:mx-0`}>{children}</body>
    </html>
  )
}
