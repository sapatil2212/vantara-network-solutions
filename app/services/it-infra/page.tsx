import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FiServer, 
  FiCheckCircle, 
  FiShield, 
  FiZap, 
  FiTrendingUp, 
  FiSettings,
  FiHardDrive,
  FiMonitor,
  FiDatabase,
  FiCpu,
  FiActivity,
  FiPackage,
  FiTool,
  FiWifi,
  FiLock,
  FiPhone
} from 'react-icons/fi'
import InfrastructureCTA from '@/app/components/InfrastructureCTA'
import FAQSection from '@/app/components/FAQSection'
import { 
  HiOutlineOfficeBuilding, 
  HiOutlineAcademicCap, 
  HiOutlineShoppingCart,
  HiOutlineTruck,
  HiOutlineLibrary
} from 'react-icons/hi'
import { RiHospitalLine, RiGovernmentLine } from 'react-icons/ri'
import { MdFactory, MdAccountBalance } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'IT Infrastructure Solutions - Vantara Network Solutions',
  description: 'Build a solid, secure, and scalable technology foundation for your business. Enterprise-grade IT infrastructure solutions including virtualization, networking, storage, and complete IT setup.',
}

export default function HardwareServicesPage() {
  const faqData = [
    {
      question: "What is IT infrastructure and why is it important?",
      answer: "IT infrastructure includes servers, networks, storage, virtualization, and security systems. It's the foundation of your business—ensuring smooth, secure, and uninterrupted operations."
    },
    {
      question: "Do you provide complete IT infrastructure setup?",
      answer: "Yes, we offer end-to-end IT infrastructure deployment including network setup, server configuration, storage solutions, virtualization, and security implementation."
    },
    {
      question: "What virtualization platforms do you support?",
      answer: "We support all major virtualization platforms including VMware, Hyper-V, KVM, and provide complete VM migration, HA setup, and disaster recovery solutions."
    },
    {
      question: "Can you help with network security and firewall setup?",
      answer: "Absolutely. We implement enterprise-grade firewalls (Fortinet, Cisco, Sophos, Palo Alto), VPN solutions, intrusion detection systems, and complete network security architecture."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we provide 24×7 monitoring, proactive maintenance, AMC services, and managed IT services to ensure your infrastructure runs smoothly at all times."
    }
  ]

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          backgroundImage: 'url(/images/core-services/it-infra.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-vantara/70 to-black/80" />
        
        {/* Content */}
        <div className="container-custom relative z-10 px-4 md:px-0">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              IT Infrastructure Solutions
            </h1>
            <p className="text-sm md:text-lg md:text-xl mb-2 md:mb-8 opacity-95 leading-relaxed">
              Build a solid, secure, and scalable technology foundation for your business. At Vantara Network Solutions, we design, deploy, and maintain robust IT infrastructure that ensures your operations run smoothly with maximum efficiency and uptime.
            </p>
            <p className="text-sm md:text-lg mb-10 opacity-90">
              From virtualization and networking to storage and complete IT setup—we deliver enterprise-grade infrastructure solutions built for modern business needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-vantara px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              Complete IT Infrastructure Lifecycle Management
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/it-infra/it-infra-2.png"
                  alt="IT Infrastructure Overview"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Your IT infrastructure is the backbone of your digital operations. At Vantara, we help organizations build powerful, secure, and scalable infrastructure with virtualization, networking, storage, and complete IT setup solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiSettings, title: 'Planning & Consulting' },
                    { icon: FiServer, title: 'Virtualization Setup' },
                    { icon: FiWifi, title: 'Network Deployment' },
                    { icon: FiDatabase, title: 'Storage Solutions' },
                    { icon: FiShield, title: 'Security & Firewall' },
                    { icon: FiMonitor, title: '24×7 Monitoring' },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 group"
                    >
                      <div className="bg-blue-900 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-vantara/5 to-vantara/10 p-6 rounded-2xl border border-vantara/20 space-y-3">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    From initial planning to deployment and ongoing support, we ensure every component of your infrastructure is optimized, secure, and future-ready.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Our solutions enhance productivity, maximize uptime, and support long-term business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Virtualization Solutions */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl">
                    <FiServer className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Virtualization Setups</h2>
                    <p className="text-purple-600 font-semibold mt-1">Modernize Your IT with Efficient Virtualization Technology</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Virtualization helps businesses reduce hardware dependency, improve performance, and maximize resource utilization. At Vantara, we design and deploy high-performance virtualization environments tailored to your workloads, infrastructure size, and future scalability plans.
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-2xl space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">Our Virtualization Solutions Include:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Server Virtualization: VMware, Hyper-V, KVM',
                      'Desktop Virtualization (VDI)',
                      'Network Virtualization',
                      'Storage Virtualization',
                      'VM Migrations & Replication',
                      'HA & DR Environment Setup'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiZap, text: 'Reduced hardware costs' },
                    { icon: FiTrendingUp, text: 'Increased efficiency' },
                    { icon: FiActivity, text: 'Faster deployment' },
                    { icon: FiSettings, text: 'Better scalability' },
                    { icon: FiMonitor, text: 'Simplified management' },
                    { icon: FiShield, text: 'Enhanced resilience' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-purple-100">
                      <benefit.icon className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/it-infra/it-infra-3.png"
                  alt="Virtualization Solutions"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Network & Firewall Solutions */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/it-infra/it-infra-4.png"
                  alt="Network & Firewall Solutions"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl">
                    <FiWifi className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Network & Firewall Solutions</h2>
                    <p className="text-blue-600 font-semibold mt-1">Secure, High-Performance Network Architecture</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Your network is the foundation of your IT operations. We build enterprise-grade networks designed for speed, stability, and security, ensuring your teams stay connected without interruptions.
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FiWifi className="w-5 h-5 text-blue-600" />
                      Network Solutions
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'LAN/WAN Setup & Optimization',
                        'Enterprise WiFi Deployment',
                        'Routing & Switching Solutions',
                        'SD-WAN & Multi-Branch Connectivity',
                        'Real-Time Monitoring'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-5 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FiShield className="w-5 h-5 text-red-600" />
                      Firewall & Security
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Hardware Firewalls (Fortinet, Cisco, Sophos, Palo Alto)',
                        'Next-Gen Firewall (NGFW)',
                        'VPN & Secure Remote Access',
                        'IDS/IPS Systems',
                        'Policy & Access Management'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FiCheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Storage & Backup Systems */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl">
                    <FiDatabase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Storage & Backup Systems</h2>
                    <p className="text-green-600 font-semibold mt-1">Reliable Data Storage & Protection</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Your data is your biggest asset. Vantara delivers high-performance storage and backup solutions designed to safeguard your critical information and ensure uninterrupted business operations.
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-5 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FiDatabase className="w-5 h-5 text-green-600" />
                      Storage Solutions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'NAS, SAN & Unified Storage',
                        'On-Premises & Hybrid Storage',
                        'High-Speed Data Access',
                        'Storage Virtualization',
                        'Multi-Site Replication'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FiCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-5 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FiShield className="w-5 h-5 text-orange-600" />
                      Backup & Data Protection
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Automated Backup Systems',
                        'Cloud Backup Solutions',
                        'Disaster Recovery Planning',
                        'RTO/RPO-driven DR Strategy',
                        'Backup Encryption',
                        'Long-Term Archival'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FiCheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FiShield, text: 'Eliminates data loss' },
                    { icon: FiZap, text: 'Faster recovery' },
                    { icon: FiTrendingUp, text: 'Scalable storage' },
                    { icon: FiLock, text: 'Secure access control' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-green-100">
                      <benefit.icon className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/it-infra/it-infra-5.png"
                  alt="Storage & Backup Solutions"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IPBX Solutions */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/it-infra/it-infra-6.jpg"
                  alt="IPBX Solutions"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl">
                    <FiPhone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">IPBX Solutions</h2>
                    <p className="text-indigo-600 font-semibold mt-1">Modern Business Communication Systems</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Transform your business communication with advanced IP-based PBX systems. Vantara delivers scalable, feature-rich IPBX solutions that enhance collaboration, reduce costs, and improve productivity across your organization.
                </p>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">Our IPBX Solutions Include:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Cloud-Based IPBX Systems',
                      'On-Premises IPBX Setup',
                      'Hybrid IPBX Solutions',
                      'VoIP Integration',
                      'Multi-Site Connectivity',
                      'Call Center Solutions',
                      'Auto Attendant & IVR',
                      'Call Recording & Analytics',
                      'Mobile & Remote Extensions',
                      'Unified Communications'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <FAQSection 
        title="FAQ – Your Questions Answered"
        faqs={faqData}
        imageSrc="/images/faq.png"
      />

      {/* CTA Section */}
      <InfrastructureCTA />
    </>
  )
}
