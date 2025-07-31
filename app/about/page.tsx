// import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
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
              テクノロジーで<span className="text-gradient">未来</span>を創る
            </h1>
            <p className="text-xl text-tech-gray mb-8 animate-fadeInUp delay-100">
              IE3-Groupは、AIの可能性を広め、新しい価値を創造し、
              持続可能な社会の実現に貢献します。
            </p>
          </div>
        </div>
        
        {/* 装飾用ライン */}
        <div className="absolute h-[1px] w-full bottom-0 bg-light-blue/30 shadow-[0_0_8px_#38bdf8]"></div>
      </section>
      
      {/* ミッション・ビジョン・バリューセクション */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-navy-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="text-gradient">ミッション</span>
                </h2>
                <div className="glass-effect p-8 rounded-xl border border-light-blue/20 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <h3 className="text-2xl font-semibold text-white mb-4 neon-text">「AIを広める」ことに込めた想い</h3>
                  <p className="text-tech-gray mb-6 leading-relaxed">
                    私たちは、「AIを広める」というビジョンのもと、すべての人々に技術を活かす力を届けたいと考えています。AIはもはや特定の専門家だけのものではなく、社会全体の発展に貢献できる力を秘めています。私たちの目指す未来は、AIを身近な存在にすることで、個々の人々が新しい可能性を切り開き、社会全体がより良い方向へ進むことができる環境を作り出すことです。
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-deep-purple/30 z-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-gradient rounded-full flex items-center justify-center neon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-dark-bg/70 backdrop-blur-sm p-4 rounded-xl">
                      <p className="text-white text-center font-medium">
                        「すべての人にAIの力を」
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pl-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="text-gradient">ビジョン</span>
                </h2>
                <div className="glass-effect p-8 rounded-xl border border-light-blue/20 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <h3 className="text-2xl font-semibold text-white mb-4 neon-text">テクノロジーを通じた社会貢献への姿勢</h3>
                  <p className="text-tech-gray mb-6 leading-relaxed">
                    テクノロジーは社会のあらゆる構造に影響を与える無限の可能性を持っています。私たちは、AIを活用することで、教育、医療、環境などさまざまな領域で、それぞれの課題解決のための手助けをしたいと考えています。私たちは常に社会貢献を最優先に、AI技術を導入し、普及させる活動を行い、持続可能で豊かな未来を共に作り上げていくことを目指しています。
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-10">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 to-neon-blue/30 z-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-cyber-gradient rounded-full flex items-center justify-center neon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-dark-bg/70 backdrop-blur-sm p-4 rounded-xl">
                      <p className="text-white text-center font-medium">
                        「テクノロジーで社会課題を解決する」
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 企業情報セクション */}
      <section className="py-20 bg-gradient-to-b from-navy-blue to-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center neon-text">
              会社<span className="text-gradient">情報</span>
            </h2>
            <div className="glass-effect rounded-xl border border-light-blue/20 overflow-hidden shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-light-blue/20">
                  <div className="flex items-start mb-8">
                    <div className="w-12 h-12 bg-blue-gradient rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">会社名</h3>
                      <p className="text-tech-gray">IE3-Group株式会社</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">住所</h3>
                      <p className="text-tech-gray">〒150-0041<br />東京都渋谷区神南１丁目１１−４<br />ＦＰＧリンクス神南 5階</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-8">
                    <div className="w-12 h-12 bg-purple-gradient rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">メールアドレス</h3>
                      <a href="mailto:info@ie3-group.com" className="text-light-blue hover:text-neon-blue transition-colors duration-300">
                        info@ie3-group.com
                      </a>
                    </div>
                  </div>
                </div>
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
              お気軽に<span className="text-gradient">ご相談</span>ください
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              AIの導入や活用方法について、お客様のニーズに合わせた最適な提案をいたします。
              まずはお問い合わせから。
            </p>
            <Link 
              href="/contact"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-light-blue text-navy-blue text-lg font-medium transition-all duration-300 hover:bg-light-blue/90 hover:scale-105 inline-block"
            >
              <span className="relative z-10">お問い合わせはこちら</span>
              <span className="absolute inset-0 bg-white/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
