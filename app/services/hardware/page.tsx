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
import HardwareCTA from '@/app/components/HardwareCTA'
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
  title: 'Hardware Solutions - Vantara Network Solutions',
  description: 'Complete range of enterprise-grade hardware solutions including servers, storage, networking devices, and end-point equipment. New and refurbished products with quality assurance.',
}

export default function HardwareServicesPage() {
  const faqData = [
    {
      question: "Do you provide both new and refurbished hardware?",
      answer: "Yes, we offer both new and refurbished enterprise-grade hardware. All refurbished products undergo rigorous testing and quality assurance to ensure they meet enterprise standards and integrate seamlessly into your IT environment."
    },
    {
      question: "Which brands do you support for hardware solutions?",
      answer: "We support all major enterprise brands including Dell, HP, Lenovo, Cisco, Juniper, and more. Our solutions are compatible with multi-vendor environments and we provide genuine spare parts for all supported brands."
    },
    {
      question: "What warranty do you provide on hardware products?",
      answer: "We provide comprehensive warranty coverage on all our hardware products. The warranty period varies by product type and whether it's new or refurbished. We also offer extended warranty and AMC options for ongoing support."
    },
    {
      question: "Can you help with hardware installation and setup?",
      answer: "Absolutely! We provide complete installation, configuration, and integration services for all hardware products. Our experienced engineers ensure proper setup, testing, and seamless integration with your existing infrastructure."
    },
    {
      question: "Do you offer spare parts and component replacement?",
      answer: "Yes, we maintain a comprehensive inventory of genuine spare parts for all major server and networking brands. This includes RAM, processors, hard drives, SSDs, power supplies, cooling fans, motherboards, and more."
    }
  ]

  return (
    <>
   
<div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
  <section 
  className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
  style={{
    backgroundImage: 'url(/images/core-services/hardware/hardware.png)',
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
        Enterprise Hardware Solutions
      </h1>

      {/* Subtext 1 */}
      <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-8 opacity-95 leading-relaxed">
       We provide a complete range of enterprise-grade hardware solutions that deliver high performance, reliability, and scalability for modern businesses.
      </p>

      {/* Subtext 2 */}
      <p className="text-xs sm:text-sm md:text-lg mb-8 md:mb-10 opacity-90 leading-relaxed">
       All our products—new or refurbished—are tested, validated, and quality-assured, ensuring seamless integration into your IT environment.
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
              Quality-Assured Hardware Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enterprise-grade products tested and validated for seamless integration
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/hardware/2.png"
                  alt="Hardware Solutions Overview"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We provide a complete range of enterprise-grade hardware solutions that deliver high performance, reliability, and scalability for modern businesses. All our products—new or refurbished—are tested, validated, and quality-assured.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: FiServer, title: 'Servers & Storage', color: 'bg-blue-500' },
                    { icon: FiWifi, title: 'Networking Devices', color: 'bg-blue-500' },
                    { icon: FiHardDrive, title: 'Passive Products', color: 'bg-blue-500' },
                    { icon: FiMonitor, title: 'End-Point Devices', color: 'bg-blue-500' },
                    { icon: FiZap, title: 'Power Solutions', color: 'bg-blue-500' },
                    { icon: FiPackage, title: 'Genuine Spares', color: 'bg-blue-500' },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`${item.color} p-2 rounded-lg`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.title}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-vantara/5 to-vantara/10 p-6 rounded-2xl border border-vantara/20 space-y-3">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <FiCheckCircle className="w-5 h-5 text-vantara" />
                    Quality Assurance
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Every product undergoes rigorous testing and validation. We ensure compatibility, performance, and reliability before delivery, backed by comprehensive warranty and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Products Categories */}
      <section className=" bg-white">
        <div className="container-custom">
          <div className="text-center mb-2">
            <h2 className="heading-secondary mb-4">Our Hardware Product Range</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive selection of enterprise-grade hardware for all your IT needs
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Products */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiServer className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Enterprise Products</h3>
                    <p className="text-blue-600 font-semibold mt-1">High-Performance Server & Storage Solutions</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong>Rack / Tower Servers</strong><br/>
                        <span className="text-sm">Powerful servers designed for maximum performance, stability, and scalability. Our rack and tower servers support mission-critical workloads, virtualization, databases, ERP systems, and high-performance applications.</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'High processing power & storage flexibility',
                        'Redundant power & cooling options',
                        'Ideal for enterprise data centers',
                        'Compatible with Dell, HP, Lenovo, Cisco'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiCpu className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong>Chassis – Blade Servers</strong><br/>
                        <span className="text-sm">Compact, modular, and energy-efficient server solutions for high-density computing environments.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiDatabase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong>Storage Arrays & JBOD</strong><br/>
                        <span className="text-sm">High-performance storage systems for backup & recovery, virtualization, and enterprise applications.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiTool className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong>Server Spares</strong><br/>
                        <span className="text-sm">Genuine spare parts: RAM, processors, hard drives, SSDs, power supplies, cooling fans, motherboards.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong>NIC / SAN Cards</strong><br/>
                        <span className="text-sm">Enterprise-grade network adapters for high-bandwidth connectivity and reliable storage communication.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/hardware/3.png"
                  alt="Enterprise Server Products"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Devices */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/hardware/4.png"
                  alt="Networking Devices"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiWifi className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Networking Devices</h3>
                    <p className="text-blue-600  font-semibold mt-1">Enterprise Network Infrastructure</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiWifi className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Network / SAN Switches</strong><br/>
                        High-speed switches for seamless data transfer. Layer 2/3 switching, Fibre Channel support.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiMonitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>KVM Switch</strong><br/>
                        Control multiple servers with single keyboard, video, mouse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Routers & Firewalls</strong><br/>
                        Enterprise routers, Next-Gen Firewalls, VPN & IPS/IDS enabled.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiWifi className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Access Points & WLC</strong><br/>
                        High-speed WiFi, centralized wireless management.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiActivity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>SFP & Uplink Modules</strong><br/>
                        Fiber uplinks, long-distance communication modules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passive Networking & End-Point Devices */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiHardDrive className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Passive Products & End-Points</h3>
                    <p className="text-blue-600  font-semibold mt-1">Infrastructure & User Devices</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiPackage className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Passive Networking</strong><br/>
                        Patch cords (RJ45/Fibre), cable managers, racks & accessories, LIU, patch panels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiMonitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>End-Point Devices</strong><br/>
                        Laptops, CPUs & monitors, iPad & Wacom tablets, printers & projectors, accessories (keyboard, mouse, cables).
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Image */}
              <div className="flex items-stretch">
                <img 
                  src="/images/core-services/hardware/5.png"
                  alt="Passive Products and End-Point Devices"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Distribution & Backup */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 flex items-stretch">
                <img 
                  src="/images/core-services/hardware/6.png"
                  alt="Power Distribution & Backup"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-4 rounded-2xl">
                    <FiZap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Power Solutions</h3>
                    <p className="text-blue-600 font-semibold mt-1">Reliable Power Distribution & Backup</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiZap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>UPS Backup Systems</strong><br/>
                        Line-interactive, online, and rack-mounted UPS for uninterrupted power.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiSettings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>PDU – Indian Socket</strong><br/>
                        Power Distribution Units optimized for Indian standards with surge protection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiServer className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>C-13 / C-19 PDU</strong><br/>
                        Enterprise-grade PDUs for server racks and data centers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <FiTool className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Industrial Flush & Socket</strong><br/>
                        Heavy-duty power sockets for industrial and high-power environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      


      {/* CTA Section 
      <HardwareCTA />*/}
    </>
  )
}
