"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <Image
              src="/IE3-Group_logo.png"
              alt="IE3-Group Logo"
              width={150}
              height={50}
              className={`max-h-12 w-auto transition-all duration-300 ${
                scrolled ? 'brightness-100' : 'brightness-110'
              }`}
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li>
                <Link href="/about" className="hover-underline text-white hover:text-neon-blue transition-colors duration-300">
                  会社概要
                </Link>
              </li>
              <li className="relative group">
                <Link href="/services" className="hover-underline text-white hover:text-neon-blue transition-colors duration-300 flex items-center">
                  サービス
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <ul className="absolute hidden group-hover:block glass-effect p-3 rounded-md min-w-[200px] z-50 top-full shadow-[0_0_15px_rgba(56,189,248,0.3)] border border-light-blue/20 mt-1">
                  <li>
                    <Link href="/services/individual" className="block py-2 px-3 text-sm whitespace-nowrap text-white hover:text-neon-blue transition-colors duration-300">
                      個人向け研修
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/corporate" className="block py-2 px-3 text-sm whitespace-nowrap text-white hover:text-neon-blue transition-colors duration-300">
                      法人向け研修
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/consulting" className="block py-2 px-3 text-sm whitespace-nowrap text-white hover:text-neon-blue transition-colors duration-300">
                      AI導入コンサルティング
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/careers" className="hover-underline text-white hover:text-neon-blue transition-colors duration-300">
                  採用
                </Link>
              </li>
              <li>
                <Button asChild className="bg-transparent border border-light-blue/50 text-white hover:bg-light-blue/20 hover:text-white transition-all duration-300 rounded-full px-6 neon-box">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
              </li>
            </ul>
          </nav>

          {/* モバイルメニューボタン */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div className={`md:hidden glass-effect mt-4 rounded-lg overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="p-4 space-y-3">
            <li>
              <Link 
                href="/about" 
                className="block py-2 text-white hover:text-neon-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                会社概要
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block py-2 text-white hover:text-neon-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                サービス
              </Link>
            </li>
            <li>
              <Link 
                href="/services/individual" 
                className="block py-2 pl-4 text-sm text-white hover:text-neon-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                個人向け研修
              </Link>
            </li>
            <li>
              <Link 
                href="/services/corporate" 
                className="block py-2 pl-4 text-sm text-white hover:text-neon-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                法人向け研修
              </Link>
            </li>
            <li>
              <Link 
                href="/services/consulting" 
                className="block py-2 pl-4 text-sm text-white hover:text-neon-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI導入コンサルティング
              </Link>
            </li>
            <li>
              <Link 
                href="/careers" 
                className="block py-2 text-white hover:text-neon-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                採用
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block py-2 text-white hover:text-neon-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
