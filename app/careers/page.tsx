import Image from "next/image"
import Link from "next/link"

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 bg-dark-bg z-0">
          <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-navy-blue/80 to-deep-purple/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fadeInUp neon-text">
              採用<span className="text-gradient">情報</span>
            </h1>
            <p className="text-xl text-tech-gray mb-8 animate-fadeInUp delay-100">
              あなたの可能性を最大限に引き出す環境がここにあります
            </p>
          </div>
        </div>
        
        {/* 装飾用ライン */}
        <div className="absolute h-[1px] w-full bottom-0 bg-light-blue/30 shadow-[0_0_8px_#38bdf8]"></div>
      </section>
      
      {/* メッセージセクション */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-navy-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white neon-text">
                  <span className="text-gradient">メッセージ</span>
                </h2>
                <div className="glass-effect p-8 rounded-xl border border-light-blue/20 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <p className="text-xl mb-6 leading-relaxed text-tech-gray font-medium">
                    「成果に見合った報酬を得たい」<br />
                    「最新鋭の技術を学びたい」<br />
                    「もっと自由に、自分の可能性を試したい」<br />
                    <br />
                    そんなあなたの挑戦をお待ちしています！
                  </p>
                  <p className="text-xl font-bold text-gradient">
                    我々と一緒に、新しい未来を創造しましょう。
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-deep-purple/30 z-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/careers-message.jpg"
                    alt="採用メッセージ"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 募集職種セクション */}
      <section className="py-20 bg-gradient-to-b from-navy-blue to-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center neon-text">
              募集<span className="text-gradient">職種</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 営業職 */}
              <div className="glass-effect rounded-xl border border-light-blue/20 p-8 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 neon-text">営業職（業務委託・インターン）</h3>
                <p className="text-light-blue mb-6">経験者大歓迎！あなたのスキルを活かせる環境がここに</p>
                <p className="text-tech-gray mb-6 leading-relaxed">
                  業界トップクラスの営業マンたちと肩を並べて働き、スキルをさらに磨きませんか？<br />
                  成果をダイレクトに反映するフルコミッション制を採用。<br />
                  あなたの努力と実力が正当に評価される職場です。
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-tech-gray group-hover:text-light-blue transition-colors duration-300">
                    <div className="w-6 h-6 bg-blue-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    営業経験者優遇！
                  </li>
                  <li className="flex items-center text-tech-gray group-hover:text-light-blue transition-colors duration-300">
                    <div className="w-6 h-6 bg-blue-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    高い収入を目指せる環境
                  </li>
                  <li className="flex items-center text-tech-gray group-hover:text-light-blue transition-colors duration-300">
                    <div className="w-6 h-6 bg-blue-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    プロフェッショナルな仲間と共に成長
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="group relative px-6 py-4 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-base font-medium transition-all duration-300 hover:bg-light-blue/20 hover:scale-105 neon-box inline-flex items-center w-full justify-center"
                >
                  <span className="relative z-10">応募する</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span className="absolute inset-0 bg-light-blue/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
              
              {/* コンサルタント */}
              <div className="glass-effect rounded-xl border border-light-blue/20 p-8 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 neon-text">コンサルタント（業務委託・インターン）</h3>
                <p className="text-light-blue mb-6">未経験から始めるプロのコンサルタントへの道</p>
                <p className="text-tech-gray mb-6 leading-relaxed">
                  未経験でも心配いりません！充実したサポート体制のもと、クライアントワークを通じて実践的なスキルを磨けます。<br />
                  成果がダイレクトに反映されるフルコミッション制を採用。<br />
                  「努力が報われる環境」で、新しいキャリアをスタートしませんか？
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-tech-gray group-hover:text-light-blue transition-colors duration-300">
                    <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    未経験者積極募集中！
                  </li>
                  <li className="flex items-center text-tech-gray group-hover:text-light-blue transition-colors duration-300">
                    <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    実践を通じてスキルアップ
                  </li>
                  <li className="flex items-center text-tech-gray group-hover:text-light-blue transition-colors duration-300">
                    <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    成果を正当に評価するフルコミッション制
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="group relative px-6 py-4 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-base font-medium transition-all duration-300 hover:bg-light-blue/20 hover:scale-105 neon-box inline-flex items-center w-full justify-center"
                >
                  <span className="relative z-10">応募する</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span className="absolute inset-0 bg-light-blue/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* お問い合わせCTAセクション */}
      <section className="py-16 glass-effect relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white neon-text">
              あなたの<span className="text-gradient">可能性</span>を広げよう
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              私たちはあなたの挑戦を待っています。
              まずはお気軽にお問い合わせください。
            </p>
            <Link 
              href="/contact"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-light-blue text-navy-blue text-lg font-medium transition-all duration-300 hover:bg-light-blue/90 hover:scale-105 inline-block"
            >
              <span className="relative z-10">応募はこちら</span>
              <span className="absolute inset-0 bg-white/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
