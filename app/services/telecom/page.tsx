import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FiWifi, 
  FiGlobe, 
  FiActivity, 
  FiServer, 
  FiShield, 
  FiSmartphone, 
  FiPhone, 
  FiVideo, 
  FiCpu,
  FiCheckCircle,
  FiSettings
} from 'react-icons/fi'
import FAQSection from '@/app/components/FAQSection'
import TelecomCTA from '@/app/components/TelecomCTA'

export const metadata: Metadata = {
  title: 'Telecom Services - Internet Leased Line, VoIP & MPLS',
  description: 'Enterprise telecom solutions including Internet Leased Lines (ILL), MPLS/SD-WAN, VoIP, SIP Trunking, and video conferencing services.',
}

export default function TelecomServicesPage() {
  const faqData = [
    {
      question: "What is the difference between Internet Leased Line (ILL) and Broadband?",
      answer: "ILL provides a dedicated, symmetrical connection with guaranteed bandwidth and SLA-backed uptime (99.9%), whereas broadband is a shared connection with variable speeds and no guaranteed service levels."
    },
    {
      question: "Do you provide connectivity for multi-branch offices?",
      answer: "Yes, we specialize in MPLS and SD-WAN solutions that securely connect multiple branch offices, data centers, and remote sites into a single, unified network."
    },
    {
      question: "Can I integrate VoIP with my existing PBX system?",
      answer: "Absolutely. Our SIP Trunking services are designed to integrate seamlessly with most modern IP-PBX systems, allowing you to upgrade to VoIP without replacing your entire infrastructure."
    },
    {
      question: "What kind of support do you offer for telecom services?",
      answer: "We provide 24/7 monitoring and technical support for all our enterprise telecom services, ensuring maximum uptime and rapid resolution of any network issues."
    },
    {
      question: "Is SD-WAN better than MPLS?",
      answer: "SD-WAN offers more flexibility and cost-efficiency by utilizing multiple connection types (MPLS, broadband, 4G/5G), while MPLS provides guaranteed packet delivery. Many enterprises use a hybrid approach for the best of both worlds."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
          style={{
            backgroundImage: 'url(/images/core-services/telecom/1.png)',
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
                Telecom Services
              </h1>

              {/* Subtext 1 */}
              <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-3 opacity-95 leading-relaxed ">
                Empower your business with fast, reliable, and secure telecom solutions designed to support modern communication and connectivity.
              </p>

              {/* Subtext 2 */}
              <p className="text-xs sm:text-sm md:text-lg mb-8 md:mb-10 opacity-90 leading-relaxed ">
                At Vantara Network Solutions, we deliver enterprise-grade telecom infrastructure engineered for high performance, uninterrupted operations, and seamless multi-location communication. Whether your business relies on high-speed internet, advanced voice solutions, or secure data connectivity, our telecom services ensure your teams stay connected—smoothly, securely, and without disruptions.
              </p>

              {/* Button */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Link 
                  href="/contact" 
                  className="bg-white text-vantara px-5 py-3 md:px-8 md:py-2 rounded-full font-bold text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Connected
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
              Smart, Scalable & Business-Ready
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/telecom/2.png"
                  alt="Telecom Overview"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Every business depends on strong communication. Whether it’s global calling, multi-branch connectivity, high-speed internet, or enterprise VoIP services—Vantara provides telecom solutions optimized for performance, uptime, and security.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiWifi, title: 'Leased Line', color: 'bg-blue-500' },
                    { icon: FiGlobe, title: 'MPLS & SD-WAN', color: 'bg-blue-500' },
                    { icon: FiPhone, title: 'Enterprise VoIP', color: 'bg-blue-500' },
                    { icon: FiServer, title: 'PRI Services', color: 'bg-blue-500' },
                    { icon: FiSmartphone, title: 'Hardware', color: 'bg-blue-500' },
                    { icon: FiVideo, title: 'Conferencing', color: 'bg-blue-500' },
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
                    Our telecom services integrate seamlessly with your IT infrastructure, enabling consistent communication across teams, clients, and systems.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    We ensure your organization stays connected—anytime, anywhere.
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
            <h2 className="heading-secondary mb-4">Our Telecom Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Key telecom solutions provided by Vantara Network Solutions
            </p>
          </div>
        </div>
      </section>

      {/* 1. Internet Leased Line (ILL) */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiWifi className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Internet Leased Line (ILL)</h3>
                    <p className="text-blue-600 font-semibold mt-1">Dedicated, Symmetrical & High-Speed Internet</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed">
                  Leased lines provide reliable, uncontended internet connectivity that supports high bandwidth usage, business applications, and mission-critical tasks. Suitable for offices, data centers & branches.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Symmetrical Speed</strong><br/>
                        Equal upload & download
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>99.9% Uptime</strong><br/>
                        SLA-backed connectivity
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Static IP</strong><br/>
                        Dedicated IP support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Low Latency</strong><br/>
                        Zero interruptions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FiCheckCircle, text: 'Consistent performance' },
                      { icon: FiServer, text: 'Hosted app reliability' },
                      { icon: FiShield, text: 'Secure bandwidth' },
                      { icon: FiActivity, text: 'High availability' }
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
                  src="/images/core-services/telecom/3.png"
                  alt="Internet Leased Line"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MPLS & SD-WAN */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/telecom/4.png"
                  alt="MPLS and SD-WAN"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiGlobe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">MPLS & SD-WAN</h3>
                    <p className="text-blue-600 font-semibold mt-1">Secure Multi-Location Connectivity</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Connect multiple branches, warehouses, offices, and data centers through secure and optimized connectivity solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiGlobe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>MPLS VPN</strong><br/>
                        Private network solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>SD-WAN</strong><br/>
                        Intelligent traffic routing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Encrypted Lines</strong><br/>
                        Secure communication
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Central Management</strong><br/>
                        Unified network control
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Benefits:</strong> Strong inter-branch communication, improved application performance, higher control, visibility & security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Enterprise VoIP */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiPhone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Enterprise VoIP</h3>
                    <p className="text-blue-600 font-semibold mt-1">Modern Voice Communication</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  We provide scalable VoIP and SIP trunking solutions that replace traditional phone systems with smarter, more cost-effective communication channels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiPhone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>HD Voice</strong><br/>
                        Crystal clear audio clarity
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>IVR Support</strong><br/>
                        Multi-level auto-attendant
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>SIP Trunking</strong><br/>
                        IPBX integration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Analytics</strong><br/>
                        Call recording & reports
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Benefits:</strong> Reduced call costs, better customer experience, smart call routing & automation.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/telecom/5.png"
                  alt="Enterprise VoIP"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Solutions: PRI, Hardware, Video */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 4. PRI Services */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FiServer className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PRI Services</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                Reliable digital telephony for high-volume businesses like call centers. Supports 30 voice channels with high call quality.
              </p>
              <ul className="space-y-2">
                {['30 Voice Channels', 'High Reliability', 'PBX Compatible'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <FiCheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Hardware */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FiSmartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telephony Hardware</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                Complete range of enterprise telephony devices for seamless communication across departments.
              </p>
              <ul className="space-y-2">
                {['IP Phones', 'VoIP Gateways', 'Conference Phones'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <FiCheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Video Conferencing */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FiVideo className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video Conferencing</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                High-quality video communication for remote collaboration. Enable teams to meet from anywhere.
              </p>
              <ul className="space-y-2">
                {['HD Quality', 'Noise Reduction', 'Zoom/Teams Ready'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <FiCheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vantara */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-secondary mb-4">Why Choose Vantara for Telecom?</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 divide-x divide-gray-200">
              {[
                { icon: FiActivity, title: '99.9% Uptime', desc: 'Guaranteed availability' },
                { icon: FiServer, title: 'Robust Infra', desc: 'Enterprise-grade network' },
                { icon: FiShield, title: 'Secure Lines', desc: 'Encrypted communication' },
                { icon: FiGlobe, title: 'Scalable', desc: 'Grow with your business' },
                { icon: FiSettings, title: 'Managed Service', desc: 'Proactive monitoring' },
                { icon: FiPhone, title: '24/7 Support', desc: 'Always-on assistance' }
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

      {/* FAQ Section */}
      <FAQSection 
        title="FAQ – Your Questions Answered"
        faqs={faqData}
        imageSrc="/images/core-services/telecom/cta.png"
      />

     
    </>
  )
}
