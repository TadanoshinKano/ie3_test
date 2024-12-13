import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center hover:text-light-blue transition-colors">
            <Image
              src="/IE3-Group_logo.png"
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
                <ul className="absolute hidden group-hover:block bg-navy-blue p-3 rounded-md shadow-lg min-w-[200px] z-50 top-full">
                  <li>
                    <Link href="/services/individual" className="block py-2 px-3 text-sm whitespace-nowrap text-gray-300 hover:text-light-blue transition-colors">
                      個人向け研修
                    </Link>
                  </li>
                  <li>
                    <span className="block py-2 px-3 text-sm whitespace-nowrap text-gray-500 cursor-not-allowed">
                      法人向け研修
                    </span>
                  </li>
                  <li>
                    <span className="block py-2 px-3 text-sm whitespace-nowrap text-gray-500 cursor-not-allowed">
                      AI導入コンサルティング
                    </span>
                  </li>
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
