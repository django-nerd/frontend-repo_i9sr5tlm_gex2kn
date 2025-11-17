import { CheckCircle2, Info } from 'lucide-react'

const brand = '#BC2649'
const darkText = '#450C1B'
const bodyText = '#555555'
const lightBg = '#FEF2F3'

export default function ContextRight() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: darkText }}>
        Weniger Steuern. Mehr Vermögen mit IAB.
      </h2>
      <p className="text-base leading-relaxed" style={{ color: bodyText }}>
        Mit einem Photovoltaik Direktinvestment und professionell betriebenen Batteriespeichern nutzen Sie den <strong style={{ color: brand }}>Investitionsabzugsbetrag</strong>, senken Ihre <strong style={{ color: brand }}>steuerliche Belastung</strong> und bauen nachhaltig <strong style={{ color: brand }}>zusätzliches Vermögen</strong> auf.
      </p>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full" style={{ background: lightBg, color: brand }}>
          <Info size={16} /> Kurz erklärt: Investitionsabzugsbetrag (IAB)
        </div>
        <ul className="space-y-3">
          {[
            'Bis zu 50% der Investitionskosten im Voraus steuerlich abziehen',
            'Liquiditätsvorteil: Steuern sparen und parallel investieren',
            'Rechtssichere Strukturierung & professionelle Bewirtschaftung',
            'Planbare, passive Erträge durch netzdienliche Nutzung',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 rounded-full p-1.5" style={{ background: lightBg }}>
                <CheckCircle2 size={18} color={brand} />
              </div>
              <span className="text-sm sm:text-base" style={{ color: bodyText }}>
                <strong style={{ color: brand }}>{item.split(':')[0]}</strong>
                {item.includes(':') ? `:${item.split(':').slice(1).join(':')}` : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <a href="#cta" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white font-medium shadow-sm transition-colors" style={{ backgroundColor: brand }}>
          Jetzt Sparpotenzial prüfen
        </a>
      </div>
    </div>
  )
}
