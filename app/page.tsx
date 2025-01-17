import { Background } from '@/components/ui/background'
import { FloatingElements } from '@/components/ui/floating-elements'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import { InvestorGuide } from '@/components/sections/investor-guide'
import { InvestmentMetrics } from '@/components/sections/investment-metrics'
import Stats from '@/components/stats'
import Problem from '@/components/problem'
import Team from '@/components/team'
import CTA from '@/components/cta'
import { PriceChart } from '@/components/charts/price-chart'
import { FarmMetrics } from '@/components/charts/farm-metrics'
import { AgriculturalStats } from '@/components/metrics/agricultural-stats'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <FloatingElements />
      <div className="relative z-10">
        <Hero />
        <Features />
        <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-2">
          <PriceChart />
          <FarmMetrics />
        </div>
        <div className="container mx-auto px-4 py-12">
          <AgriculturalStats />
        </div>
        <HowItWorks />
        <InvestorGuide />
        <InvestmentMetrics />
        <Stats />
        <Problem />
        <Team />
        <CTA />
      </div>
    </main>
  )
}
