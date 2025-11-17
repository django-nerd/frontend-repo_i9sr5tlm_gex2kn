import { X, Check } from 'lucide-react'

const brand = '#BC2649'
const darkText = '#450C1B'
const bodyText = '#555555'
const lightBg = '#FEF2F3'

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Normal Investing */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200">
            <h3 className="text-lg font-semibold mb-4" style={{ color: bodyText }}>Normales Investieren</h3>
            <ul className="space-y-3">
              {[
                'Hohe Steuerlast schmälert Rendite',
                'Geringe Planbarkeit der Erträge',
                'Keine netzdienliche Nutzung',
                'Intransparente Struktur und Risiken',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={18} className="mt-0.5" color="#9CA3AF" />
                  <span className="text-sm" style={{ color: bodyText }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Invest with us */}
          <div className="rounded-2xl p-6 shadow-sm" style={{ background: lightBg }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: brand }}>Mit uns investieren</h3>
            <ul className="space-y-3">
              {[
                'IAB reduziert Steuerlast signifikant',
                'Planbare, passive Erträge',
                'Professionell betriebene Batteriespeicher',
                'Volle Transparenz & rechtssichere Struktur',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5" color={brand} />
                  <span className="text-sm" style={{ color: darkText }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
