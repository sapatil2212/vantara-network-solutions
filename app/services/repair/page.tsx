import { Metadata } from 'next'
import Image from 'next/image'
import { 
  FiTool, 
  FiServer, 
  FiClock, 
  FiUsers, 
  FiMonitor, 
  FiShield, 
  FiCheckCircle,
  FiSettings,
  FiActivity,
  FiHardDrive,
  FiWifi,
  FiCpu,
  FiZap,
  FiTrendingUp,
  FiAward,
  FiHeadphones
} from 'react-icons/fi'


export const metadata: Metadata = {
  title: 'Repair & Support Services – Vantara Network Solutions',
  description: 'Comprehensive IT hardware repair, AMC services, on-site support, remote assistance, and preventive maintenance to keep your business running at peak performance.',
}

export default function RepairServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20"
          style={{
            backgroundImage: 'url(/images/core-services/repair/1.png)',
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
                Repair & Support Services
              </h1>

              {/* Subtext 1 */}
              <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-8 opacity-95 leading-relaxed">
                Ensure your IT systems operate smoothly, efficiently, and without interruptions. At Vantara Network Solutions, we provide comprehensive hardware repair, maintenance, and support services designed to keep your business running at peak performance.
              </p>

              {/* Subtext 2 */}
              <p className="text-xs sm:text-sm md:text-lg mb-8 md:mb-10 opacity-90 leading-relaxed">
                From servers and storage systems to end-user devices and networking equipment, our expert engineers deliver fast, reliable, and cost-effective support to minimize downtime and extend the life of your IT infrastructure.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              End-to-End IT Repair & Support for Seamless Business Operations
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your IT environment needs consistent care to perform at its best. Whether you require emergency repairs, preventive maintenance, or full AMC support—Vantara ensures quick turnaround times and professional service backed by industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-xl border border-vantara/20">
              <div className="w-16 h-16 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Higher Uptime</h3>
              <p className="text-sm text-gray-600">Maximum availability</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-xl border border-vantara/20">
              <div className="w-16 h-16 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiZap className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Faster Resolution</h3>
              <p className="text-sm text-gray-600">Quick issue fixes</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-xl border border-vantara/20">
              <div className="w-16 h-16 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reduced Costs</h3>
              <p className="text-sm text-gray-600">Cost-effective repairs</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-xl border border-vantara/20">
              <div className="w-16 h-16 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Longer Lifespan</h3>
              <p className="text-sm text-gray-600">Extended equipment life</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-xl border border-vantara/20">
              <div className="w-16 h-16 bg-vantara/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiActivity className="w-8 h-8 text-vantara" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Optimized Performance</h3>
              <p className="text-sm text-gray-600">Peak efficiency</p>
            </div>
          </div>

          <p className="text-center text-lg text-gray-700">
            We support servers, storage devices, routers, firewalls, switches, desktops, laptops, printers, and more.
          </p>
        </div>
      </section>

      {/* Service 1: Hardware Repair */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-vantara/10 rounded-full px-4 py-2 mb-6">
                <FiTool className="w-5 h-5 text-vantara" />
                <span className="text-vantara font-semibold">Hardware Repair</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Repair for Servers, Workstations & Networking Equipment
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our certified engineers diagnose, repair, and restore all major IT hardware components—ensuring your systems are back online quickly and efficiently.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">We Repair:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3">
                      <FiServer className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Rack, Tower & Blade Servers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiHardDrive className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Storage Arrays & JBOD</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiWifi className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network/SAN Switches</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiShield className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Routers, Firewalls & Access Points</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiMonitor className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Laptops, Desktops & Workstations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiZap className="w-5 h-5 text-vantara mt-1 flex-shrink-0" />
                      <span className="text-gray-700">UPS & Power Equipment</span>
                    </div>
                  </div>
                </div>

               
              </div>

              <p className="text-gray-700 italic">
                We bring your hardware back to full performance with precision and care.
              </p>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden ">
              <Image
                src="/images/core-services/repair/2.png"
                alt="Hardware Repair Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: AMC */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-2xl overflow-hidden ">
              <Image
                src="/images/core-services/repair/3.png"
                alt="AMC Services"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-vantara/10 rounded-full px-4 py-2 mb-3">
                <FiSettings className="w-5 h-5 text-vantara" />
                <span className="text-vantara font-semibold">AMC Services</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Comprehensive Maintenance with Guaranteed Response Times
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                With Vantara&apos;s AMC services, you get year-round coverage for all your IT hardware—ensuring stable performance and minimal downtime.
              </p>

              <div className="space-y-6 mb-8">
                <div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">AMC Includes:</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
    {[
      "Scheduled visits & health checks",
      "Emergency breakdown support",
      "Spare parts management",
      "Firmware & software updates",
      "Performance optimization",
      "SLA-based response & resolution",
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
        <span className="text-gray-700">{item}</span>
      </div>
    ))}
  </div>


                </div>

                <div className="bg-gradient-to-br from-vantara/5 to-vantara/10 rounded-xl p-6 border border-vantara/20">
  <h3 className="text-lg font-bold text-gray-900 mb-2">Benefits:</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">

    {[
      "Predictable maintenance costs",
      "Faster issue resolution",
      "Maximum uptime assurance",
      "Extended hardware lifespan",
      "Reduced unexpected failures",
      "Priority access to technical support",
      "Optimized performance & efficiency",
      "Regular firmware & patch updates",
      "Improved system reliability",
      "Lower operational disruptions",
    ].map((benefit, idx) => (
      <div key={idx} className="flex items-start gap-3">
        <FiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
        <span className="text-gray-700">{benefit}</span>
      </div>
    ))}

  </div>
</div>

              </div>

            
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: On-Site Support */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-vantara/10 rounded-full px-4 py-2 mb-6">
                <FiUsers className="w-5 h-5 text-vantara" />
                <span className="text-vantara font-semibold">On-Site Support</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Dedicated Technicians for Critical Infrastructure
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                For issues that require physical intervention, our on-site experts provide fast, hands-on assistance.
              </p>

              <div className="space-y-6">
               <div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">On-Site Support Covers:</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">

    {[
      "Physical hardware inspection",
      "Component replacements",
      "Cabling & connectivity fixes",
      "Server room support",
      "Network troubleshooting",
      "Infrastructure upgrades",
      "Rack organization & cable management",
      "Peripheral & end-point device support",
      "Power & UPS verification",
      "Environmental checks (temperature, airflow)",
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
        <span className="text-gray-700">{item}</span>
      </div>
    ))}

  </div>
</div>


               
              </div>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/core-services/repair/4.png"
                alt="On-Site Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4 & 5: Remote Support and Preventive Maintenance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Remote Support */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 ">
              <div className="inline-flex items-center gap-2 bg-vantara/10 rounded-full px-4 py-2 mb-6">
                <FiHeadphones className="w-5 h-5 text-vantara" />
                <span className="text-vantara font-semibold">Remote Support</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                24/7 Remote Assistance for Quick Issue Resolution
              </h2>
              <p className="text-gray-700 mb-6">
                Our remote support team resolves issues instantly through secure remote access and diagnostics.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900">We Handle:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Software & OS troubleshooting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Network configuration issues</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Security & firewall checks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Performance tuning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Guidance & technical assistance</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic bg-vantara/5 rounded-lg p-4 border border-vantara/20">
                Available anytime—ensuring uninterrupted operations without delay.
              </p>
            </div>

            {/* Preventive Maintenance */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 ">
              <div className="inline-flex items-center gap-2 bg-vantara/10 rounded-full px-4 py-2 mb-6">
                <FiActivity className="w-5 h-5 text-vantara" />
                <span className="text-vantara font-semibold">Preventive Maintenance</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proactive Care to Prevent Downtime
              </h2>
              <p className="text-gray-700 mb-6">
                Preventive maintenance helps identify risks before they become failures—saving time, money, and productivity.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900">Our Maintenance Includes:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">System health checks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cleaning & dust removal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Logging & performance analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Temperature & power reviews</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Firmware & patch updates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-vantara mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Backup & storage validation</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic bg-vantara/5 rounded-lg p-4 border border-vantara/20">
                We keep your IT infrastructure healthy, optimized, and ready for continuous operations.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      

    
    </>
  )
}
