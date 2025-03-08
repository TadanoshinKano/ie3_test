// import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-5xl font-bold text-navy-blue mb-12 text-center animate-[fadeInUp_1s_ease] transform hover:scale-105 transition-all duration-500">会社概要</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-navy-blue mb-6 transform hover:translate-x-2 transition-all duration-300 flex items-center">
          <span className="inline-block w-2 h-8 bg-light-blue mr-3"></span>
          ミッション・ビジョン・バリュー
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-semibold text-navy-blue mb-6 bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">「AIを広める」ことに込めた想い</h3>
          <p className="text-gray-700 mb-6 leading-relaxed hover:text-navy-blue transition-colors duration-300">
            私たちは、「AIを広める」というビジョンのもと、すべての人々に技術を活かす力を届けたいと考えています。AIはもはや特定の専門家だけのものではなく、社会全体の発展に貢献できる力を秘めています。私たちの目指す未来は、AIを身近な存在にすることで、個々の人々が新しい可能性を切り開き、社会全体がより良い方向へ進むことができる環境を作り出すことです。
          </p>
          <h3 className="text-2xl font-semibold text-navy-blue mb-6 bg-gradient-to-r from-navy-blue to-light-blue bg-clip-text text-transparent">テクノロジーを通じた社会貢献への姿勢</h3>
          <p className="text-gray-700 mb-4 leading-relaxed hover:text-navy-blue transition-colors duration-300">
            テクノロジーは社会のあらゆる構造に影響を与える無限の可能性を持っています。私たちは、AIを活用することで、教育、医療、環境などさまざまな領域で、それぞれの課題解決のための手助けをしたいと考えています。私たちは常に社会貢献を最優先に、AI技術を導入し、普及させる活動を行い、持続可能で豊かな未来を共に作り上げていくことを目指しています。
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-navy-blue mb-6 transform hover:translate-x-2 transition-all duration-300 flex items-center">
          <span className="inline-block w-2 h-8 bg-light-blue mr-3"></span>
          会社情報
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <tbody>
              <tr className="border-b hover:bg-blue-50 transition-colors duration-300">
                <td className="py-4 px-8 font-semibold text-navy-blue">会社名</td>
                <td className="py-4 px-8">IE3-Group株式会社</td>
              </tr>
              <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                <td className="py-4 px-8 font-semibold text-navy-blue">住所</td>
                <td className="py-4 px-8">〒150-0041<br />
                  東京都渋谷区神南１丁目１１−４　ＦＰＧリンクス神南 5階</td>
              </tr>
              <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                <td className="py-4 px-8 font-semibold text-navy-blue">メールアドレス</td>
                <td className="py-4 px-8">
                  <a href="mailto:info@ie3-group.com" className="text-light-blue hover:text-navy-blue hover:underline transition-colors duration-300">info@ie3-group.com</a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors duration-300">
                <td className="py-4 px-8 font-semibold text-navy-blue">電話番号</td>
                <td className="py-4 px-8">
                  <a href="tel:03-6277-6564" className="text-light-blue hover:text-navy-blue hover:underline transition-colors duration-300">03-6277-6564</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
