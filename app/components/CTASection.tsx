import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div 
          className="relative text-white rounded-[40px] px-8 md:px-16 py-10 md:py-20 text-center md:text-left overflow-hidden"
          style={{
            backgroundImage: 'url(/images/cta.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-vantara/60 rounded-[40px]" />
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
              Building the future of IT one business at a time.
            </h2>
            <p className="text-xs md:text-xl mb-5 ms:mb-10 max-w-3xl md:mx-0 mx-auto opacity-95 leading-relaxed">
              Partner with Vantara Network Solutions today and transform your IT infrastructure with cutting-edge technology and expert support.
            </p>
            <div className="flex flex-row gap-2 justify-center md:justify-start">
  <Link 
    href="/contact" 
    className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
  >
    Get Started Today
    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
  </Link>


</div>

          </div>
        </div>
      </div>
    </section>
  )
}
