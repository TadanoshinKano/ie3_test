import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-4xl font-bold text-navy-blue mb-12 text-center animate-[fadeInUp_1s_ease] transform hover:scale-105 transition-all duration-500">採用情報</h1>

      <Card className="mb-12 hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy-blue to-light-blue">メッセージ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/careers-message.jpg"
                // src="/kano.jpg"
                alt="採用メッセージ"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-xl mb-6 leading-relaxed text-gray-700 hover:text-navy-blue transition-colors duration-300">
                「成果に見合った報酬を得たい」<br />
                「最新鋭の技術を学びたい」<br />
                「もっと自由に、自分の可能性を試したい」<br />
                <br />
                そんなあなたの挑戦をお待ちしています！
              </p>
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy-blue to-light-blue">
                我々と一緒に、新しい未来を創造しましょう。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="transform hover:scale-105 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-white to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy-blue to-light-blue">営業職（業務委託・インターン）</CardTitle>
            <CardDescription className="text-base">経験者大歓迎！あなたのスキルを活かせる環境がここに</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-base leading-relaxed text-gray-700 hover:text-navy-blue transition-colors duration-300">
              業界トップクラスの営業マンたちと肩を並べて働き、スキルをさらに磨きませんか？<br />
              成果をダイレクトに反映するフルコミッション制を採用。<br />
              あなたの努力と実力が正当に評価される職場です。
            </p>
            <ul className="list-none space-y-4 mb-6">
              <li className="text-base flex items-center transform hover:translate-x-2 transition-all duration-300">
                <span className="text-light-blue mr-2">✨</span> 営業経験者優遇！
              </li>
              <li className="text-base flex items-center transform hover:translate-x-2 transition-all duration-300">
                <span className="text-light-blue mr-2">✨</span> 高い収入を目指せる環境
              </li>
              <li className="text-base flex items-center transform hover:translate-x-2 transition-all duration-300">
                <span className="text-light-blue mr-2">✨</span> プロフェッショナルな仲間と共に成長
              </li>
            </ul>
            <Button className="w-full text-base py-6 bg-gradient-to-r from-navy-blue to-light-blue hover:opacity-90 transform hover:scale-105 transition-all duration-300">応募する</Button>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-white to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy-blue to-light-blue">コンサルタント（業務委託・インターン）</CardTitle>
            <CardDescription className="text-base">未経験から始めるプロのコンサルタントへの道</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-base leading-relaxed text-gray-700 hover:text-navy-blue transition-colors duration-300">
              未経験でも心配いりません！充実したサポート体制のもと、クライアントワークを通じて実践的なスキルを磨けます。<br />
              成果がダイレクトに反映されるフルコミッション制を採用。<br />
              「努力が報われる環境」で、新しいキャリアをスタートしませんか？
            </p>
            <ul className="list-none space-y-4 mb-6">
              <li className="text-base flex items-center transform hover:translate-x-2 transition-all duration-300">
                <span className="text-light-blue mr-2">✨</span> 未経験者積極募集中！
              </li>
              <li className="text-base flex items-center transform hover:translate-x-2 transition-all duration-300">
                <span className="text-light-blue mr-2">✨</span> 実践を通じてスキルアップ
              </li>
              <li className="text-base flex items-center transform hover:translate-x-2 transition-all duration-300">
                <span className="text-light-blue mr-2">✨</span> 成果を正当に評価するフルコミッション制
              </li>
            </ul>
            <Button className="w-full text-base py-6 bg-gradient-to-r from-navy-blue to-light-blue hover:opacity-90 transform hover:scale-105 transition-all duration-300">応募する</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
