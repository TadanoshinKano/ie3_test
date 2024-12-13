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
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-5xl font-bold text-navy-blue mb-12 text-center animate-[fadeInUp_1s_ease] transform hover:scale-105 transition-all duration-500">お問い合わせ</h1>

      <Card className="mb-12 hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50 max-w-4xl mx-auto">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">お問い合わせフォーム</CardTitle>
          <CardDescription className="text-lg">以下のフォームに必要事項をご記入ください。</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-[140px,1fr,auto] items-center gap-4 group">
              <Label htmlFor="purpose" className="text-navy-blue group-hover:text-light-blue transition-colors duration-300">お問い合わせ目的</Label>
              <Select onValueChange={handleSelectChange} required>
                <SelectTrigger className="border-light-blue/30 hover:border-light-blue transition-colors duration-300">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">個人受講</SelectItem>
                  <SelectItem value="corporate">法人研修相談</SelectItem>
                  <SelectItem value="consulting">コンサルティング相談</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-red-500 animate-pulse text-xs">*必須</span>
            </div>
            <div className="grid grid-cols-[140px,1fr,auto] items-center gap-4 group">
              <Label htmlFor="company" className="text-navy-blue group-hover:text-light-blue transition-colors duration-300">会社名</Label>
              <Input id="company" name="company" onChange={handleChange} className="border-light-blue/30 hover:border-light-blue transition-colors duration-300" />
              <span className="invisible">空白</span>
            </div>
            <div className="grid grid-cols-[140px,1fr,auto] items-center gap-4 group">
              <Label htmlFor="name" className="text-navy-blue group-hover:text-light-blue transition-colors duration-300">お名前</Label>
              <Input id="name" name="name" onChange={handleChange} required className="border-light-blue/30 hover:border-light-blue transition-colors duration-300" />
              <span className="text-red-500 animate-pulse text-xs">*必須</span>
            </div>
            <div className="grid grid-cols-[140px,1fr,auto] items-center gap-4 group">
              <Label htmlFor="phone" className="text-navy-blue group-hover:text-light-blue transition-colors duration-300">電話番号</Label>
              <Input id="phone" name="phone" type="tel" onChange={handleChange} className="border-light-blue/30 hover:border-light-blue transition-colors duration-300" />
              <span className="invisible">空白</span>
            </div>
            <div className="grid grid-cols-[140px,1fr,auto] items-start gap-4 group">
              <Label htmlFor="message" className="text-navy-blue group-hover:text-light-blue transition-colors duration-300 pt-2">お問い合わせ内容</Label>
              <Textarea id="message" name="message" onChange={handleChange} required className="min-h-[120px] border-light-blue/30 hover:border-light-blue transition-colors duration-300" />
              <span className="text-red-500 animate-pulse text-xs pt-2">*必須</span>
            </div>
            <Button type="submit" className="w-full bg-light-blue hover:bg-navy-blue transition-all duration-300 transform hover:scale-105">送信</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-12 hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">よくある質問 (FAQ)</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-light-blue/30 hover:border-light-blue transition-colors duration-300">
              <AccordionTrigger className="text-navy-blue hover:text-light-blue transition-colors duration-300">受講条件はありますか？</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                個人向けAI研修の基礎コースには特別な条件はありません。ただし、中級・上級コースではプログラミングの基礎知識が必要となる場合があります。法人向け研修は、お客様のニーズに合わせてカスタマイズいたしますので、事前にご相談ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-light-blue/30 hover:border-light-blue transition-colors duration-300">
              <AccordionTrigger className="text-navy-blue hover:text-light-blue transition-colors duration-300">料金はどのくらいですか？</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                料金は研修の種類、期間、内容によって異なります。詳細はお問い合わせください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-light-blue/30 hover:border-light-blue transition-colors duration-300">
              <AccordionTrigger className="text-navy-blue hover:text-light-blue transition-colors duration-300">カリキュラムの内容を教えてください。</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                カリキュラムはAIの基礎理論から実践的なアプリケーション開発まで幅広くカバーしています。各コースの詳細なシラバスはお問い合わせいただければ提供いたします。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-light-blue/30 hover:border-light-blue transition-colors duration-300">
              <AccordionTrigger className="text-navy-blue hover:text-light-blue transition-colors duration-300">コンサルティングの期間はどのくらいですか？</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                コンサルティングの期間は、プロジェクトの規模や複雑さによって異なります。短期のアドバイザリーサービスから、長期的な導入支援まで柔軟に対応しています。一般的な期間は3ヶ月〜1年程度ですが、お客様のニーズに合わせて調整いたします。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-navy-blue bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">連絡先・アクセス情報</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="flex items-center space-x-2 group">
            <span className="text-navy-blue group-hover:text-light-blue transition-colors duration-300">メールアドレス:</span>
            <a href="mailto:info@ie3-group.com" className="text-light-blue hover:text-navy-blue hover:underline transition-colors duration-300">info@ie3-group.com</a>
          </p>
          <p className="flex items-center space-x-2 group">
            <span className="text-navy-blue group-hover:text-light-blue transition-colors duration-300">電話番号:</span>
            <a href="tel:090-9309-6601" className="text-light-blue hover:text-navy-blue hover:underline transition-colors duration-300">090-9309-6601</a>
          </p>
          <p className="group">
            <span className="text-navy-blue group-hover:text-light-blue transition-colors duration-300">住所:</span>
            <span className="ml-2">〒150-0041　東京都渋谷区神南１丁目１１−４　ＦＰＧリンクス神南 5階</span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
