const bodyText = '#555555'

export default function TrustBar() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 border-t border-b border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm sm:text-base" style={{ color: bodyText }}>Bekannt aus:</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 w-full">
            {['Handelsblatt','Forbes','TÜV Süd','WirtschaftsWoche','FAZ','Capital'].map((name, i) => (
              <div key={i} className="h-8 sm:h-10 flex items-center justify-center text-gray-400/90 bg-gray-50 rounded">
                <span className="text-xs sm:text-sm font-medium tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
