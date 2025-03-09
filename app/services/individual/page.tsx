import Link from 'next/link'
import Image from 'next/image'

export default function IndividualTraining() {
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
              個人向け<span className="text-gradient">AI</span>研修
            </h1>
            <p className="text-xl text-tech-gray mb-8 animate-fadeInUp delay-100">
              AIの基礎から応用まで、あなたのスキルアップをサポート
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
                    IE3-Groupの個人向けAI研修は、AIの基礎から応用まで、幅広いレベルに対応したプログラムを提供しています。
                    初心者の方から、より高度なスキルを求める方まで、それぞれのニーズに合わせた学習環境を用意しています。
                  </p>
                  <div className="border-l-4 border-light-blue pl-4">
                    <p className="text-white leading-relaxed">
                      実践的な演習と最新の理論を組み合わせたカリキュラムで、AIスキルを効果的に習得できます。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-deep-purple/30 z-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/school.jpg"
                    alt="AI研修"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-gradient rounded-full flex items-center justify-center neon-box opacity-90">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">第一線で活躍する講師陣による指導</h3>
                <p className="text-tech-gray">
                  業界で実績のある専門家から直接学ぶことで、理論だけでなく実践的なノウハウも身につけられます。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">少人数制クラスでのインタラクティブな学習</h3>
                <p className="text-tech-gray">
                  少人数制のクラスで、一人ひとりに合わせた丁寧な指導と質問機会を提供します。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">実際の業界事例を用いた実践的なプロジェクト</h3>
                <p className="text-tech-gray">
                  実際の業界事例に基づくプロジェクトを通じて、実践的なスキルを効果的に習得できます。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">最新のAI技術とツールを使用した演習</h3>
                <p className="text-tech-gray">
                  業界で使用されている最新のAIツールと技術を使って実践的なスキルを学びます。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">オンラインとオフラインのハイブリッド形式</h3>
                <p className="text-tech-gray">
                  対面とオンラインを組み合わせて、柔軟に学習できる環境を提供します。
                </p>
              </div>
              
              <div className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">修了証の発行と就職・転職サポート</h3>
                <p className="text-tech-gray">
                  研修修了後は認定証を発行し、希望者には就職・転職のサポートも行います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 申し込みセクション */}
      <section className="py-16 glass-effect relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white neon-text">
              <span className="text-gradient">申し込み</span>方法
            </h2>
            <p className="text-xl text-tech-gray mb-8 animate-pulse">
              HPからの応募は現在締め切っております。もうしばらくお待ちください。
            </p>
            <div className="text-3xl font-bold text-gradient animate-pulse">
              Coming soon
            </div>
            
            <div className="mt-12">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-lg font-medium transition-all duration-300 hover:bg-light-blue/20 hover:scale-105 neon-box inline-flex items-center"
              >
                <span className="relative z-10">お問い合わせはこちら</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute inset-0 bg-light-blue/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
