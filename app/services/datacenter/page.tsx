import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FiServer, 
  FiCheckCircle, 
  FiShield, 
  FiZap, 
  FiSettings,
  FiMonitor,
  FiDatabase,
  FiActivity,
  FiTool,
  FiCpu,
  FiHardDrive
} from 'react-icons/fi'
import FAQSection from '@/app/components/FAQSection'
import DataCenterCTA from '@/app/components/DataCenterCTA'

export const metadata: Metadata = {
  title: 'Data Center Services - Vantara Network Solutions',
  description: 'Power your business with secure, scalable, and high-performance data center solutions. DC infrastructure consultation, co-location, dedicated hosting, VPS, and 24×7 monitoring.',
}

export default function DataCenterServicesPage() {
  const faqData = [
    {
      question: "What is data center infrastructure consultation?",
      answer: "DC infrastructure consultation involves analyzing your business needs, workloads, and growth plans to design a robust, scalable, and energy-efficient data center architecture tailored to your requirements."
    },
    {
      question: "What are co-location services?",
      answer: "Co-location services allow you to host your servers and storage in our state-of-the-art facilities with redundant power, cooling, security, and high-speed connectivity—without building your own data center."
    },
    {
      question: "What's the difference between dedicated hosting and VPS?",
      answer: "Dedicated hosting provides complete physical server resources exclusively for you, while VPS offers virtualized resources with guaranteed allocation. Dedicated is ideal for high-performance needs; VPS is cost-effective for growing businesses."
    },
    {
      question: "Do you provide 24×7 monitoring and support?",
      answer: "Yes, we offer round-the-clock infrastructure monitoring with proactive alerts, performance optimization, and dedicated technical support to ensure zero downtime."
    },
    {
      question: "Can I scale my hosting resources as my business grows?",
      answer: "Absolutely. Our co-location, dedicated hosting, and VPS solutions are designed to scale seamlessly as your business expands, ensuring flexibility and cost-efficiency."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
          style={{
            backgroundImage: 'url(/images/core-services/datacenter/1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

          <div className="container-custom relative z-10 px-4 md:px-0">
            <div className="max-w-4xl text-center md:text-left">
              {/* Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Data Center Services
              </h1>

              {/* Subtext 1 */}
              <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-8 opacity-95 leading-relaxed">
                Power your business with secure, scalable, and high-performance data center solutions built for today&apos;s mission-critical workloads.
              </p>

              {/* Subtext 2 */}
              <p className="text-xs sm:text-sm md:text-lg mb-8 md:mb-10 opacity-90 leading-relaxed">
                Whether you need full data center infrastructure consultation or a reliable hosting platform, our solutions ensure your applications, data, and systems remain accessible, protected, and optimized—24/7.
              </p>

              {/* Button */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Link 
                  href="/contact" 
                  className="bg-white text-vantara px-5 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Overview Section */}
      <section id="overview" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              Complete Data Center Lifecycle Management
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/datacenter/2.png"
                  alt="Data Center Services Overview"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  At Vantara, we help organizations design, host, and manage data center environments that deliver maximum uptime, strong security, and enterprise-grade performance.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiSettings, title: 'DC Consultation', color: 'bg-blue-500' },
                    { icon: FiServer, title: 'Co-location Services', color: 'bg-blue-500' },
                    { icon: FiDatabase, title: 'Dedicated Hosting', color: 'bg-blue-500' },
                    { icon: FiCpu, title: 'VPS Hosting', color: 'bg-blue-500' },
                    { icon: FiMonitor, title: '24×7 Monitoring', color: 'bg-blue-500' },
                    { icon: FiShield, title: 'Security & Compliance', color: 'bg-blue-500' },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 group"
                    >
                      <div className={`${item.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl border border-blue-100 space-y-3">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    From infrastructure planning to hosting and monitoring, we ensure every component of your data center is optimized, secure, and future-ready.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Our solutions enhance reliability, maximize uptime, and support long-term business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Header */}
      <section className="bg-white">
        <div className="container-custom">
          <div className="text-center mb-2">
            <h2 className="heading-secondary mb-4">Our Data Center Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions for modern data center needs
            </p>
          </div>
        </div>
      </section>

      {/* 1. DC Infra Consultation */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiSettings className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">DC Infra Consultation</h3>
                    <p className="text-blue-600 font-semibold mt-1">End-to-End Data Center Infrastructure Planning & Architecture</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed">
                  Our Data Center Infrastructure Consultation service helps businesses build robust, scalable, and energy-efficient infrastructures tailored to their operational needs. We analyze your IT workflows, growth plans, workloads, compliance requirements, and existing setups to design a future-ready data center architecture.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Our Consultation Includes:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Requirement analysis & capacity planning',
                      'Data center architecture (Tier I–IV)',
                      'Rack, power & cooling planning',
                      'Structured cabling & network design',
                      'Redundancy & failover planning',
                      'Security & access control structure',
                      'Cloud, on-premises or hybrid recommendations'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiShield, text: 'Reduced downtime' },
                      { icon: FiZap, text: 'Better resource utilization' },
                      { icon: FiActivity, text: 'Scalable design' },
                      { icon: FiCheckCircle, text: 'Compliance-ready' }
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-blue-100">
                        <benefit.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/datacenter/3.png"
                  alt="DC Infrastructure Consultation"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Co-location Services */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/datacenter/4.png"
                  alt="Co-location Services"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiServer className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Co-location Services</h3>
                    <p className="text-blue-600 font-semibold mt-1">Secure Environment. Reliable Infrastructure. Zero Downtime.</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  With Vantara&apos;s Co-location Services, businesses can host their critical servers and storage in state-of-the-art facilities designed for maximum uptime and operational efficiency. You get the power, security, and redundancy of a world-class data center—without the cost of building your own.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Rack Space</strong><br/>
                        Full / Half / Quarter rack options
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiZap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Redundant Power & Cooling</strong><br/>
                        Precision cooling and uninterrupted power supply
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Security & Safety</strong><br/>
                        Biometric access, surveillance, fire suppression
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiMonitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>24×7 Monitoring & Support</strong><br/>
                        Round-the-clock technical assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Server Hosting */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiDatabase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Dedicated Server Hosting</h3>
                    <p className="text-blue-600 font-semibold mt-1">Your Own High-Performance Server Environment</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Our Dedicated Hosting solutions offer complete control, unmatched performance, and total security—ideal for enterprises handling large applications, databases, ERPs, and workloads.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Fully Dedicated Hardware</strong><br/>
                        No shared resources, complete control
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Custom Configurations</strong><br/>
                        CPU, RAM, storage, OS tailored to your needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Enterprise Security</strong><br/>
                        Firewall protection and secure access
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiHardDrive className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>SSD/NVMe Storage</strong><br/>
                        High-speed storage options available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Perfect For:</strong> High-traffic websites, big data & analytics, ERP/CRM systems, financial & e-commerce platforms
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/datacenter/5.png"
                  alt="Dedicated Server Hosting"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VPS Hosting */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/datacenter/6.png"
                  alt="VPS Hosting"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiCpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">VPS Hosting</h3>
                    <p className="text-blue-600 font-semibold mt-1">Flexible, Scalable & Cost-Effective Virtual Hosting</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Our Virtual Private Server (VPS) Hosting is ideal for businesses needing flexibility, strong performance, and scalability without the cost of a dedicated server. Each VPS operates like a dedicated system with isolated resources, ensuring consistent reliability.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCpu className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Guaranteed Resources</strong><br/>
                        Dedicated CPU, RAM & storage allocation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Full Root Access</strong><br/>
                        Complete administrator control
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiHardDrive className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>SSD-Powered Storage</strong><br/>
                        Fast and reliable performance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Easy Scaling</strong><br/>
                        Upgrade resources as you grow
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Best For:</strong> Growing businesses, application hosting, development/testing environments, medium-scale workloads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DC Infra Monitoring */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiMonitor className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">DC Infra Monitoring</h3>
                    <p className="text-blue-600 font-semibold mt-1">24×7 Monitoring & Predictive Maintenance for Zero Downtime</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Your data center must operate flawlessly at all times. Our Data Center Infrastructure Monitoring services ensure continuous visibility, quick issue detection, and proactive performance optimization.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">We Monitor:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Server health & performance',
                      'Network traffic & bandwidth',
                      'Power & cooling systems',
                      'Storage capacity & performance',
                      'Security & access logs',
                      'Environmental metrics'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiShield, text: 'Prevent downtime' },
                      { icon: FiZap, text: 'Quick troubleshooting' },
                      { icon: FiActivity, text: 'Better utilization' },
                      { icon: FiCheckCircle, text: 'SLA-based reporting' }
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-blue-100">
                        <benefit.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/datacenter/7.png"
                  alt="DC Infrastructure Monitoring"
                  className="w-full h-full object-cover rounded-3xl"
                />
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
      <DataCenterCTA />
    </>
  )
}
