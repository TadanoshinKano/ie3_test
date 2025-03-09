import Link from 'next/link'
import Image from 'next/image'

export default function CorporateTraining() {
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
              法人向け<span className="text-gradient">AI</span>研修
            </h1>
            <p className="text-xl text-tech-gray mb-8 animate-fadeInUp delay-100">
              企業のAI活用能力向上をトータルサポート
            </p>
          </div>
        </div>
        
        {/* 装飾用ライン */}
        <div className="absolute h-[1px] w-full bottom-0 bg-light-blue/30 shadow-[0_0_8px_#38bdf8]"></div>
      </section>
      
      {/* 概要セクション */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-navy-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white neon-text">
                  <span className="text-gradient">概要</span>
                </h2>
                <div className="glass-effect p-8 rounded-xl border border-light-blue/20 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <p className="text-tech-gray mb-6 leading-relaxed">
                    IE3-Groupの法人向けAI研修は、企業のニーズに合わせてカスタマイズされたプログラムを提供します。
                    AI技術の基礎から応用まで、幅広いトピックをカバーし、社員のスキルアップと組織全体のAI活用能力の向上を支援します。
                  </p>
                  <div className="border-l-4 border-light-blue pl-4">
                    <p className="text-white leading-relaxed">
                      業界特有の課題に対応したケーススタディや、実践的なワークショップを通じて、
                      AIを実際のビジネスシーンで活用するための知識とスキルを効果的に習得できます。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 to-neon-blue/30 z-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/company.jpg"
                    alt="法人向けAI研修"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-cyber-gradient rounded-full flex items-center justify-center neon-box opacity-90">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 研修の特徴セクション */}
      <section className="py-20 bg-gradient-to-b from-navy-blue to-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center neon-text">
              研修の<span className="text-gradient">特徴</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">企業のニーズに合わせたカスタマイズカリキュラム</h3>
                <p className="text-tech-gray">
                  業種や企業規模、事業内容に応じて最適なカリキュラムを設計。貴社固有の課題に焦点を当てた研修内容を提供します。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">業界特化型のケーススタディとワークショップ</h3>
                <p className="text-tech-gray">
                  実際の業界事例をベースにしたケーススタディを通じて、実務に直結するAI活用スキルを身につけます。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">オンサイトまたはリモートでの柔軟な研修形式</h3>
                <p className="text-tech-gray">
                  貴社のニーズに合わせてオンサイトまたはリモート形式で研修を実施。ハイブリッド形式にも対応可能です。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">最新のAI技術トレンドと実践的な応用方法の学習</h3>
                <p className="text-tech-gray">
                  最新のAI技術動向を学びながら、実際のビジネスにどう応用できるかを実践的に習得します。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">社内AI人材の育成と組織全体のAI理解度向上</h3>
                <p className="text-tech-gray">
                  AI専門人材の育成だけでなく、組織全体のAIリテラシー向上を目指した包括的な研修を提供します。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">研修後のフォローアップとサポート体制</h3>
                <p className="text-tech-gray">
                  研修終了後も定期的なフォローアップとサポートを提供し、継続的なAIスキル向上をサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* お問い合わせセクション */}
      <section className="py-20 bg-gradient-to-br from-navy-blue via-dark-bg to-deep-purple/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        
        {/* 装飾用要素 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-light-blue/0 via-light-blue/50 to-light-blue/0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white neon-text animate-fadeInUp">
              <span className="text-gradient">お問い合わせ</span>・カスタマイズ相談
            </h2>
            <p className="text-xl text-tech-gray mb-12 max-w-3xl mx-auto animate-fadeInUp delay-100">
              法人向けAI研修のカスタマイズや詳細については、お問い合わせください。
              貴社のニーズに合わせた最適な研修プランをご提案いたします。
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
              <div className="glass-effect rounded-xl border border-light-blue/30 p-8 transition-all duration-300 hover:border-light-blue/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] group animate-fadeInUp delay-200 flex-1 max-w-md">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mr-5 neon-box group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-tech-gray mb-1">メールでのお問い合わせ</div>
                    <a href="mailto:info@ie3-group.com" className="text-2xl text-light-blue hover:text-neon-blue transition-colors duration-300 font-semibold neon-text">
                      info@ie3-group.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/contact"
              className="group relative px-10 py-5 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-lg font-medium transition-all duration-500 hover:bg-light-blue/10 hover:scale-105 hover:border-light-blue neon-box inline-flex items-center animate-fadeInUp delay-300"
            >
              <span className="relative z-10 font-semibold">お問い合わせフォームへ</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
