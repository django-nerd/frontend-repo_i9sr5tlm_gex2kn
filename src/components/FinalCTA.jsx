const brand = '#BC2649'
const darkText = '#450C1B'
const bodyText = '#555555'
const lightBg = '#FEF2F3'

export default function FinalCTA() {
  return (
    <section id="cta" className="py-16" style={{ background: lightBg }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl font-semibold" style={{ color: darkText }}>Starten Sie jetzt Ihr strategisches Investment.</h2>
        <p className="mt-3 text-base" style={{ color: bodyText }}>
          Finden Sie in einem kostenlosen Gespräch heraus, wie viel Steuerlast Sie noch dieses Jahr in Vermögen umwandeln können.
        </p>
        <div className="mt-7">
          <a href="#" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-medium shadow-sm transition-colors" style={{ backgroundColor: brand }}>
            Kostenloses Erstgespräch buchen
          </a>
        </div>
      </div>
    </section>
  )
}
