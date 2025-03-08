import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IE3-Group Inc.</h3>
            <p className="text-sm">AIを広める - 社会に貢献する新時代のスキル</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-light-blue transition-colors">会社概要</Link></li>
              <li><Link href="/services" className="hover:text-light-blue transition-colors">サービス</Link></li>
              <li><Link href="/careers" className="hover:text-light-blue transition-colors">採用情報</Link></li>
              <li><Link href="/contact" className="hover:text-light-blue transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li><Link href="/services/individual" className="hover:text-light-blue transition-colors">個人向け研修</Link></li>
              <li><Link href="/services/corporate" className="hover:text-light-blue transition-colors">法人向け研修</Link></li>
              <li><Link href="/services/consulting" className="hover:text-light-blue transition-colors">AI導入コンサルティング</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-sm">〒150-0041</p>
            <p className="text-sm">東京都渋谷区神南１丁目１１−４</p>
            <p className="text-sm">ＦＰＧリンクス神南 5階</p>
            <p className="text-sm mt-2">TEL: 03-6277-6564</p>
            <p className="text-sm">Email: info@ie3-group.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2025 IE3-Group Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

