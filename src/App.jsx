import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import CalculatorCard from './components/CalculatorCard'
import ContextRight from './components/ContextRight'
import ProblemSolution from './components/ProblemSolution'
import Process from './components/Process'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <Hero />

      {/* Trust bar */}
      <TrustBar />

      {/* Rechner + Kontext */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Right (text) should appear first on mobile */}
            <div className="order-1 lg:order-none">
              <ContextRight />
            </div>
            <div className="order-2 lg:order-none">
              <CalculatorCard />
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <ProblemSolution />

      {/* Process */}
      <Process />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  )
}

export default App
