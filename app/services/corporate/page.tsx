import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CorporateTraining() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8 text-center">法人向けAI研修</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              IE3-Groupの法人向けAI研修は、企業のニーズに合わせてカスタマイズされたプログラムを提供します。
              AI技術の基礎から応用まで、幅広いトピックをカバーし、社員のスキルアップと組織全体のAI活用能力の向上を支援します。
            </p>
            <p className="text-lg">
              業界特有の課題に対応したケーススタディや、実践的なワークショップを通じて、
              AIを実際のビジネスシーンで活用するための知識とスキルを効果的に習得できます。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">研修の特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>企業のニーズに合わせたカスタマイズカリキュラム</li>
              <li>業界特化型のケーススタディとワークショップ</li>
              <li>オンサイトまたはリモートでの柔軟な研修形式</li>
              <li>最新のAI技術トレンドと実践的な応用方法の学習</li>
              <li>社内AI人材の育成と組織全体のAI理解度向上</li>
              <li>研修後のフォローアップとサポート体制</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">お問い合わせ・カスタマイズ相談</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              法人向けAI研修のカスタマイズや詳細については、お問い合わせください。
              貴社のニーズに合わせた最適な研修プランをご提案いたします。
            </p>
            <p className="text-lg font-semibold">
              お問い合わせ: <a href="mailto:info@ie3-group.com" className="text-light-blue hover:underline">info@ie3-group.com</a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

