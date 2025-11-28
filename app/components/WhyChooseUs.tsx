'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    number: '01',
    title: 'End-to-End Solutions',
    description: 'From IT infrastructure to digital transformation, everything under one roof.'
  },
  {
    number: '02',
    title: 'Experienced Team',
    description: 'Skilled professionals with expertise in IT, security & digital marketing.'
  },
  {
    number: '03',
    title: '24/7 Reliable Support',
    description: 'Quick response and zero downtime for your business operations.'
  },
  {
    number: '04',
    title: 'Client-Centric Approach',
    description: 'Tailored solutions designed to match your unique business needs.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0a3d62] via-[#0c4a6e] to-[#0a3d62] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider ml-2">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                At Vantara Network Solutions, we don&apos;t just deliver services — we deliver value, trust, and results.
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs font-bold text-orange-400">{feature.number}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-gray-200 leading-relaxed"
            >
              Vantara Network Solutions delivers secure, reliable, and innovative IT & digital services with expert support, helping businesses grow confidently since 2019.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/images/core-services/1.jpg"
                alt="Vantara Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
