import { Metadata } from 'next'
import Image from 'next/image'
import HeroSlider from './components/HeroSlider'
import ServiceCard from './components/ServiceCard'
import TrustedBrands from './components/TrustedBrands'
import CTASection from './components/CTASection'
import ParticleBackground from './components/ParticleBackground'
import HowWeWork from './components/HowWeWork'
import { FiServer, FiShield, FiCloud, FiHardDrive, FiWifi, FiTool } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Home - Empowering Businesses With Reliable Network & IT Solutions',
  description: 'Vantara Network Solutions provides enterprise network solutions, IT infrastructure, data center & cloud services, cybersecurity, and hardware support.',
  openGraph: {
    title: 'Vantara Network Solutions - Enterprise IT & Network Infrastructure',
    description: 'Empowering Businesses With Reliable Network & IT Solutions',
    images: ['/images/og-image.jpg'],
  },
}

export default function HomePage() {
  const quickServices = [
    {
      icon: <FiServer className="w-8 h-8" />,
      title: 'Enterprise Network Solutions',
      description: 'Design, deploy, and manage high-performance enterprise networks tailored to your business needs.',
      link: '/services/network',
      image: '/images/core-services/1.jpg',
    },
    {
      icon: <FiHardDrive className="w-8 h-8" />,
      title: 'IT Infrastructure Setup',
      description: 'Complete IT infrastructure solutions from planning to implementation and maintenance.',
      link: '/services/hardware',
      image: '/images/core-services/2.jpg',
    },
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: 'Data Center & Cloud Services',
      description: 'Modern data center solutions and seamless cloud migration services.',
      link: '/services/datacenter',
      image: '/images/core-services/3.png',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Cybersecurity & Information Security',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      link: '/services/security',
      image: '/images/core-services/4.jpg',
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: 'Hardware Sales, Support & AMC',
      description: 'Authorized sales and support for leading enterprise hardware brands.',
      link: '/services/hardware',
      image: '/images/core-services/5.jpg',
    },
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: 'Internet Leased Lines & Telecom',
      description: 'Reliable connectivity solutions with dedicated internet leased lines.',
      link: '/services/telecom',
      image: '/images/core-services/6.jpg',
    },
  ]

  return (
    <>
      {/* Hero Section with Slider and Particles */}
      <div className="relative overflow-hidden">
        <ParticleBackground id="hero-particles" />
        <HeroSlider />
      </div>

      {/* Quick Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT and network solutions designed to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="btn-primary inline-block">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Why Choose Vantara Network Solutions?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vantara text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Certified professionals with extensive experience in enterprise IT and networking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vantara text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Successfully delivered hundreds of projects across diverse industries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vantara text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Round-the-clock technical support to ensure your business never stops.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vantara text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Authorized Partners</h3>
                    <p className="text-gray-600">
                      Official partners with leading technology brands like Dell, HP, Cisco, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Replace with your actual image */}
              <Image 
                src="/images/why-choose-us/1.png"
                alt="Why Choose Vantara Network Solutions"
                width={600}
                height={600}
                className="rounded-[40px] object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <HowWeWork />

      {/* Trusted Brands Section */}
      <TrustedBrands />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
