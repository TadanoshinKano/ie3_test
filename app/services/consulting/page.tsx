import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIConsulting() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8 text-center">AI導入コンサルティング</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              IE3-GroupのAI導入コンサルティングは、企業のAIトランスフォーメーションを包括的にサポートします。
              戦略立案からPoC（概念実証）、本格的な導入、そして運用支援まで、AIプロジェクトの全段階をカバーします。
            </p>
            <p className="text-lg">
              豊富な経験を持つコンサルタントが、最新のAI技術と業界知識を組み合わせ、
              お客様のビジネス課題に最適なAIソリューションを提案・実装します。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">サービスの特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>AI戦略の策定と導入ロードマップの作成</li>
              <li>業界特化型のAIユースケース分析と提案</li>
              <li>PoC（概念実証）の設計、実施、評価</li>
              <li>AI導入に必要なインフラストラクチャの設計と構築支援</li>
              <li>データ収集、前処理、モデル開発のサポート</li>
              <li>AI倫理とガバナンスに関するアドバイザリー</li>
              <li>社内AI人材の育成と組織体制の構築支援</li>
              <li>導入後の運用サポートと継続的な改善提案</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">コンサルティングプロセス</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>初期評価とニーズ分析</li>
              <li>AI戦略の策定</li>
              <li>PoC（概念実証）の実施</li>
              <li>導入計画の策定</li>
              <li>AI実装とインテグレーション</li>
              <li>運用支援と継続的改善</li>
            </ol>
            <p className="text-lg mt-4">
              各ステップは、お客様のニーズと進捗に合わせてカスタマイズされます。
            </p>
            <p className="text-lg font-semibold mt-4">
              お問い合わせ: <a href="mailto:info@ie3-group.com" className="text-light-blue hover:underline">info@ie3-group.com</a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

