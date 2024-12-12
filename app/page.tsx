import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* メインビジュアル */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="AI学習と活用を象徴する画像"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-navy-blue opacity-50 z-10"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">AIを、もっと身近に。</h1>
          <p className="text-xl md:text-2xl">IE3-Group - あなたのAI活用をサポートします</p>
        </div>
      </section>

      {/* キービジョン・メッセージ */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">AIを広める、未来を創る</h2>
          <p className="text-xl text-gray-600 mb-8">IE3-Groupは、AIの力を活用して、個人と企業の成長を支援します。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/individual" className="bg-light-blue text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-navy-blue transition-colors">
              個人向け研修
            </Link>
            <Link href="/services/corporate" className="bg-light-blue text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-navy-blue transition-colors">
              法人向け研修
            </Link>
            <Link href="/services/consulting" className="bg-light-blue text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-navy-blue transition-colors">
              AI導入コンサル
            </Link>
          </div>
        </div>
      </section>

      {/* 最新情報・お知らせ */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-navy-blue mb-8 text-center">最新情報・お知らせ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy-blue mb-2">新規講座開始</h3>
              <p className="text-gray-600">AI基礎から応用まで、幅広いレベルに対応した新しい講座を開講しました。</p>
              <Link href="/news/new-course" className="text-light-blue hover:underline mt-4 inline-block">詳細を見る</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy-blue mb-2">イベント開催</h3>
              <p className="text-gray-600">来月、AIの最新トレンドを学ぶ大規模カンファレンスを開催します。</p>
              <Link href="/news/upcoming-event" className="text-light-blue hover:underline mt-4 inline-block">詳細を見る</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy-blue mb-2">導入事例</h3>
              <p className="text-gray-600">大手製造業でのAI導入により生産効率が30%向上した事例を公開しました。</p>
              <Link href="/news/case-study" className="text-light-blue hover:underline mt-4 inline-block">詳細を見る</Link>
            </div>
          </div>
        </div>
      </section>

      {/* クイックアクセスボタン */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-blue mb-8">サービスをお探しの方へ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/services/individual" className="block bg-navy-blue text-white px-6 py-4 rounded-lg text-xl font-semibold hover:bg-light-blue transition-colors">
                個人向けAI研修
              </Link>
            </div>
            <div>
              <Link href="/services/corporate" className="block bg-navy-blue text-white px-6 py-4 rounded-lg text-xl font-semibold hover:bg-light-blue transition-colors">
                法人向けAI研修
              </Link>
            </div>
            <div>
              <Link href="/services/consulting" className="block bg-navy-blue text-white px-6 py-4 rounded-lg text-xl font-semibold hover:bg-light-blue transition-colors">
                AI導入コンサルティング
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

