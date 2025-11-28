import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function SecurityCTA() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom px-4">
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url(/images/core-services/security/security-cta.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />
          
          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business with Vantara Network Solutions
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From network protection to identity management and data security, we help organizations build a safe and resilient IT environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-white text-vantara px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Request Security Assessment
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
