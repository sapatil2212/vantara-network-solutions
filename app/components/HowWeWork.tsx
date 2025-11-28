'use client'

import { useState } from 'react'
import { FiSearch, FiLayers, FiSettings, FiCheckCircle, FiActivity, FiHeadphones } from 'react-icons/fi'

interface ProcessStep {
  number: string
  icon: React.ReactNode
  title: string
  description: string
  goal: string
}

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      icon: <FiSearch className="w-8 h-8" />,
      title: 'Strategy',
      description:
        'We design smart IT & digital strategies that align with your business goals, ensuring sustainable growth and long-term success.',
      goal: 'Build a clear technology roadmap that supports your vision.',
    },
    {
      number: '02',
      icon: <FiLayers className="w-8 h-8" />,
      title: 'Planning',
      description:
        'Every project is executed with a clear roadmap, efficient resource allocation, and result-driven planning.',
      goal: 'Ensure every initiative is structured, realistic, and outcome-focused.',
    },
    {
      number: '03',
      icon: <FiSettings className="w-8 h-8" />,
      title: 'Security',
      description:
        'From data protection to network safety, we ensure your IT environment is safe, secure, and reliable.',
      goal: 'Protect critical assets while maintaining performance and availability.',
    },
    {
      number: '04',
      icon: <FiHeadphones className="w-8 h-8" />,
      title: 'Support',
      description:
        'Round-the-clock support to keep your systems running smoothly – because your business deserves zero downtime.',
      goal: 'Deliver dependable assistance whenever you need it.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vantara/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vantara-light/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="heading-secondary mb-4">How We Work – Our Seamless IT Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A fast, transparent, and reliable workflow built to deliver high-performance IT solutions every time.
          </p>
        </div>

        {/* Process Steps – Horizontal Cards */}
        <div className="mb-12">
          <div className="relative rounded-3xl bg-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.05)] border border-gray-200/70 p-8 overflow-x-auto">
            <div className="flex gap-0 divide-x divide-gray-200/70">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`
                    flex-1 px-6 py-4
                    transition-all duration-300
                    ${activeStep === index ? 'bg-vantara/3' : 'bg-transparent'}
                  `}
                >
                  <div className="flex flex-col h-full">
                    {/* Top meta: dots + step number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-vantara" />
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                      </div>
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Flow Visualization */}
        <div className="relative mt-16 pt-6 ">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">
              Our Commitment to Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-gray-200">
              <div className="text-center md:px-6">
                <div className="w-20 h-20 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-vantara">100%</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-2xl">Transparent Process</h4>
                <p className="text-gray-600 text-sm">
                  Complete visibility at every stage of your project
                </p>
              </div>
              <div className="text-center md:px-6">
                <div className="w-20 h-20 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-vantara">24/7</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-2xl">Always Available</h4>
                <p className="text-gray-600 text-sm">
                  Round-the-clock support for your peace of mind
                </p>
              </div>
              <div className="text-center md:px-6">
                <div className="w-20 h-20 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-vantara">0</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-2xl">Zero Disruption</h4>
                <p className="text-gray-600 text-sm">
                  Seamless implementation without affecting your operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
