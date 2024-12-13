import Image from 'next/image'
import Link from 'next/link'
import { Card, 
  CardContent, 
  // CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-5xl font-bold text-navy-blue mb-16 text-center animate-[fadeInUp_1s_ease] transform hover:scale-105 transition-all duration-500">
        サービス一覧
      </h1>

      <div className="space-y-16">
        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">
              個人向けAI研修
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/school.jpg"
                alt="個人向けAI研修"
                fill
                className="object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                初心者向け講座から中級・上級へのステップアップコースまで、幅広いレベルに対応した研修プログラムを提供しています。個人のスキルアップやキャリアアップを支援します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  AIの基礎から応用まで幅広くカバー
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  実践的な演習を通じた学習
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  少人数制クラスでの丁寧な指導
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-navy-blue hover:bg-light-blue transition-colors duration-300">
              <Link href="/services/individual">詳細を見る</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">
              法人向けAI研修
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/company.jpg"
                alt="法人向けAI研修"
                fill
                className="object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                社員研修パッケージとして、業界ニーズに合わせたカスタマイズが可能です。企業の特性や目標に合わせて、効果的なAI教育プログラムを設計・提供します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  企業ニーズに合わせたカリキュラム
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  オンサイトまたはリモートでの柔軟な研修
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  実際の業務に即したケーススタディ
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-navy-blue hover:bg-light-blue transition-colors duration-300">
              <Link href="/services/corporate">詳細を見る</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">
              法人向けAI導入コンサルティング
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/consultant.jpg"
                alt="法人向けAI導入コンサルティング"
                fill
                className="object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                組織内でのAI化戦略立案からPoC（概念実証）、運用支援まで包括的にサポートします。企業のデジタルトランスフォーメーションを加速し、競争力の向上を支援します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  AI導入戦略の策定
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  PoC（概念実証）の実施と評価
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-light-blue">●</span>
                  AI運用体制の構築支援
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-navy-blue hover:bg-light-blue transition-colors duration-300">
              <Link href="/services/consulting">詳細を見る</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
