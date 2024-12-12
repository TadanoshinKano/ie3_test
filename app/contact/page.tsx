'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Contact() {
  const [formData, setFormData] = useState({
    purpose: '',
    company: '',
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, purpose: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log(formData)
    alert('お問い合わせを受け付けました。ありがとうございます。')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8 text-center">お問い合わせ</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>お問い合わせフォーム</CardTitle>
          <CardDescription>以下のフォームに必要事項をご記入ください。</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="purpose" className="flex-shrink-0 w-40">お問い合わせ目的</Label>
              <Select onValueChange={handleSelectChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">個人受講</SelectItem>
                  <SelectItem value="corporate">法人研修相談</SelectItem>
                  <SelectItem value="consulting">コンサルティング相談</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-red-500">必須</span>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="company" className="flex-shrink-0 w-40">会社名</Label>
              <Input id="company" name="company" onChange={handleChange} />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="name" className="flex-shrink-0 w-40">お名前</Label>
              <Input id="name" name="name" onChange={handleChange} required />
              <span className="text-red-500">必須</span>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="phone" className="flex-shrink-0 w-40">電話番号</Label>
              <Input id="phone" name="phone" type="tel" onChange={handleChange} />
            </div>
            <div className="flex items-start space-x-2">
              <Label htmlFor="message" className="flex-shrink-0 w-40 mt-2">お問い合わせ内容</Label>
              <Textarea id="message" name="message" onChange={handleChange} required className="min-h-[100px]" />
              <span className="text-red-500 mt-2">必須</span>
            </div>
            <Button type="submit" className="w-full">送信</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>よくある質問 (FAQ)</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>受講条件はありますか？</AccordionTrigger>
              <AccordionContent>
                個人向けAI研修の基礎コースには特別な条件はありません。ただし、中級・上級コースではプログラミングの基礎知識が必要となる場合があります。法人向け研修は、お客様のニーズに合わせてカスタマイズいたしますので、事前にご相談ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>料金はどのくらいですか？</AccordionTrigger>
              <AccordionContent>
                料金は研修の種類、期間、内容によって異なります。個人向けコースは1回あたり10,000円〜、法人向けパッケージは100,000円〜となっています。詳細は個別にお問い合わせください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>カリキュラムの内容を教えてください。</AccordionTrigger>
              <AccordionContent>
                カリキュラムはAIの基礎理論から実践的なアプリケーション開発まで幅広くカバーしています。具体的には、機械学習、ディープラーニング、自然言語処理、コンピュータビジョンなどの分野を扱います。各コースの詳細なシラバスはお問い合わせいただければ提供いたします。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>コンサルティングの期間はどのくらいですか？</AccordionTrigger>
              <AccordionContent>
                コンサルティングの期間は、プロジェクトの規模や複雑さによって異なります。短期のアドバイザリーサービスから、長期的な導入支援まで柔軟に対応しています。一般的な期間は3ヶ月〜1年程度ですが、お客様のニーズに合わせて調整いたします。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>連絡先・アクセス情報</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">メールアドレス: <a href="mailto:info@ie3-group.com" className="text-light-blue hover:underline">info@ie3-group.com</a></p>
          <p className="mb-2">電話番号: <a href="tel:090-9309-6601" className="text-light-blue hover:underline">090-9309-6601</a></p>
          <p>住所: 〒150-0041　東京都渋谷区神南１丁目１１−４　ＦＰＧリンクス神南 5階</p>
        </CardContent>
      </Card>
    </div>
  )
}

