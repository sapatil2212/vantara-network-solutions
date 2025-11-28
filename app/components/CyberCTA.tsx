import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CyberCTA() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom px-4">
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url(/images/core-services/cyber/1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />
          
          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Digital Future with Vantara
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Protect your business with advanced cybersecurity solutions—built to stop threats before they happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
              >
                Request Security Assessment
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
