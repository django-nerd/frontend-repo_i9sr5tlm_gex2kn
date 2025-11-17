import Spline from '@splinetool/react-spline';

const brand = '#BC2649'
const darkText = '#450C1B'
const bodyText = '#555555'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft white overlay to ensure light mode and readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-28 flex items-center">
        <div className="w-full grid grid-cols-1">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight" style={{ color: darkText }}>
              Steuerlast in Vermögen umwandeln.
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl" style={{ color: bodyText }}>
              Investieren Sie strategisch in Batteriespeicher, senken Sie Ihre Steuerlast mit dem IAB und sichern Sie sich stabile, passive Renditen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#rechner" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-medium shadow-sm transition-colors" style={{ backgroundColor: brand }}>
                Jetzt kostenloses Erstgespräch sichern
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
