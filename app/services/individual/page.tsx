import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function IndividualTraining() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8 text-center">個人向けAI研修</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              IE3-Groupの個人向けAI研修は、AIの基礎から応用まで、幅広いレベルに対応したプログラムを提供しています。
              初心者の方から、より高度なスキルを求める方まで、それぞれのニーズに合わせた学習環境を用意しています。
            </p>
            <p className="text-lg">
              実践的な演習と最新の理論を組み合わせたカリキュラムで、AIスキルを効果的に習得できます。
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
              <li>第一線で活躍する講師陣による指導</li>
              <li>少人数制クラスでのインタラクティブな学習</li>
              <li>実際の業界事例を用いた実践的なプロジェクト</li>
              <li>最新のAI技術とツールを使用した演習</li>
              <li>オンラインとオフラインのハイブリッド形式で柔軟に受講可能</li>
              <li>修了証の発行と就職・転職サポート</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">申し込み方法</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              申し込み方法の詳細は現在準備中です。もうしばらくお待ちください。
            </p>
            <p className="text-lg font-semibold">Coming soon</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

