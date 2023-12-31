import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const lora = Lora({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-lora",
})

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
      <body className={`${lora.variable} ${inter.className}`}>{children}</body>
    </html>
  )
}
