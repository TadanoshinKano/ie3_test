import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIConsulting() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-5xl font-bold text-navy-blue mb-16 text-center animate-[fadeInUp_1s_ease] transform hover:scale-105 transition-all duration-500">
        AI導入コンサルティング
      </h1>

      <section className="mb-16">
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              IE3-GroupのAI導入コンサルティングは、企業のAIトランスフォーメーションを包括的にサポートします。
              戦略立案からPoC（概念実証）、本格的な導入、そして運用支援まで、AIプロジェクトの全段階をカバーします。
            </p>
            <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-light-blue pl-4">
              豊富な経験を持つコンサルタントが、最新のAI技術と業界知識を組み合わせ、
              お客様のビジネス課題に最適なAIソリューションを提案・実装します。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">サービスの特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "AI戦略の策定と導入ロードマップの作成",
                "業界特化型のAIユースケース分析と提案",
                "PoC（概念実証）の設計、実施、評価",
                "AI導入に必要なインフラストラクチャの設計と構築支援",
                "データ収集、前処理、モデル開発のサポート",
                "AI倫理とガバナンスに関するアドバイザリー",
                "社内AI人材の育成と組織体制の構築支援",
                "導入後の運用サポートと継続的な改善提案"
              ].map((feature, index) => (
                <div key={index} className="p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                  <div className="flex items-center text-gray-700">
                    <span className="text-light-blue text-2xl mr-2">●</span>
                    <span className="font-semibold">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">コンサルティングプロセス</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                "初期評価とニーズ分析",
                "AI戦略の策定",
                "PoC（概念実証）の実施",
                "導入計画の策定",
                "AI実装とインテグレーション",
                "運用支援と継続的改善"
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg hover:shadow-md transition-all duration-300">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-blue text-white font-bold">{index + 1}</span>
                  <span className="text-lg font-semibold text-gray-700">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-lg mt-8 text-gray-700 border-l-4 border-light-blue pl-4">
              各ステップは、お客様のニーズと進捗に合わせてカスタマイズされます。
            </p>
            <div className="mt-8 text-center">
              <p className="text-xl font-bold text-navy-blue mb-2">お問い合わせ</p>
              <a href="mailto:info@ie3-group.com" className="text-light-blue hover:underline text-lg transition-colors duration-300">
                info@ie3-group.com
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
