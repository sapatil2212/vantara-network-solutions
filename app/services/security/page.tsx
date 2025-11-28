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
  FiKey,
  FiCloud
} from 'react-icons/fi'
import FAQSection from '@/app/components/FAQSection'
import SecurityCTA from '@/app/components/SecurityCTA'

export const metadata: Metadata = {
  title: 'Security Services - Vantara Network Solutions',
  description: 'Advanced, multi-layered security solutions. Firewall & network security, access control, security audits, and data protection services.',
}

export default function SecurityServicesPage() {
  const faqData = [
    {
      question: "What is a Next-Generation Firewall (NGFW)?",
      answer: "Unlike traditional firewalls, NGFWs provide application-layer filtering, intrusion prevention, and advanced threat intelligence to block sophisticated cyber attacks."
    },
    {
      question: "Why do I need a security audit?",
      answer: "Security audits identify hidden vulnerabilities in your network and systems before attackers can exploit them. They are also essential for regulatory compliance (ISO, GDPR, PCI DSS)."
    },
    {
      question: "What is Identity and Access Management (IAM)?",
      answer: "IAM ensures that only authorized users can access specific resources. It includes Multi-Factor Authentication (MFA), Single Sign-On (SSO), and Role-Based Access Control (RBAC)."
    },
    {
      question: "How does Data Loss Prevention (DLP) work?",
      answer: "DLP systems monitor sensitive data in motion, at rest, and in use to detect and prevent unauthorized sharing, leaks, or theft of critical business information."
    },
    {
      question: "Do you offer 24/7 security monitoring?",
      answer: "Yes, our security services include 24/7 threat monitoring and rapid response to ensure your systems remain protected against attacks around the clock."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
          style={{
            backgroundImage: 'url(/images/core-services/security/1.png)',
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
                Security Services
              </h1>

              {/* Subtext 1 */}
              <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-8 opacity-95 leading-relaxed">
                Strengthen your business with advanced, multi-layered security solutions designed to protect networks, data, users, and applications.
              </p>

              {/* Subtext 2 */}
              <p className="text-xs sm:text-sm md:text-lg mb-8 md:mb-10 opacity-90 leading-relaxed">
                Our security framework combines prevention, detection, and rapid response to keep your systems protected, compliant, and resilient—24/7.
              </p>

              {/* Button */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Link 
                  href="/contact" 
                  className="bg-white text-vantara px-5 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Protected Today
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
              Comprehensive Security Framework
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/security/2.png"
                  alt="Security Services Overview"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  At Vantara Network Solutions, we deliver enterprise-grade security services that ensure your IT environment stays secure, compliant, and resilient against evolving cyber threats.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiShield, title: 'Firewall Security', color: 'bg-blue-500' },
                    { icon: FiUserCheck, title: 'Access Control', color: 'bg-blue-500' },
                    { icon: FiFileText, title: 'Security Audits', color: 'bg-blue-500' },
                    { icon: FiDatabase, title: 'Data Protection', color: 'bg-blue-500' },
                    { icon: FiEye, title: 'Threat Monitoring', color: 'bg-blue-500' },
                    { icon: FiLock, title: 'Encryption', color: 'bg-blue-500' },
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
                    From perimeter defense to data encryption, we implement a multi-layered security approach that leaves no gaps for attackers.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    We help you meet compliance standards and maintain business continuity even in the face of cyber attacks.
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
            <h2 className="heading-secondary mb-4">Our Security Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Advanced protection for every layer of your infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* 1. Firewall & Network Security */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiShield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Firewall & Network Security</h3>
                    <p className="text-blue-600 font-semibold mt-1">Next-Gen Perimeter Defense for Maximum Protection</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed">
                  Your network is the first target for cyber threats. We safeguard it using next-generation firewalls (NGFWs), intelligent intrusion systems, and advanced traffic segmentation. We ensure your network perimeter stays strong, secure, and always protected.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Next-Gen Firewalls</strong><br/>
                        App-layer filtering & deep packet inspection
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiAlertTriangle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>IDS/IPS Systems</strong><br/>
                        Real-time intrusion detection & prevention
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiLock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Secure VPN</strong><br/>
                        Encrypted remote access for users
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiEye className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Threat Monitoring</strong><br/>
                        24×7 visibility across network layers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiShield, text: 'Blocks malware & attacks' },
                      { icon: FiEye, text: 'Enhanced visibility' },
                      { icon: FiServer, text: 'Reduces lateral movement' },
                      { icon: FiCheckCircle, text: 'Cloud & on-prem protection' }
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
                  src="/images/core-services/security/3.png"
                  alt="Firewall and Network Security"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Access Control */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/security/4.png"
                  alt="Access Control"
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
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Access Control</h3>
                    <p className="text-blue-600 font-semibold mt-1">Strong Identity & Access Governance</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Control who can access what, when, and how. We implement identity and access management (IAM) solutions that secure your workforce, endpoints, and applications. We help you maintain complete control over identities, privileged users, and critical systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiUserCheck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>IAM & MFA</strong><br/>
                        Identity management & multi-factor auth
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiKey className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Privileged Access</strong><br/>
                        Secure management of admin credentials
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>RBAC & SSO</strong><br/>
                        Role-based access & single sign-on
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiFileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Audit Trails</strong><br/>
                        Comprehensive access logging
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Benefits:</strong> Prevents unauthorized access, protects sensitive data, reduces insider threats, and enhances compliance (ISO, PCI, GDPR).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Security Audits */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiFileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Security Audits</h3>
                    <p className="text-blue-600 font-semibold mt-1">Comprehensive Assessments to Identify Vulnerabilities</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Our Security Audit Services help organizations uncover security gaps, assess risks, and ensure compliance with industry regulations. We help your organization stay secure, compliant, and audit-ready.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiAlertTriangle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Vulnerability Assessments</strong><br/>
                        Identify system weaknesses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Penetration Testing</strong><br/>
                        Simulated cyberattacks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Compliance Audits</strong><br/>
                        ISO, PCI DSS, GDPR checks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Risk Assessment</strong><br/>
                        Detailed remediation guidance
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiShield, text: 'Prevent breaches' },
                      { icon: FiActivity, text: 'Improve security posture' },
                      { icon: FiCheckCircle, text: 'Meet compliance' },
                      { icon: FiFileText, text: 'Strengthen policies' }
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
                  src="/images/core-services/security/5.png"
                  alt="Security Audits"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Data Protection */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/security/6.png"
                  alt="Data Protection"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiDatabase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Data Protection</h3>
                    <p className="text-blue-600 font-semibold mt-1">Safeguard Your Most Valuable Digital Asset</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Protect sensitive business information with advanced data protection technologies that secure data at rest, in transit, and in use. We make sure your critical information stays protected — everywhere.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiLock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Encryption</strong><br/>
                        File & disk-level protection
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Data Loss Prevention</strong><br/>
                        Prevent leaks & misuse
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiDatabase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Secure Storage</strong><br/>
                        Encrypted storage systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCloud className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Cloud Security</strong><br/>
                        Protecting SaaS environments
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Benefits:</strong> Prevent unauthorized access, stop data leaks, maintain integrity, and ensure legal compliance.
                  </p>
                </div>
              </div>
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

      {/* CTA Section 
      <SecurityCTA /> */}
    </>
  )
}
