import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FiShield, 
  FiCheckCircle, 
  FiLock, 
  FiEye, 
  FiServer,
  FiUserCheck,
  FiFileText,
  FiAlertTriangle,
  FiDatabase,
  FiSettings,
  FiActivity,
  FiGlobe,
  FiCloud,
  FiMonitor,
  FiCpu
} from 'react-icons/fi'
import FAQSection from '@/app/components/FAQSection'
import CyberCTA from '@/app/components/CyberCTA'

export const metadata: Metadata = {
  title: 'Cyber Security Solutions - Vantara Network Solutions',
  description: 'Advanced, multi-layered cybersecurity solutions. Risk advisory, cyber defense operations, managed security services (MSS), and specialized security consulting.',
}

export default function CyberSecurityPage() {
  const faqData = [
    {
      question: "What is the difference between a Firewall and Cyber Defense Operations?",
      answer: "A firewall acts as a barrier to block unauthorized access, whereas Cyber Defense Operations involve active, real-time monitoring, threat hunting, and rapid incident response by human analysts to stop complex attacks that might bypass automated defenses."
    },
    {
      question: "How does Vantara help with compliance (ISO, PCI DSS)?",
      answer: "Our Risk Advisory Services guide you through the entire compliance process. We perform gap assessments, help implement required controls, assist with documentation, and prepare your organization for successful audits against global standards like ISO 27001 and PCI DSS."
    },
    {
      question: "What is included in Managed Security Services (MSS)?",
      answer: "Our MSS offloads security management from your team. We handle firewall management, endpoint protection, patch management, email security, and continuous monitoring, ensuring your systems are always up-to-date and protected against the latest threats."
    },
    {
      question: "Do you offer security consulting for cloud environments?",
      answer: "Yes, our Specialized Security Consulting includes Cloud Security Architecture reviews and Zero Trust implementation strategies specifically tailored for cloud (AWS, Azure, Google Cloud) and hybrid environments."
    },
    {
      question: "What happens if a security incident occurs?",
      answer: "Our Cyber Defense Operations team provides rapid incident response. We immediately investigate the alert, contain the threat to prevent spread, eradicate the malicious presence, and help recover affected systems to minimize business impact."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
          style={{
            backgroundImage: 'url(/images/core-services/cyber/1.png)',
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
                Cyber Security Solutions
              </h1>

              {/* Subtext 1 */}
              <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-8 opacity-95 leading-relaxed">
                Protect your business from evolving cyber threats with advanced, multi-layered cybersecurity solutions engineered to safeguard data, infrastructure, and digital assets.
              </p>

              {/* Subtext 2 */}
              <p className="text-xs sm:text-sm md:text-lg mb-8 md:mb-10 opacity-90 leading-relaxed">
                At Vantara Network Solutions, we provide end-to-end security services—combining intelligence, technology, and expertise to ensure your organization stays secure, compliant, and breach-proof.
              </p>

              {/* Button */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Link 
                  href="/contact" 
                  className="bg-white text-vantara px-5 py-3 md:px-8 md:py-2 rounded-full font-bold text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Request Security Assessment
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
              Complete Cyber Protection
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/cyber/2.png"
                  alt="Cyber Security Overview"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our cybersecurity framework is built on prevention, detection, response, and continuous monitoring, giving your business complete protection around the clock.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiAlertTriangle, title: 'Risk Advisory', color: 'bg-blue-500' },
                    { icon: FiShield, title: 'Cyber Defense', color: 'bg-blue-500' },
                    { icon: FiSettings, title: 'Managed Security', color: 'bg-blue-500' },
                    { icon: FiUserCheck, title: 'Consulting', color: 'bg-blue-500' },
                    { icon: FiEye, title: 'Threat Detection', color: 'bg-blue-500' },
                    { icon: FiActivity, title: 'Incident Response', color: 'bg-blue-500' },
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
                    We combine advanced technology with human expertise to stay ahead of cyber criminals.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    From compliance readiness to real-time defense operations, we secure your digital future.
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
            <h2 className="heading-secondary mb-4">Our Cybersecurity Solutions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              End-to-end protection for your organization
            </p>
          </div>
        </div>
      </section>

      {/* 1. Risk Advisory */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiFileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Risk Advisory</h3>
                    <p className="text-blue-600 font-semibold mt-1">Strengthen Security Posture with Standards-Based Advisory</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed">
                  Our Risk Advisory Services help businesses identify vulnerabilities, evaluate risks, and align their security posture with global compliance standards. We provide expert guidance to ensure your organization meets regulatory, operational, and industry requirements (ISO, PCI DSS, etc.).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>ISO 27001 & PCI DSS</strong><br/>
                        Readiness, implementation & consulting
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiAlertTriangle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Risk & Gap Assessments</strong><br/>
                        Identify and evaluate security risks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiFileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Compliance Audits</strong><br/>
                        Documentation & policy development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Threat Modeling</strong><br/>
                        Proactive risk analysis & planning
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiShield, text: 'Stronger governance' },
                      { icon: FiCheckCircle, text: 'Reduced vulnerabilities' },
                      { icon: FiFileText, text: 'Full compliance' },
                      { icon: FiActivity, text: 'Operational resilience' }
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
                  src="/images/core-services/cyber/3.png"
                  alt="Risk Advisory Services"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cyber Defense Operations */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/cyber/4.png"
                  alt="Cyber Defense Operations"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiShield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Cyber Defense Operations</h3>
                    <p className="text-blue-600 font-semibold mt-1">Real-Time Threat Detection, Response & Mitigation</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  With cyber threats growing more sophisticated, businesses need constant vigilance. Our Cyber Defense Operations provide round-the-clock protection through real-time monitoring, advanced analytics, and rapid incident response.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiEye className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>24×7 SOC Monitoring</strong><br/>
                        Continuous security surveillance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Incident Response</strong><br/>
                        Rapid detection & mitigation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Malware Defense</strong><br/>
                        Ransomware protection & removal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiMonitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>SIEM & Analytics</strong><br/>
                        Log monitoring & behavioral analysis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Benefits:</strong> Immediate threat visibility, faster response to incidents, reduced impact of attacks, and enhanced overall security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Managed Security Services (MSS) */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiSettings className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Managed Security Services</h3>
                    <p className="text-blue-600 font-semibold mt-1">Fully Managed Security Operations for Your Business</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Our Managed Security Services (MSS) are designed to offload the complexity of cybersecurity from your team. We manage, monitor, and enhance your security systems while you focus on core business operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Firewall Management</strong><br/>
                        Configuration & maintenance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Endpoint Security</strong><br/>
                        Server & endpoint protection
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiAlertTriangle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Patch Management</strong><br/>
                        Vulnerability monitoring & updating
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiDatabase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Data Protection</strong><br/>
                        DLP monitoring & email security
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiActivity, text: '24×7 expert support' },
                      { icon: FiSettings, text: 'Lower operational costs' },
                      { icon: FiShield, text: 'Stronger posture' },
                      { icon: FiEye, text: 'Internal threat protection' }
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
                  src="/images/core-services/cyber/5.png"
                  alt="Managed Security Services"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Security Consulting */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/cyber/6.png"
                  alt="Specialized Security Consulting"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiUserCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Security Consulting</h3>
                    <p className="text-blue-600 font-semibold mt-1">Expert-Led Consulting for Complex Challenges</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Every organization faces unique threats and operational challenges. Our Specialized Security Consulting offers tailored security strategies backed by deep technical expertise and industry experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCloud className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Cloud Security</strong><br/>
                        Architecture & Zero Trust
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>App Security</strong><br/>
                        Consulting & hardening
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Red Teaming</strong><br/>
                        Pen testing guidance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Incident Planning</strong><br/>
                        Response strategy & drills
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Benefits:</strong> Customized solutions for complex environments, expert guidance for high-risk areas, improved resilience, and long-term protection architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      


      {/* CTA Section */}
      <CyberCTA />
    </>
  )
}
