import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IRONLAND - Professional Tool Bag Manufacturer',
  description: 'Leading manufacturer of high-quality tool bags, tool kits, and custom OEM/ODM solutions. Serving global B2B clients since 2005.',
  keywords: 'tool bag, tool kit, OEM, ODM, wholesale, manufacturer, factory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
