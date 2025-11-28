import Link from 'next/link'

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
    className="
      bg-white text-vantara 
      px-4 py-2       /* smaller for mobile */
      rounded-full font-bold text-base /* smaller font for mobile */
      shadow-xl hover:shadow-2xl 
      transform hover:scale-105 transition-all duration-300
      md:px-8 md:py-4 md:text-lg       /* larger on md+ screens */
    "
  >
    Get Started Today
  </Link>

  <Link 
    href="/services" 
    className="
      bg-transparent border-2 border-white text-white 
      px-4 py-2       
      rounded-full font-bold text-base 
      hover:bg-white hover:text-vantara transition-all duration-300
      md:px-8 md:py-4 md:text-lg      
    "
  >
    View Our Services
  </Link>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
