import { Calendar, FileText, TrendingUp } from 'lucide-react'

const brand = '#BC2649'
const bodyText = '#555555'
const lightBg = '#FEF2F3'

export default function Process() {
  const steps = [
    { icon: Calendar, title: 'Beratung', desc: 'Kostenloses Erstgespräch und Potenzialanalyse' },
    { icon: FileText, title: 'Investition', desc: 'Strukturierung, Verträge & Umsetzung' },
    { icon: TrendingUp, title: 'Profitieren', desc: 'Passive Erträge & Vermögensaufbau' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 border border-gray-200" style={{ background: lightBg }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: '#fff' }}>
                <s.icon size={20} color={brand} />
              </div>
              <h4 className="text-lg font-semibold" style={{ color: brand }}>{s.title}</h4>
              <p className="text-sm mt-1" style={{ color: bodyText }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
