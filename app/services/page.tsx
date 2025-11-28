import { Metadata } from 'next'
import ServiceCard from '../components/ServiceCard'
import { 
  FiServer, 
  FiHardDrive, 
  FiCloud, 
  FiShield, 
  FiLock, 
  FiWifi, 
  FiMonitor,
  FiTool,
  FiHome
} from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Our Services - Enterprise IT & Network Solutions',
  description: 'Comprehensive IT infrastructure services including network solutions, data center, cloud services, cybersecurity, hardware support, and more.',
  openGraph: {
    title: 'Our Services - Vantara Network Solutions',
    description: 'Comprehensive IT infrastructure and network solutions for enterprises.',
    images: ['/images/og-image.jpg'],
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: <FiServer className="w-8 h-8" />,
      title: 'Network Solutions',
      description: 'Enterprise network design, implementation, and management. LAN, WAN, wireless networks, and SD-WAN solutions.',
      link: '/services/network',
    },
    {
      icon: <FiHardDrive className="w-8 h-8" />,
      title: 'Hardware & IT Infrastructure',
      description: 'Complete IT infrastructure setup including servers, storage, workstations, and enterprise hardware sales.',
      link: '/services/hardware',
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: 'Data Center Solutions',
      description: 'Design, build, and manage modern data centers with virtualization, storage, and backup solutions.',
      link: '/services/datacenter',
    },
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Cloud migration, hybrid cloud setup, cloud infrastructure management, and multi-cloud solutions.',
      link: '/services/cloud',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Information Security',
      description: 'Comprehensive security solutions including firewalls, IDS/IPS, security audits, and compliance.',
      link: '/services/security',
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Advanced threat protection, endpoint security, SIEM, SOC services, and penetration testing.',
      link: '/services/cyber',
    },
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: 'Telecom Solutions',
      description: 'Internet leased lines, broadband, MPLS, VPN, and unified communication solutions.',
      link: '/services/telecom',
    },
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: 'Software Solutions',
      description: 'Enterprise software, licensing, ERP, CRM, and custom software development services.',
      link: '/services/software',
    },
    {
      icon: <FiHome className="w-8 h-8" />,
      title: 'Hotel Management Systems',
      description: 'Specialized HMS solutions including PMS, POS, booking engines, and hospitality IT infrastructure.',
      link: '/services/hms',
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: 'Repair & Support',
      description: 'Hardware repair, AMC services, on-site support, remote assistance, and preventive maintenance.',
      link: '/services/repair',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-vantara text-white py-20">
        <div className="container-custom">
          <h1 className="heading-primary mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive IT and network solutions designed to empower your business with cutting-edge technology
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From network infrastructure to cybersecurity, we provide end-to-end IT solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vantara text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Certified professionals with years of industry experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vantara text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                Enterprise-grade solutions from leading technology brands
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vantara text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">
                24/7 technical support and maintenance services
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vantara text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Value</h3>
              <p className="text-gray-600">
                Competitive pricing with exceptional ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-vantara text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s discuss your IT infrastructure needs and design a solution that drives your business forward
          </p>
          <a href="/contact" className="bg-white text-vantara px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block">
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  )
}
