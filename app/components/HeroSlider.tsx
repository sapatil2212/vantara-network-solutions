'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import Link from 'next/link'
import AnimatedText from './AnimatedText'
import { ArrowRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
    {
      image: '/images/hero/hero-1.png',
      mobileImage: '/images/hero/mobile-hero-1.png',
      title: 'Empowering Businesses With Reliable Network & IT Solutions',
      subtitle: 'Exclusive Technology to Elevate Your IT Infrastructure',
      description: 'Experience seamless connectivity, high-performance networks, and future-ready IT systems designed for business excellence.',
    },
    {
      image: '/images/hero/hero-2.png',
      mobileImage: '/images/hero/hero-2-mobile.jpg',
      title: 'Enterprise Network Solutions That Scale',
      subtitle: 'Future-Proof Your Business Infrastructure',
      description: 'Design, deploy, and manage enterprise-grade networks that grow with your business needs.',
    },
    {
      image: '/images/hero/hero-3.png',
      mobileImage: '/images/hero/hero-3-mobile.jpg',
      title: 'Complete IT Infrastructure & Security',
      subtitle: 'Protect Your Digital Assets',
      description: 'Comprehensive cybersecurity and IT infrastructure solutions to safeguard your business operations.',
    },
  ]

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([])

  useEffect(() => {
    // Preload images and track loading state
    slides.forEach((slide, index) => {
      const img = new window.Image()
      img.src = slide.image
      img.onload = () => {
        setImageLoaded(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
    })
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Hero Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-screen z-10 relative hero-swiper group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image with Overlay - Desktop */}
              <div
                className={`hidden md:block absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              
              {/* Background Image with Overlay - Mobile */}
              <div
                className={`md:hidden absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${slide.mobileImage})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 container-custom h-full flex items-start md:items-center justify-center md:justify-start pt-28 md:pt-0 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-white w-full text-center md:text-left">
                  {activeIndex === index && (
                    <>
                      <AnimatedText 
                        text={slide.title}
                        delay={200}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                      />
                      <AnimatedText 
                        text={slide.subtitle}
                        delay={600}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-vantara-light"
                      />
                      <AnimatedText 
                        text={slide.description}
                        delay={1000}
                        className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl"
                      />
                      <AnimatedText delay={1400} className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                        <Link href="/contact" className="group/btn relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105">
                          Get a Consultation
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                        <Link href="/services" className="group/btn relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-vantara text-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300">
                          Explore Services
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                      </AnimatedText>
                    </>
                  )}
                </div>
              </div>

              {/* Fallback for no-JS browsers */}
              <noscript>
                <div className="absolute inset-0 flex items-center justify-center bg-vantara text-white">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl">{slide.description}</p>
                  </div>
                </div>
              </noscript>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  )
}
