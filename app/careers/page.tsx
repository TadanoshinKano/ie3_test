import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8 text-center">採用情報</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-navy-blue">メッセージ</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            「もっと自由に、自分らしく稼ぎたい」<br />
            「もっと自由に、自分の可能性を試したい」<br />
            そんなあなたの挑戦をお待ちしています！
          </p>
          <p className="text-lg font-semibold">
            今すぐ応募して、次のステージへ進みましょう。
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">営業職（業務委託・インターン）</CardTitle>
            <CardDescription>経験者大歓迎！あなたのスキルを活かせる環境がここに</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              業界トップクラスの営業マンたちと肩を並べて働き、スキルをさらに磨きませんか？<br />
              成果をダイレクトに反映するフルコミッション制を採用。<br />
              あなたの努力と実力が正当に評価される職場です。
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li>✅ 営業経験者優遇！</li>
              <li>✅ 高い収入を目指せる環境</li>
              <li>✅ プロフェッショナルな仲間と共に成長</li>
            </ul>
            <Button className="w-full">応募する</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">コンサルタント（業務委託・インターン）</CardTitle>
            <CardDescription>未経験から始めるプロのコンサルタントへの道</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              未経験でも心配いりません！充実したサポート体制のもと、クライアントワークを通じて実践的なスキルを磨けます。<br />
              成果がダイレクトに反映されるフルコミッション制を採用。<br />
              「努力が報われる環境」で、新しいキャリアをスタートしませんか？
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li>✅ 未経験者積極募集中！</li>
              <li>✅ 実践を通じてスキルアップ</li>
              <li>✅ 成果を正当に評価するフルコミッション制</li>
            </ul>
            <Button className="w-full">応募する</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

