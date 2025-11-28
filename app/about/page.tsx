import { Metadata } from 'next'
import Image from 'next/image'
import { FiTarget, FiEye, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi'
import WhyChooseUs from '../components/WhyChooseUs'

export const metadata: Metadata = {
  title: 'About Us - Vantara Network Solutions',
  description: 'Learn about Vantara Network Solutions - your trusted partner for enterprise IT infrastructure, network solutions, and technology services.',
  openGraph: {
    title: 'About Us - Vantara Network Solutions',
    description: 'Learn about Vantara Network Solutions - your trusted partner for enterprise IT infrastructure.',
    images: ['/images/og-image.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
          style={{
            backgroundImage: 'url(/images/hero/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

          <div className="container-custom relative z-10 px-4 md:px-0">
            <div className="max-w-4xl text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                About Vantara Network Solutions
              </h1>
              <p className="text-sm sm:text-base md:text-xl mb-3 md:mb-6 opacity-95 leading-relaxed">
                Building the future of IT—one business at a time
              </p>
              <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                Your trusted partner for enterprise IT infrastructure, network solutions, and technology services.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/core-services/it-infra.png"
                  alt="Vantara IT Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-vantara/10 rounded-full px-4 py-2 mb-6">
                <FiUsers className="w-5 h-5 text-vantara" />
                <span className="text-vantara font-semibold">Who We Are</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Provider of IT Infrastructure Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Vantara Network Solutions is a leading provider of comprehensive IT infrastructure and network solutions. 
                With years of expertise in the industry, we specialize in delivering cutting-edge technology services 
                that empower businesses to achieve their digital transformation goals.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From enterprise networking and data center solutions to cybersecurity and cloud services, we offer 
                end-to-end solutions tailored to meet the unique needs of modern businesses.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Certified professionals with deep industry expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Authorized partners of Dell, HP, Cisco, Juniper, and NetApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                  <span className="text-gray-700">End-to-end solutions for modern businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-vantara-light mb-2">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-vantara-light mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-vantara-light mb-2">200+</div>
              <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-vantara-light mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600">Driving innovation and excellence in IT infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-vantara/5 to-vantara/10 p-8 rounded-2xl border border-vantara/20 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vantara/10 rounded-xl flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with reliable, scalable, and innovative IT solutions that drive growth, 
                enhance productivity, and ensure seamless operations. We are committed to delivering exceptional 
                value through cutting-edge technology, expert guidance, and unwavering customer support.
              </p>
            </div>
            <div className="bg-gradient-to-br from-vantara/5 to-vantara/10 p-8 rounded-2xl border border-vantara/20 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-vantara/10 rounded-xl flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred IT infrastructure partner, recognized for excellence in 
                service delivery, innovation, and customer satisfaction. We envision a future where every business, 
                regardless of size, has access to enterprise-grade technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Component */}
      <WhyChooseUs />

      {/* Our Expertise */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600">Comprehensive IT solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Enterprise Network Design & Implementation',
              'Data Center Infrastructure',
              'Cloud Computing Solutions',
              'Cybersecurity & Information Security',
              'Structured Cabling Systems',
              'Hardware Sales & Support',
              'Internet Leased Lines',
              'Video Conferencing Solutions',
              'Server Virtualization',
              'Disaster Recovery & Backup',
              'IT Consulting & Strategy',
              '24/7 Managed Services',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-vantara hover:shadow-lg transition-all duration-300">
                <div className="text-vantara mt-0.5">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600">Excellence in every aspect of IT service delivery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-2xl border border-vantara/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-vantara/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Certified professionals with deep industry expertise and vendor certifications
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-2xl border border-vantara/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-vantara/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiAward className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authorized Partners</h3>
              <p className="text-gray-600 text-sm">
                Official partnerships with leading technology brands worldwide
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-2xl border border-vantara/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-vantara/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiTarget className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">
                Tailored solutions designed to meet your specific business requirements
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-2xl border border-vantara/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-vantara/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiEye className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock technical support to ensure business continuity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>
            <p className="text-lg text-gray-600">Building long-term partnerships based on trust and innovation</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Vantara Network Solutions, we are committed to delivering excellence in every project we undertake. 
                Our customer-centric approach ensures that we understand your business challenges and provide solutions 
                that not only meet but exceed your expectations.
              </p>
              <p>
                We believe in building long-term partnerships based on trust, transparency, and mutual success. Our 
                commitment extends beyond project completion—we provide ongoing support, maintenance, and upgrades to 
                ensure your IT infrastructure remains robust and future-ready.
              </p>
              <p>
                Quality, reliability, and innovation are at the core of everything we do. Partner with us to experience 
                the difference that true expertise and dedication can make to your business.
              </p>
            </div>
            <div className="mt-10 text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-vantara hover:bg-vantara-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <FiTarget className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
