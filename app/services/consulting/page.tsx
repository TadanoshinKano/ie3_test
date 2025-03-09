import Link from 'next/link'
import Image from 'next/image'

export default function AIConsulting() {
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
              AI導入<span className="text-gradient">コンサルティング</span>
            </h1>
            <p className="text-xl text-tech-gray mb-8 animate-fadeInUp delay-100">
              企業のデジタルトランスフォーメーションを加速させる
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
                    IE3-GroupのAI導入コンサルティングは、企業のAIトランスフォーメーションを包括的にサポートします。
                    戦略立案からPoC（概念実証）、本格的な導入、そして運用支援まで、AIプロジェクトの全段階をカバーします。
                  </p>
                  <div className="border-l-4 border-light-blue pl-4">
                    <p className="text-white leading-relaxed">
                      豊富な経験を持つコンサルタントが、最新のAI技術と業界知識を組み合わせ、
                      お客様のビジネス課題に最適なAIソリューションを提案・実装します。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-deep-purple/30 z-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/consultant.jpg"
                    alt="AI導入コンサルティング"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-purple-gradient rounded-full flex items-center justify-center neon-box opacity-90">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* サービスの特徴セクション */}
      <section className="py-20 bg-gradient-to-b from-navy-blue to-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center neon-text">
              サービスの<span className="text-gradient">特徴</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI戦略の策定と導入ロードマップの作成",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  ),
                  gradient: "bg-blue-gradient"
                },
                {
                  title: "業界特化型のAIユースケース分析と提案",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  ),
                  gradient: "bg-cyber-gradient"
                },
                {
                  title: "PoC（概念実証）の設計、実施、評価",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  gradient: "bg-purple-gradient"
                },
                {
                  title: "AI導入に必要なインフラストラクチャの設計と構築支援",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  gradient: "bg-blue-gradient"
                },
                {
                  title: "データ収集、前処理、モデル開発のサポート",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  ),
                  gradient: "bg-cyber-gradient"
                },
                {
                  title: "AI倫理とガバナンスに関するアドバイザリー",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  ),
                  gradient: "bg-purple-gradient"
                },
                {
                  title: "社内AI人材の育成と組織体制の構築支援",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  gradient: "bg-blue-gradient"
                },
                {
                  title: "導入後の運用サポートと継続的な改善提案",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  gradient: "bg-cyber-gradient"
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-xl border border-light-blue/20 p-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                  <div className={`w-16 h-16 ${feature.gradient} rounded-full flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 neon-text">{feature.title}</h3>
                  <p className="text-tech-gray">
                    {index === 0 && "企業の目標とリソースを考慮した実現可能なAI戦略を策定し、段階的な導入ロードマップを作成します。"}
                    {index === 1 && "業界ごとの特性に合わせたAIユースケースを分析し、最も効果的なソリューションを提案します。"}
                    {index === 2 && "リスクを最小化しながら、AIソリューションの有効性を検証するためのPoCを設計・実施します。"}
                    {index === 3 && "AI導入に必要なハードウェア、ソフトウェア、クラウドインフラの設計と構築をサポートします。"}
                    {index === 4 && "高品質なデータ収集から前処理、モデル開発、評価までの一連のプロセスをサポートします。"}
                    {index === 5 && "AI利用における倫理的な課題やガバナンス体制の構築についてアドバイスを提供します。"}
                    {index === 6 && "社内でAIを推進する人材の育成と、継続的にAIを活用できる組織体制の構築を支援します。"}
                    {index === 7 && "導入後の運用状況をモニタリングし、継続的な改善提案を行います。"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* コンサルティングプロセスセクション */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-navy-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center neon-text">
              コンサルティング<span className="text-gradient">プロセス</span>
            </h2>
            
            <div className="space-y-4">
              {[
                "初期評価とニーズ分析",
                "AI戦略の策定",
                "PoC（概念実証）の実施",
                "導入計画の策定",
                "AI実装とインテグレーション",
                "運用支援と継続的改善"
              ].map((step, index) => (
                <div key={index} className="glass-effect rounded-xl border border-light-blue/20 p-6 flex items-start gap-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group">
                  <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 neon-text">{step}</h3>
                    <p className="text-tech-gray">
                      {index === 0 && "現状の分析を行い、企業のニーズと目標を明確化します。AIの適用可能な領域を特定します。"}
                      {index === 1 && "企業のビジョンとリソースに基づいた、実行可能なAI導入戦略を策定します。"}
                      {index === 2 && "小規模なプロジェクトでAIソリューションの効果と実現可能性を検証します。"}
                      {index === 3 && "PoCの結果を踏まえ、本格導入のための詳細計画を策定します。"}
                      {index === 4 && "AIソリューションの開発、既存システムとの統合、テストを行います。"}
                      {index === 5 && "導入後の運用をサポートし、継続的な改善とアップデートを提案します。"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-effect rounded-xl border border-light-blue/20 p-6 mt-8">
              <p className="text-white text-center">
                各ステップは、お客様のニーズと進捗に合わせてカスタマイズされます。
              </p>
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
              <span className="text-gradient">お問い合わせ</span>
            </h2>
            <p className="text-xl text-tech-gray mb-12 max-w-3xl mx-auto animate-fadeInUp delay-100">
              AI導入コンサルティングについて詳しく知りたい方は、お気軽にお問い合わせください。
              貴社の課題に合わせた最適なAIソリューションをご提案いたします。
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
              <div className="glass-effect rounded-xl border border-light-blue/30 p-8 transition-all duration-300 hover:border-light-blue/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] group animate-fadeInUp delay-200 flex-1 max-w-md">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mr-5 neon-box group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-all duration-500">
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
