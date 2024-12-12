import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8 text-center">会社概要</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-navy-blue mb-4">ミッション・ビジョン・バリュー</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-navy-blue mb-4">「AIを広める」ことに込めた想い</h3>
          <p className="text-gray-700 mb-4">
            私たちは、「AIを広める」というビジョンのもと、すべての人々に技術を活かす力を届けたいと考えています。AIはもはや特定の専門家だけのものではなく、社会全体の発展に貢献できる力を秘めています。私たちの目指す未来は、AIを身近な存在にすることで、個々の人々が新しい可能性を切り開き、社会全体がより良い方向へ進むことができる環境を作り出すことです。
          </p>
          <h3 className="text-2xl font-semibold text-navy-blue mb-4">テクノロジーを通じた社会貢献への姿勢</h3>
          <p className="text-gray-700 mb-4">
            テクノロジーは社会のあらゆる構造に影響を与える無限の可能性を持っています。私たちは、AIを活用することで、教育、医療、環境などさまざまな領域で、それぞれの課題解決のための手助けをしたいと考えています。私たちは常に社会貢献を最優先に、AI技術を導入し、普及させる活動を行い、持続可能で豊かな未来を共に作り上げていくことを目指しています。
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-navy-blue mb-4">会社情報</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-6 font-semibold">会社名</td>
                <td className="py-3 px-6">IE3-Group株式会社</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-6 font-semibold">住所</td>
                <td className="py-3 px-6">〒150-0041　東京都渋谷区神南１丁目１１−４　ＦＰＧリンクス神南 5階</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6 font-semibold">代表取締役</td>
                <td className="py-3 px-6">狩野真之心</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-6 font-semibold">メールアドレス</td>
                <td className="py-3 px-6">
                  <a href="mailto:info@ie3-group.com" className="text-light-blue hover:underline">info@ie3-group.com</a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">電話番号</td>
                <td className="py-3 px-6">
                  <a href="tel:090-9309-6601" className="text-light-blue hover:underline">090-9309-6601</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

