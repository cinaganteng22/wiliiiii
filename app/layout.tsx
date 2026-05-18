import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'W — Fashion Store',
  description: 'Toko fashion premium Brand W',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
