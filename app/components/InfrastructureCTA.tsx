import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function InfrastructureCTA() {
  return (
    <section className="py-8 md:py-16">
      <div className="container-custom">
        <div 
          className="relative text-white rounded-[40px] px-6 md:px-16 py-10 md:py-14 text-center overflow-hidden"
          style={{
            backgroundImage: 'url(/images/network-data-structure.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-vantara/60 rounded-[40px]" />
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            
            {/* Subheading */}
            <p className="text-sm md:text-lg mb-6 md:mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto">
              Let&apos;s build a robust, secure, and scalable infrastructure that powers your business growth. 
              Our experts are ready to design the perfect solution for your organization.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center items-center">
              <Link 
                href="/contact" 
                className="group bg-white text-vantara px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-xs md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-1 md:gap-2"
              >
                Get Started
                <FiArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
