import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FiCloud, 
  FiCheckCircle, 
  FiShield, 
  FiZap, 
  FiSettings,
  FiMonitor,
  FiDatabase,
  FiActivity,
  FiServer,
  FiCpu,
  FiHardDrive,
  FiRefreshCw,
  FiArrowRight,
  FiArrowLeft
} from 'react-icons/fi'
import FAQSection from '@/app/components/FAQSection'
import MigrationCTA from '@/app/components/MigrationCTA'

export const metadata: Metadata = {
  title: 'Migration Services - Vantara Network Solutions',
  description: 'Seamlessly transition your applications, workloads, and infrastructure. Cloud to on-premises, on-premises to cloud, cross-platform migration, and Hyper-V/VMware to KVM migration.',
}

export default function CloudServicesPage() {
  const faqData = [
    {
      question: "What is cloud to on-premises migration?",
      answer: "Cloud to on-premises migration involves moving workloads, applications, and data from cloud platforms back to your local infrastructure. This is often done for cost optimization, compliance requirements, or performance needs."
    },
    {
      question: "How long does a typical migration take?",
      answer: "Migration timelines vary based on workload size, complexity, and platform. Simple migrations can take a few days, while enterprise-scale migrations may take several weeks. We provide detailed timelines during the assessment phase."
    },
    {
      question: "Will there be downtime during migration?",
      answer: "We minimize downtime through careful planning, parallel testing, and strategic cutover windows. Many migrations can be performed with near-zero downtime using live migration techniques."
    },
    {
      question: "Do you support migration to KVM for Forex trading systems?",
      answer: "Yes, we specialize in migrating high-performance workloads including Forex trading systems, HFT applications, and financial platforms from Hyper-V/VMware to KVM with precision and stability."
    },
    {
      question: "What cloud platforms do you support?",
      answer: "We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud, as well as private cloud and hybrid cloud setups. We also handle multi-cloud to multi-cloud migrations."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
          style={{
            backgroundImage: 'url(/images/core-services/cloud/1.png)',
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
                Migration Services
              </h1>

              {/* Subtext 1 */}
              <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-8 opacity-95 leading-relaxed">
                Seamlessly transition your applications, workloads, and infrastructure to the environment that best fits your business.
              </p>

              {/* Subtext 2 */}
              <p className="text-xs sm:text-sm md:text-lg mb-8 md:mb-10 opacity-90 leading-relaxed">
                Our experts ensure data integrity, system compatibility, and minimal downtime during the entire migration process, giving your business a smooth and risk-free transformation.
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
              Complete Migration Lifecycle Management
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/cloud/8.jpg"
                  alt="Migration Services Overview"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  At Vantara, we provide secure, efficient, and interruption-free migration services—whether you&apos;re moving to the cloud, shifting back on-premises, or migrating across virtual platforms.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiArrowLeft, title: 'Cloud to On-Prem', color: 'bg-blue-500' },
                    { icon: FiArrowRight, title: 'On-Prem to Cloud', color: 'bg-blue-500' },
                    { icon: FiRefreshCw, title: 'Cross-Platform', color: 'bg-blue-500' },
                    { icon: FiCpu, title: 'VM to KVM', color: 'bg-blue-500' },
                    { icon: FiShield, title: 'Zero Data Loss', color: 'bg-blue-500' },
                    { icon: FiCheckCircle, title: 'Minimal Downtime', color: 'bg-blue-500' },
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
                    From assessment to execution, we ensure every component of your migration is optimized, secure, and future-ready.
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
            <h2 className="heading-secondary mb-4">Our Migration Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive migration solutions for every business need
            </p>
          </div>
        </div>
      </section>

      {/* 1. Cloud to On-Premises Migration */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiArrowLeft className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Cloud to On-Premises Migration</h3>
                    <p className="text-blue-600 font-semibold mt-1">Bring Your Workloads From Cloud Back to Your Local Environment</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed">
                  Many organizations choose to transition from cloud platforms to on-premises infrastructure due to cost optimization, compliance requirements, performance needs, or full security control. We provide a structured, secure, and fully managed Cloud-to-On-Prem Migration that ensures business continuity without compromising data or performance.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">What We Deliver:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Complete assessment of cloud workloads',
                      'On-prem infrastructure architecture design',
                      'Server, storage & network provisioning',
                      'Migration of applications & databases',
                      'Data synchronization & validation',
                      'Testing & optimization post-migration'
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
                      { icon: FiShield, text: 'Full infrastructure control' },
                      { icon: FiZap, text: 'Reduced operational costs' },
                      { icon: FiSettings, text: 'Higher customization' },
                      { icon: FiCheckCircle, text: 'Enhanced performance' }
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
                  src="/images/core-services/cloud/3.png"
                  alt="Cloud to On-Premises Migration"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. On-Premises to Cloud Migration */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/cloud/6.png"
                  alt="On-Premises to Cloud Migration"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">On-Premises to Cloud Migration</h3>
                    <p className="text-blue-600 font-semibold mt-1">Move Your Business to the Cloud—Securely & Efficiently</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Cloud migration modernizes your IT environment, improves scalability, and reduces infrastructure costs. Vantara helps you transition seamlessly from physical infrastructure to leading cloud platforms.
                </p>

                <div className="bg-blue-50 p-4 rounded-xl mb-3">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Platforms We Support:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Microsoft Azure', 'Google Cloud', 'Private Cloud', 'Hybrid Cloud'].map((platform, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-blue-200">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Workload Assessment</strong><br/>
                        Cloud readiness analysis & planning
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Server & VM Migration</strong><br/>
                        Seamless transition to cloud infrastructure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiDatabase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Storage & Database Migration</strong><br/>
                        Secure data transfer & optimization
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiMonitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Post-Migration Support</strong><br/>
                        Monitoring & ongoing optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cross-Platform Migration */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiRefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Cross-Platform Migration</h3>
                    <p className="text-blue-600 font-semibold mt-1">Migration Across Different Platforms Without Downtime</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Businesses often need to migrate workloads across different operating systems, hypervisors, virtualization platforms, or storage systems. Vantara ensures seamless compatibility during these transitions.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Supported Migration Types:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      'Windows ⇄ Linux',
                      'VMware ⇄ Hyper-V',
                      'Private Cloud ⇄ Public Cloud',
                      'Storage systems (NAS/SAN)',
                      'Bare-metal → Virtual & Virtual → Bare-metal',
                      'Multi-cloud to multi-cloud'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Our Approach:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiSettings, text: 'Pre-migration assessment' },
                      { icon: FiCheckCircle, text: 'Compatibility checks' },
                      { icon: FiDatabase, text: 'Data conversion' },
                      { icon: FiActivity, text: 'Parallel testing' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-blue-100">
                        <item.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/cloud/5.png"
                  alt="Cross-Platform Migration"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hyper-V / VMware to KVM Migration */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/cloud/7.png"
                  alt="Hyper-V VMware to KVM Migration"
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
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Hyper-V / VMware to KVM</h3>
                    <p className="text-blue-600 font-semibold mt-1">Efficient Virtualization Migration to KVM Environments</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Many enterprises—including Forex trading systems, financial applications, and high-performance workloads—require flexible and cost-effective virtualization platforms like KVM. We specialize in migrating from Hyper-V and VMware to KVM with precision, ensuring integrity and stability throughout the process.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiRefreshCw className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>VM Conversion</strong><br/>
                        VMDK, VHDX → QCOW2/RAW format conversion
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Enterprise Workloads</strong><br/>
                        Large-scale migration with live/offline support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Performance Tuning</strong><br/>
                        Optimization for KVM environments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCloud className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Platform Integration</strong><br/>
                        Proxmox, oVirt, OpenStack support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Ideal For:</strong> Forex trading systems, HFT workloads, virtualized web hosting, cost-efficient data centers, open-source infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vantara */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-secondary mb-4">Why Choose Vantara for Migration Services?</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 divide-x divide-gray-200">
              {[
                { icon: FiCheckCircle, title: '10–15 Years Expertise', desc: 'Enterprise-level IT migration experience' },
                { icon: FiShield, title: 'Zero Data Loss Policy', desc: 'Complete data integrity guaranteed' },
                { icon: FiZap, title: 'Minimal Downtime', desc: 'Fast cutover & business continuity' },
                { icon: FiSettings, title: 'Certified Professionals', desc: 'Cloud & virtualization experts' },
                { icon: FiActivity, title: 'End-to-End Planning', desc: 'Complete execution & validation' },
                { icon: FiMonitor, title: 'Ongoing Support', desc: 'Post-migration monitoring' }
              ].map((item, index) => (
                <div key={index} className="p-6 flex flex-col items-center text-center hover:bg-white/50 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section 
      <FAQSection 
        title="FAQ – Your Questions Answered"
        faqs={faqData}
        imageSrc="/images/faq.png"
      />

      {/* CTA Section */}
      <MigrationCTA />
    </>
  )
}
