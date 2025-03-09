import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
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
              最先端の<span className="text-gradient">AI</span>サービス
            </h1>
            <p className="text-xl text-tech-gray mb-8 animate-fadeInUp delay-100">
              個人から企業まで、あらゆるニーズに応える
              カスタマイズされたAIソリューションを提供します。
            </p>
          </div>
        </div>
        
        {/* 装飾用ライン */}
        <div className="absolute h-[1px] w-full bottom-0 bg-light-blue/30 shadow-[0_0_8px_#38bdf8]"></div>
      </section>
      
      {/* サービス一覧セクション */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-navy-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center neon-text">
                サービス<span className="text-gradient">一覧</span>
              </h2>
              <p className="text-xl text-tech-gray text-center max-w-3xl mx-auto">
                AIの力を最大限に活用するための多様なサービスを提供しています。
                あなたのニーズに合わせた最適なソリューションを見つけてください。
              </p>
            </div>
            
            <div className="space-y-20">
              {/* 個人向けAI研修 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-deep-purple/30 z-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/school.jpg"
                    alt="個人向けAI研修"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-dark-bg/70 backdrop-blur-sm p-4">
                      <h3 className="text-2xl font-bold text-white neon-text text-center">個人向けAI研修</h3>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect p-8 rounded-xl border border-light-blue/20 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <h3 className="text-2xl font-semibold text-white mb-4 neon-text">個人向けAI研修</h3>
                  <p className="text-tech-gray mb-6 leading-relaxed">
                    初心者向け講座から中級・上級へのステップアップコースまで、幅広いレベルに対応した研修プログラムを提供しています。個人のスキルアップやキャリアアップを支援します。
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-blue-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      AIの基礎から応用まで幅広くカバー
                    </li>
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-blue-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      実践的な演習を通じた学習
                    </li>
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-blue-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      少人数制クラスでの丁寧な指導
                    </li>
                  </ul>
                  <Link 
                    href="/services/individual"
                    className="group relative px-6 py-3 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-base font-medium transition-all duration-300 hover:bg-light-blue/20 hover:scale-105 neon-box inline-flex items-center"
                  >
                    <span className="relative z-10">詳細を見る</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="absolute inset-0 bg-light-blue/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </div>
              </div>
              
              {/* 法人向けAI研修 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-80 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 to-neon-blue/30 z-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/company.jpg"
                    alt="法人向けAI研修"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-dark-bg/70 backdrop-blur-sm p-4">
                      <h3 className="text-2xl font-bold text-white neon-text text-center">法人向けAI研修</h3>
                    </div>
                  </div>
                </div>
                
                <div className="order-2 md:order-1 glass-effect p-8 rounded-xl border border-light-blue/20 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <h3 className="text-2xl font-semibold text-white mb-4 neon-text">法人向けAI研修</h3>
                  <p className="text-tech-gray mb-6 leading-relaxed">
                    社員研修パッケージとして、業界ニーズに合わせたカスタマイズが可能です。企業の特性や目標に合わせて、効果的なAI教育プログラムを設計・提供します。
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-cyber-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      企業ニーズに合わせたカリキュラム
                    </li>
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-cyber-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      オンサイトまたはリモートでの柔軟な研修
                    </li>
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-cyber-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      実際の業務に即したケーススタディ
                    </li>
                  </ul>
                  <Link 
                    href="/services/corporate"
                    className="group relative px-6 py-3 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-base font-medium transition-all duration-300 hover:bg-light-blue/20 hover:scale-105 neon-box inline-flex items-center"
                  >
                    <span className="relative z-10">詳細を見る</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="absolute inset-0 bg-light-blue/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </div>
              </div>
              
              {/* AI導入コンサルティング */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-deep-purple/30 z-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/consultant.jpg"
                    alt="法人向けAI導入コンサルティング"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-dark-bg/70 backdrop-blur-sm p-4">
                      <h3 className="text-2xl font-bold text-white neon-text text-center">AI導入コンサルティング</h3>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect p-8 rounded-xl border border-light-blue/20 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <h3 className="text-2xl font-semibold text-white mb-4 neon-text">AI導入コンサルティング</h3>
                  <p className="text-tech-gray mb-6 leading-relaxed">
                    組織内でのAI化戦略立案からPoC（概念実証）、運用支援まで包括的にサポートします。企業のデジタルトランスフォーメーションを加速し、競争力の向上を支援します。
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      AI導入戦略の策定
                    </li>
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      PoC（概念実証）の実施と評価
                    </li>
                    <li className="flex items-center text-tech-gray">
                      <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      AI運用体制の構築支援
                    </li>
                  </ul>
                  <Link 
                    href="/services/consulting"
                    className="group relative px-6 py-3 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-base font-medium transition-all duration-300 hover:bg-light-blue/20 hover:scale-105 neon-box inline-flex items-center"
                  >
                    <span className="relative z-10">詳細を見る</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="absolute inset-0 bg-light-blue/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
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
              ご要望に<span className="text-gradient">合わせた</span>サービスを
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              カスタマイズされたソリューションについてのご相談も承ります。
              お気軽にお問い合わせください。
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
