import { Card, 
  CardContent, 
  // CardDescription, 
  CardHeader, 
  CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from 'next/link'

export default function IndividualTraining() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-5xl font-bold text-navy-blue mb-16 text-center animate-[fadeInUp_1s_ease] transform hover:scale-105 transition-all duration-500">
        個人向けAI研修
      </h1>

      <section className="mb-16">
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              IE3-Groupの個人向けAI研修は、AIの基礎から応用まで、幅広いレベルに対応したプログラムを提供しています。
              初心者の方から、より高度なスキルを求める方まで、それぞれのニーズに合わせた学習環境を用意しています。
            </p>
            <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-light-blue pl-4">
              実践的な演習と最新の理論を組み合わせたカリキュラムで、AIスキルを効果的に習得できます。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">研修の特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">第一線で活躍する講師陣による指導</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">少人数制クラスでのインタラクティブな学習</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">実際の業界事例を用いた実践的なプロジェクト</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">最新のAI技術とツールを使用した演習</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">オンラインとオフラインのハイブリッド形式</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">修了証の発行と就職・転職サポート</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">申し込み方法</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              HPからの応募は現在締め切っております。もうしばらくお待ちください。
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent animate-pulse">
              Coming soon
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
