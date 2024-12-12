import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8 text-center">サービス</h1>

      <div className="space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">個人向けAI研修</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="個人向けAI研修"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div>
              <p className="text-gray-700 mb-4">
                初心者向け講座から中級・上級へのステップアップコースまで、幅広いレベルに対応した研修プログラムを提供しています。個人のスキルアップやキャリアアップを支援します。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>AIの基礎から応用まで幅広くカバー</li>
                <li>実践的な演習を通じた学習</li>
                <li>少人数制クラスでの丁寧な指導</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/services/individual">詳細を見る</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">法人向けAI研修</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="法人向けAI研修"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div>
              <p className="text-gray-700 mb-4">
                社員研修パッケージとして、業界ニーズに合わせたカスタマイズが可能です。企業の特性や目標に合わせて、効果的なAI教育プログラムを設計・提供します。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>企業ニーズに合わせたカリキュラム</li>
                <li>オンサイトまたはリモートでの柔軟な研修</li>
                <li>実際の業務に即したケーススタディ</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/services/corporate">詳細を見る</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">法人向けAI導入コンサルティング</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="法人向けAI導入コンサルティング"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div>
              <p className="text-gray-700 mb-4">
                組織内でのAI化戦略立案からPoC（概念実証）、運用支援まで包括的にサポートします。企業のデジタルトランスフォーメーションを加速し、競争力の向上を支援します。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>AI導入戦略の策定</li>
                <li>PoC（概念実証）の実施と評価</li>
                <li>AI運用体制の構築支援</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/services/consulting">詳細を見る</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

