import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy-blue to-dark-bg text-white relative overflow-hidden">
      {/* サイバーグリッドの背景 */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10"></div>
      
      {/* ネオンラインエフェクト */}
      <div className="absolute h-[1px] w-full top-0 bg-light-blue/30 shadow-[0_0_8px_#38bdf8]"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/IE3-Group_logo.png"
                alt="IE3-Group Logo"
                width={150}
                height={50}
                className="max-h-10 w-auto"
              />
            </div>
            <p className="text-sm text-tech-gray">AIを広める - 社会に貢献する新時代のスキル</p>
            <div className="flex space-x-4 pt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-tech-gray hover:text-light-blue transition-colors duration-300" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-tech-gray hover:text-light-blue transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-tech-gray hover:text-light-blue transition-colors duration-300" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block pb-2 neon-text">
              リンク
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-light-blue/50"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-tech-gray hover:text-light-blue transition-colors duration-300 flex items-center group">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="ml-2">会社概要</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-tech-gray hover:text-light-blue transition-colors duration-300 flex items-center group">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="ml-2">サービス</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-tech-gray hover:text-light-blue transition-colors duration-300 flex items-center group">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="ml-2">採用情報</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-tech-gray hover:text-light-blue transition-colors duration-300 flex items-center group">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="ml-2">お問い合わせ</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block pb-2 neon-text">
              サービス
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-light-blue/50"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/individual" className="text-tech-gray hover:text-light-blue transition-colors duration-300 flex items-center group">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="ml-2">個人向け研修</span>
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="text-tech-gray hover:text-light-blue transition-colors duration-300 flex items-center group">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="ml-2">法人向け研修</span>
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-tech-gray hover:text-light-blue transition-colors duration-300 flex items-center group">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="ml-2">AI導入コンサルティング</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block pb-2 neon-text">
              お問い合わせ
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-light-blue/50"></span>
            </h4>
            <div className="space-y-2">
              <p className="text-tech-gray flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>〒150-0041<br />東京都渋谷区神南１丁目１１−４<br />ＦＰＧリンクス神南 5階</span>
              </p>
              <p className="text-tech-gray flex items-center">
                <svg className="w-5 h-5 mr-2 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@ie3-group.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-blue text-center">
          <p className="text-sm text-tech-gray">&copy; {new Date().getFullYear()} IE3-Group Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

