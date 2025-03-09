import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

// モダンなフォントの設定
const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IE3-Group | AIを広める、未来を創る',
  description: 'IE3-Groupは、AIの力を活用して個人と企業の成長を支援します。最新のテクノロジーとノウハウを提供し、あなたのビジネスを次のレベルへ。',
  keywords: 'AI, 人工知能, 研修, コンサルティング, 教育, デジタルトランスフォーメーション',
  authors: [{ name: 'IE3-Group Inc.' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className={outfit.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}