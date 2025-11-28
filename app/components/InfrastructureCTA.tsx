import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
                className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
