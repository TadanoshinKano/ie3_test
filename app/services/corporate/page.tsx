import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CorporateTraining() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-5xl font-bold text-navy-blue mb-16 text-center animate-[fadeInUp_1s_ease] transform hover:scale-105 transition-all duration-500">
        法人向けAI研修
      </h1>

      <section className="mb-16">
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              IE3-Groupの法人向けAI研修は、企業のニーズに合わせてカスタマイズされたプログラムを提供します。
              AI技術の基礎から応用まで、幅広いトピックをカバーし、社員のスキルアップと組織全体のAI活用能力の向上を支援します。
            </p>
            <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-light-blue pl-4">
              業界特有の課題に対応したケーススタディや、実践的なワークショップを通じて、
              AIを実際のビジネスシーンで活用するための知識とスキルを効果的に習得できます。
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
                  <span className="font-semibold">企業のニーズに合わせたカスタマイズカリキュラム</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">業界特化型のケーススタディとワークショップ</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">オンサイトまたはリモートでの柔軟な研修形式</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">最新のAI技術トレンドと実践的な応用方法の学習</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">社内AI人材の育成と組織全体のAI理解度向上</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="text-light-blue text-2xl mr-2">●</span>
                  <span className="font-semibold">研修後のフォローアップとサポート体制</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">お問い合わせ・カスタマイズ相談</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              法人向けAI研修のカスタマイズや詳細については、お問い合わせください。
              貴社のニーズに合わせた最適な研修プランをご提案いたします。
            </p>
            <p className="text-xl font-semibold">
              お問い合わせ: <a href="mailto:info@ie3-group.com" className="text-light-blue hover:underline transition-colors duration-300">info@ie3-group.com</a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
