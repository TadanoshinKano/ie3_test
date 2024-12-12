import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="IE3-Group Logo"
              width={150}
              height={50}
              className="max-h-12 w-auto"
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/about" className="hover:text-light-blue transition-colors">会社概要</Link></li>
              <li className="relative group">
                <Link href="/services" className="hover:text-light-blue transition-colors">サービス</Link>
                <ul className="absolute hidden group-hover:block bg-navy-blue p-2 rounded-md shadow-lg">
                  <li><Link href="/services/individual" className="block py-1 px-2 hover:text-light-blue transition-colors">個人向け研修</Link></li>
                  <li><Link href="/services/corporate" className="block py-1 px-2 hover:text-light-blue transition-colors">法人向け研修</Link></li>
                  <li><Link href="/services/consulting" className="block py-1 px-2 hover:text-light-blue transition-colors">AI導入コンサルティング</Link></li>
                </ul>
              </li>
              <li><Link href="/careers" className="hover:text-light-blue transition-colors">採用</Link></li>
              <li>
                <Button asChild variant="outline" className="bg-light-blue text-navy-blue hover:bg-navy-blue hover:text-white border-light-blue">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

