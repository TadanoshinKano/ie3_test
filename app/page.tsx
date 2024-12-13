import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* メインビジュアル */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0a192f]">
          <div className="relative w-full h-full">
            {/* 動的な背景アニメーション - サイバーパンク風の要素 */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute w-4 h-4 bg-light-blue rounded-full animate-float1 shadow-[0_0_15px_#63b3ed] pulse" style={{ top: '20%', left: '30%' }}></div>
              <div className="absolute w-5 h-5 bg-light-blue rounded-full animate-float2 shadow-[0_0_20px_#63b3ed] pulse" style={{ top: '60%', left: '70%' }}></div>
              <div className="absolute w-3 h-3 bg-light-blue rounded-full animate-float3 shadow-[0_0_10px_#63b3ed] pulse" style={{ top: '40%', left: '50%' }}></div>
              <div className="absolute w-2 h-2 bg-light-blue rounded-full animate-float1 shadow-[0_0_8px_#63b3ed] pulse" style={{ top: '15%', left: '65%' }}></div>
              <div className="absolute w-6 h-6 bg-light-blue rounded-full animate-float2 shadow-[0_0_25px_#63b3ed] pulse" style={{ top: '75%', left: '25%' }}></div>
              <div className="absolute w-3 h-3 bg-light-blue rounded-full animate-float3 shadow-[0_0_12px_#63b3ed] pulse" style={{ top: '85%', left: '85%' }}></div>
              {/* デジタルラインエフェクト */}
              <div className="absolute h-[1px] w-full top-1/4 bg-light-blue/30 animate-[slideRight_3s_linear_infinite]"></div>
              <div className="absolute h-[1px] w-full top-2/4 bg-light-blue/30 animate-[slideLeft_4s_linear_infinite]"></div>
              <div className="absolute h-[1px] w-full top-3/4 bg-light-blue/30 animate-[slideRight_5s_linear_infinite]"></div>
            </div>
            {/* サイバーグリッド */}
            <div className="absolute inset-0 opacity-30">
              <div className="h-full w-full grid grid-cols-12 gap-4">
                {Array(48).fill(null).map((_, i) => (
                  <div key={i} className="border border-light-blue/40 hover:border-light-blue/80 transition-colors duration-300 animate-pulse"></div>
                ))}
              </div>
            </div>
            {/* ホログラム風グラデーション */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#0a192f]/60 to-light-blue/30 animate-[gradient_8s_ease_infinite]"></div>
            {/* ノイズエフェクト */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay animate-[noise_0.5s_steps(10)_infinite]"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[#0a192f] opacity-20"></div>
        <div className="relative z-30 text-center transform transition-all duration-700 hover:scale-105">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-[glitch_1s_ease_infinite] text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-white">AIを、もっと身近に。</h1>
          <p className="text-xl md:text-2xl animate-[fadeInUp_1s_ease] text-light-blue/90">IE3-Group - あなたのAI活用をサポートします</p>
        </div>
      </section>

      {/* キービジョン・メッセージ */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6 transform transition-all duration-500 hover:scale-105">AIを広める、未来を創る</h2>
          <p className="text-xl text-gray-600 mb-8">IE3-Groupは、AIの力を活用して、個人と企業の成長を支援します。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/individual" className="bg-light-blue text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-navy-blue transition-all duration-300 hover:scale-110 transform">
              個人向け研修
            </Link>
            <Link href="/services/corporate" className="bg-light-blue text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-navy-blue transition-all duration-300 hover:scale-110 transform">
              法人向け研修
            </Link>
            <Link href="/services/consulting" className="bg-light-blue text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-navy-blue transition-all duration-300 hover:scale-110 transform">
              AI導入コンサル
            </Link>
          </div>
        </div>
      </section>

      {/* 最新情報・お知らせ */}
      {/* <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-navy-blue mb-8 text-center transform transition-all duration-500 hover:scale-105">最新情報・お知らせ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-navy-blue mb-2">新規講座開始</h3>
              <p className="text-gray-600">AI基礎から応用まで、幅広いレベルに対応した新しい講座を開講しました。</p>
              <Link href="/news/new-course" className="text-light-blue hover:underline mt-4 inline-block transition-all duration-300 hover:translate-x-2">詳細を見る</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-navy-blue mb-2">イベント開催</h3>
              <p className="text-gray-600">来月、AIの最新トレンドを学ぶ大規模カンファレンスを開催します。</p>
              <Link href="/news/upcoming-event" className="text-light-blue hover:underline mt-4 inline-block transition-all duration-300 hover:translate-x-2">詳細を見る</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-navy-blue mb-2">導入事例</h3>
              <p className="text-gray-600">大手製造業でのAI導入により生産効率が30%向上した事例を公開しました。</p>
              <Link href="/news/case-study" className="text-light-blue hover:underline mt-4 inline-block transition-all duration-300 hover:translate-x-2">詳細を見る</Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* クイックアクセスボタン */}
      {/* <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-blue mb-8 transform transition-all duration-500 hover:scale-105">サービスをお探しの方へ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/services/individual" className="block bg-navy-blue text-white px-6 py-4 rounded-lg text-xl font-semibold hover:bg-light-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                個人向けAI研修
              </Link>
            </div>
            <div>
              <Link href="/services/corporate" className="block bg-navy-blue text-white px-6 py-4 rounded-lg text-xl font-semibold hover:bg-light-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                法人向けAI研修
              </Link>
            </div>
            <div>
              <Link href="/services/consulting" className="block bg-navy-blue text-white px-6 py-4 rounded-lg text-xl font-semibold hover:bg-light-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                AI導入コンサルティング
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}