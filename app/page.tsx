import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション - モダンでハイテクな雰囲気 */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* 高度なグラデーションバックグラウンド */}
        <div className="absolute inset-0 bg-dark-bg">
          <div className="relative w-full h-full">
            {/* サイバーパターン */}
            <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
            
            {/* パーティクルアニメーション */}
            <div className="absolute inset-0 opacity-70">
              <div className="absolute w-4 h-4 bg-light-blue rounded-full animate-float1 shadow-[0_0_15px_#38bdf8]" style={{ top: '20%', left: '30%' }}></div>
              <div className="absolute w-5 h-5 bg-neon-blue rounded-full animate-float2 shadow-[0_0_20px_#00f5ff]" style={{ top: '60%', left: '70%' }}></div>
              <div className="absolute w-3 h-3 bg-deep-purple rounded-full animate-float3 shadow-[0_0_10px_#7c3aed]" style={{ top: '40%', left: '50%' }}></div>
              <div className="absolute w-2 h-2 bg-light-blue rounded-full animate-float1 shadow-[0_0_8px_#38bdf8]" style={{ top: '15%', left: '65%' }}></div>
              <div className="absolute w-6 h-6 bg-neon-blue rounded-full animate-float2 shadow-[0_0_25px_#00f5ff]" style={{ top: '75%', left: '25%' }}></div>
              <div className="absolute w-3 h-3 bg-deep-purple rounded-full animate-float3 shadow-[0_0_12px_#7c3aed]" style={{ top: '85%', left: '85%' }}></div>
            </div>
            
            {/* サイバーグリッドライン */}
            <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20"></div>
            
            {/* 動的なライン */}
            <div className="absolute h-[1px] w-full top-1/4 bg-light-blue/30 animate-slideRight"></div>
            <div className="absolute h-[1px] w-full top-2/4 bg-deep-purple/30 animate-slideLeft"></div>
            <div className="absolute h-[1px] w-full top-3/4 bg-neon-blue/30 animate-slideRight"></div>
            
            {/* グラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-navy-blue/80 to-deep-purple/20 animate-gradient"></div>
            
            {/* ノイズテクスチャ */}
            <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-5 mix-blend-overlay"></div>
          </div>
        </div>
        
        {/* メインコンテンツ */}
        <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp text-transparent bg-clip-text bg-gradient-to-r from-light-blue via-white to-neon-blue">
            AIを、<span className="neon-text">もっと身近に。</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-tech-gray animate-fadeInUp delay-100">
            IE3-Group - <span className="text-light-blue">あなたのAI活用</span>をサポートします
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadeInUp delay-200">
            <Link 
              href="/services"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border border-light-blue/50 text-white text-lg font-medium transition-all duration-300 hover:bg-light-blue/20 hover:scale-105 neon-box"
            >
              <span className="relative z-10">サービスを見る</span>
              <span className="absolute inset-0 bg-light-blue/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link 
              href="/contact"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-light-blue text-navy-blue text-lg font-medium transition-all duration-300 hover:bg-light-blue/90 hover:scale-105"
            >
              <span className="relative z-10">お問い合わせ</span>
              <span className="absolute inset-0 bg-white/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
          
          {/* スクロールインジケーター */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* サービス紹介セクション - モダンなグラスモーフィズムカード */}
      <section className="py-24 bg-gradient-to-b from-dark-bg to-navy-blue relative overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white neon-text">
              AIを広める、<span className="text-gradient">未来を創る</span>
            </h2>
            <p className="text-xl text-tech-gray">
              IE3-Groupは、AIの力を活用して、個人と企業の成長を支援します。
              最新のテクノロジーとノウハウを提供し、あなたのビジネスや学習を次のレベルへ。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* サービスカード 1 */}
            <div className="glass-effect rounded-xl p-6 group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] border border-light-blue/20">
              <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-3 group-hover:text-light-blue transition-colors duration-300">個人向け研修</h3>
              <p className="text-tech-gray text-center">
                AIの基礎から応用まで、個人のスキルアップを目的とした実践的な研修プログラムを提供します。初心者から上級者まで、レベルに応じたカリキュラムで効率的に学べます。
              </p>
              <div className="mt-6 text-center">
                <Link href="/services/individual" className="text-light-blue hover:text-neon-blue transition-colors duration-300 inline-flex items-center group">
                  <span>詳細を見る</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* サービスカード 2 */}
            <div className="glass-effect rounded-xl p-6 group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] border border-light-blue/20">
              <div className="w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-3 group-hover:text-light-blue transition-colors duration-300">法人向け研修</h3>
              <p className="text-tech-gray text-center">
                企業のAI導入に必要なスキルを社員に効率的に習得させるための研修プログラム。業種や企業規模に合わせたカスタマイズが可能で、実際のビジネス課題解決に直結します。
              </p>
              <div className="mt-6 text-center">
                <Link href="/services/corporate" className="text-light-blue hover:text-neon-blue transition-colors duration-300 inline-flex items-center group">
                  <span>詳細を見る</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* サービスカード 3 */}
            <div className="glass-effect rounded-xl p-6 group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] border border-light-blue/20">
              <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-3 group-hover:text-light-blue transition-colors duration-300">AI導入コンサルティング</h3>
              <p className="text-tech-gray text-center">
                AI技術の調査・選定から導入・運用までをトータルサポート。企業のニーズや既存システムに最適なAIソリューションを提案し、スムーズな導入と効果最大化をお手伝いします。
              </p>
              <div className="mt-6 text-center">
                <Link href="/services/consulting" className="text-light-blue hover:text-neon-blue transition-colors duration-300 inline-flex items-center group">
                  <span>詳細を見る</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 特徴・強み紹介セクション */}
      <section className="py-24 bg-gradient-to-b from-navy-blue to-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white neon-text">
              なぜIE3-Groupを<span className="text-gradient">選ぶのか</span>
            </h2>
            <p className="text-xl text-tech-gray">
              最新のAI技術とノウハウ、実績ある講師陣と充実したカリキュラムで、
              あなたのAI活用を強力にサポートします。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 特徴 1 */}
            <div className="relative p-6 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/50 to-light-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-gradient rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-light-blue transition-colors duration-300">最新技術の知見</h3>
                <p className="text-tech-gray">
                  常に最新のAI技術トレンドを研究し、実践に役立つ知識とスキルを提供します。理論だけでなく活用方法まで学べます。
                </p>
              </div>
            </div>
            
            {/* 特徴 2 */}
            <div className="relative p-6 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/50 to-light-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-cyber-gradient rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-light-blue transition-colors duration-300">経験豊富な講師陣</h3>
                <p className="text-tech-gray">
                  現場経験が豊富な専門家が指導。実際のプロジェクトで培ったノウハウをわかりやすく伝えます。
                </p>
              </div>
            </div>
            
            {/* 特徴 3 */}
            <div className="relative p-6 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/50 to-light-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-gradient rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-light-blue transition-colors duration-300">カスタマイズ対応</h3>
                <p className="text-tech-gray">
                  企業や個人のニーズに合わせたカリキュラム設計。目的や課題に応じた最適な学習内容で効率的にスキルアップできます。
                </p>
              </div>
            </div>
            
            {/* 特徴 4 */}
            <div className="relative p-6 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/50 to-light-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-gradient rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-light-blue transition-colors duration-300">実践重視のカリキュラム</h3>
                <p className="text-tech-gray">
                  実際の業務で使える技術とノウハウを重視。ハンズオン形式で実践力を身につけられる内容です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* お問い合わせCTAセクション */}
      <section className="py-20 relative overflow-hidden glass-effect">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white neon-text">
              AIの力で、<span className="text-gradient">ビジネスを変革する</span>
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              私たちと一緒に、AIの可能性を最大限に活用しましょう。
              無料相談も受け付けています。
            </p>
            <Link 
              href="/contact"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-light-blue text-navy-blue text-lg font-medium transition-all duration-300 hover:bg-light-blue/90 hover:scale-105 inline-block"
            >
              <span className="relative z-10">今すぐ相談する</span>
              <span className="absolute inset-0 bg-white/20 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}