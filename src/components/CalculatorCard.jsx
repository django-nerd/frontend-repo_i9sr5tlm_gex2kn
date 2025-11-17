const brand = '#BC2649'
const darkText = '#450C1B'
const bodyText = '#555555'
const lightBg = '#FEF2F3'
const midBg = '#F9D2D7'

export default function CalculatorCard() {
  return (
    <div id="rechner" className="w-full">
      <div className="rounded-3xl shadow-sm overflow-hidden border border-[#F3C7CE]" style={{ background: lightBg }}>
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: darkText }}>Rechenbeispiel</h3>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl px-4 py-3 bg-white/60 border border-white/80">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: bodyText }}>Zu versteuernder Gewinn</span>
                <span className="text-base sm:text-lg font-semibold" style={{ color: darkText }}>300.000 €</span>
              </div>
            </div>

            <div className="rounded-2xl px-4 py-3 bg-white/60 border border-white/80">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: bodyText }}>IAB-Investitionssumme</span>
                <span className="text-base sm:text-lg font-semibold" style={{ color: darkText }}>200.000 €</span>
              </div>
            </div>

            <div className="rounded-2xl px-4 py-3 bg-white/60 border border-white/80">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: bodyText }}>IAB-Abzugsbetrag (50%)</span>
                <span className="text-base sm:text-lg font-semibold" style={{ color: darkText }}>100.000 €</span>
              </div>
            </div>

            <div className="rounded-2xl px-4 py-3 bg-white/60 border border-white/80">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: bodyText }}>Neue steuerliche Bemessungsgrundlage</span>
                <span className="text-base sm:text-lg font-semibold" style={{ color: darkText }}>200.000 €</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm" style={{ color: bodyText }}>Steuerlast alt</p>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: darkText }}>96.400 €</p>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-5" style={{ background: midBg }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide" style={{ color: brand }}>Gesenkte Steuerlast</p>
              <p className="text-xl sm:text-2xl font-semibold" style={{ color: brand }}>- 48.200 €</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide" style={{ color: brand }}>Neue Vermögensbildung</p>
              <p className="text-xl sm:text-2xl font-semibold" style={{ color: brand }}>+ 48.200 €</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide" style={{ color: brand }}>Rendite aus Speicher</p>
              <p className="text-xl sm:text-2xl font-semibold" style={{ color: brand }}>ca. 6-8 % p.a.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
