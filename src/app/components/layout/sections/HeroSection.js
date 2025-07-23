"use client"
import { COMPANY_INFO } from '@/app/data/constants'
import { useScrollTo } from '@/app/hooks/useScrollTo'
import { Button } from '../ui/button'
import { ServerIcon } from '../Icons/icons'

export const HeroSection = () => {
  const scrollToSection = useScrollTo()

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {COMPANY_INFO.tagline.split(' ').slice(0, 2).join(' ')}
              <span className="text-cyan-400"> {COMPANY_INFO.tagline.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              DataWave Insights provides cutting-edge data center solutions, transforming how businesses store,
              process, and manage their digital assets across Algeria and beyond.
            </p>
            <Button onClick={() => scrollToSection('services')}>
              Explore Our Services
            </Button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <ServerIcon className="w-24 h-24 mx-auto mb-4 text-cyan-400" />
                <p className="text-lg">Data Center Infrastructure</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}