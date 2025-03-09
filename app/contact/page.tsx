'use client'

import { useState } from 'react'
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
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 bg-dark-bg z-0">
          <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-navy-blue/80 to-deep-purple/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fadeInUp neon-text">
              お問い<span className="text-gradient">合わせ</span>
            </h1>
            <p className="text-xl text-tech-gray mb-8 animate-fadeInUp delay-100">
              ご質問やご相談、お見積もりのご依頼などお気軽にお問い合わせください
            </p>
          </div>
        </div>
        
        {/* 装飾用ライン */}
        <div className="absolute h-[1px] w-full bottom-0 bg-light-blue/30 shadow-[0_0_8px_#38bdf8]"></div>
      </section>
      
      {/* 問い合わせフォームセクション */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-navy-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="glass-effect rounded-xl border border-light-blue/20 p-8 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white neon-text text-center">
                お問い合わせ<span className="text-gradient">フォーム</span>
              </h2>
              <p className="text-tech-gray mb-8 text-center">以下のフォームに必要事項をご記入ください。</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="purpose" className="text-white neon-text">お問い合わせ目的</Label>
                    <span className="text-light-blue text-xs">*必須</span>
                  </div>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-navy-blue/50 border-light-blue/30 hover:border-light-blue focus:border-light-blue text-white">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent className="bg-navy-blue text-white border-light-blue/30">
                      <SelectItem value="individual" className="focus:bg-light-blue/20">個人受講</SelectItem>
                      <SelectItem value="corporate" className="focus:bg-light-blue/20">法人研修相談</SelectItem>
                      <SelectItem value="consulting" className="focus:bg-light-blue/20">コンサルティング相談</SelectItem>
                      <SelectItem value="other" className="focus:bg-light-blue/20">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">会社名</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    onChange={handleChange} 
                    className="bg-navy-blue/50 border-light-blue/30 hover:border-light-blue focus:border-light-blue text-white placeholder:text-tech-gray"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="name" className="text-white neon-text">お名前</Label>
                    <span className="text-light-blue text-xs">*必須</span>
                  </div>
                  <Input 
                    id="name" 
                    name="name" 
                    onChange={handleChange} 
                    required 
                    className="bg-navy-blue/50 border-light-blue/30 hover:border-light-blue focus:border-light-blue text-white placeholder:text-tech-gray"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">電話番号</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    onChange={handleChange} 
                    className="bg-navy-blue/50 border-light-blue/30 hover:border-light-blue focus:border-light-blue text-white placeholder:text-tech-gray"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="message" className="text-white neon-text">お問い合わせ内容</Label>
                    <span className="text-light-blue text-xs">*必須</span>
                  </div>
                  <Textarea 
                    id="message" 
                    name="message" 
                    onChange={handleChange} 
                    required 
                    className="min-h-[120px] bg-navy-blue/50 border-light-blue/30 hover:border-light-blue focus:border-light-blue text-white placeholder:text-tech-gray"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-light-blue hover:bg-light-blue/80 text-navy-blue font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] neon-box"
                >
                  送信
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQセクション */}
      <section className="py-20 bg-gradient-to-b from-navy-blue to-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white text-center neon-text">
              よくある<span className="text-gradient">質問</span>
            </h2>
            
            <div className="glass-effect rounded-xl border border-light-blue/20 p-8 transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-light-blue/30 group">
                  <AccordionTrigger className="text-white hover:text-light-blue transition-colors duration-300 py-4 group-hover:no-underline">
                    受講条件はありますか？
                  </AccordionTrigger>
                  <AccordionContent className="text-tech-gray py-4">
                    個人向けAI研修の基礎コースには特別な条件はありません。ただし、中級・上級コースではプログラミングの基礎知識が必要となる場合があります。法人向け研修は、お客様のニーズに合わせてカスタマイズいたしますので、事前にご相談ください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-light-blue/30 group">
                  <AccordionTrigger className="text-white hover:text-light-blue transition-colors duration-300 py-4 group-hover:no-underline">
                    料金はどのくらいですか？
                  </AccordionTrigger>
                  <AccordionContent className="text-tech-gray py-4">
                    料金は研修の種類、期間、内容によって異なります。詳細はお問い合わせください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-light-blue/30 group">
                  <AccordionTrigger className="text-white hover:text-light-blue transition-colors duration-300 py-4 group-hover:no-underline">
                    カリキュラムの内容を教えてください。
                  </AccordionTrigger>
                  <AccordionContent className="text-tech-gray py-4">
                    カリキュラムはAIの基礎理論から実践的なアプリケーション開発まで幅広くカバーしています。各コースの詳細なシラバスはお問い合わせいただければ提供いたします。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-light-blue/30 group">
                  <AccordionTrigger className="text-white hover:text-light-blue transition-colors duration-300 py-4 group-hover:no-underline">
                    コンサルティングの期間はどのくらいですか？
                  </AccordionTrigger>
                  <AccordionContent className="text-tech-gray py-4">
                    コンサルティングの期間は、プロジェクトの規模や複雑さによって異なります。短期のアドバイザリーサービスから、長期的な導入支援まで柔軟に対応しています。一般的な期間は3ヶ月〜1年程度ですが、お客様のニーズに合わせて調整いたします。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      {/* 連絡先・アクセス情報セクション */}
      <section className="py-16 glass-effect relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white neon-text">
              連絡先・<span className="text-gradient">アクセス情報</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="glass-effect p-6 rounded-xl border border-light-blue/20 group hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300">
                <div className="w-12 h-12 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">メールアドレス</h3>
                <a href="mailto:info@ie3-group.com" className="text-light-blue hover:text-neon-blue transition-colors duration-300">
                  info@ie3-group.com
                </a>
              </div>
              
              <div className="glass-effect p-6 rounded-xl border border-light-blue/20 group hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300">
                <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">電話番号</h3>
                <a href="tel:03-6277-6564" className="text-light-blue hover:text-neon-blue transition-colors duration-300">
                  03-6277-6564
                </a>
              </div>
              
              <div className="glass-effect p-6 rounded-xl border border-light-blue/20 group hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300">
                <div className="w-12 h-12 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">住所</h3>
                <p className="text-tech-gray">
                  〒150-0041<br />
                  東京都渋谷区神南１丁目１１−４<br />
                  ＦＰＧリンクス神南 5階
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
