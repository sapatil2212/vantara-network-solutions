import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FiServer, 
  FiCheckCircle, 
  FiShield, 
  FiZap, 
  FiTrendingUp, 
  FiSettings,
  FiLayers,
  FiMonitor,
  FiLock,
  FiCpu,
  FiActivity,
  FiWifi,
  FiGlobe,
  FiDatabase
} from 'react-icons/fi'
import CTASection from '@/app/components/CTASection'
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
  title: 'Enterprise Networking Solutions - Vantara Network Solutions',
  description: 'Enhance the way your users, devices, applications, and locations communicate with Vantara&apos;s Enterprise Networking Solutions. Secure, high-performance, scalable network infrastructure.',
}

export default function NetworkServicesPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          backgroundImage: 'url(/images/services/ENS.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-vantara/70 to-black/80" />
        
        {/* Content */}
        <div className="container-custom relative z-10 px-4 md:px-0">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise Networking Solutions
            </h1>
            <p className="text-sm md:text-lg md:text-xl mb-2 md:mb-8 opacity-95 leading-relaxed">
              Enhance the way your users, devices, applications, and locations communicate. With Vantara&apos;s Enterprise Networking Solutions, your business gets a secure, high-performance, scalable network infrastructure built for today&apos;s digital demands.
            </p>
            <p className="text-sm md:text-lg mb-10 opacity-90 ">
              Whether you&apos;re a medium or large-scale enterprise, we help you establish a seamless, uninterrupted, and secure network environment that improves performance, user experience, and operational efficiency.
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
          <div className="text-center mb-5 md:mb-12">
            <h2 className="heading-secondary mb-2 md:mb-6">
              Connecting Your Business with Smarter, Faster & Secure Networks
            </h2>
            <p className="text-sm md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Vantara Network Solutions, we design, deploy, and manage enterprise networks that strengthen your organization&apos;s workflow, communication, and digital transformation initiatives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {[
              { icon: FiZap, title: 'Lightning-fast connectivity', color: 'text-yellow-500' },
              { icon: FiShield, title: 'Enhanced security', color: 'text-blue-500' },
              { icon: FiActivity, title: 'Streamlined traffic management', color: 'text-green-500' },
              { icon: FiSettings, title: 'Network automation', color: 'text-purple-500' },
              { icon: FiMonitor, title: 'Simplified monitoring & management', color: 'text-red-500' },
              { icon: FiTrendingUp, title: 'Scalable infrastructure', color: 'text-indigo-500' },
            ].map((item, index) => (
             <div 
  key={index} 
  className="flex items-center gap-4 bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
>
  <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.color}`} />
  
  <h3 className="text-sm md:text-lg font-bold text-gray-900 leading-snug">
    {item.title}
  </h3>
</div>

            ))}
          </div>

          <div className="bg-gradient-to-br from-vantara/5 to-vantara/10 p-8 md:p-12 rounded-3xl border border-vantara/20">
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-6">
              With our expertise, you get a modern, unified networking and security platform supporting all business-critical operations.
            </p>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed  ">
              We understand that every network is unique. Through precise planning and deep assessment of your requirements, we implement an architecture that ensures full coverage, optimized bandwidth, and maximum uptime
            </p>
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Tailored Enterprise Networking Solutions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We deliver reliable and scalable networking systems that enhance connectivity across your organization. From structured cabling to advanced firewall security, Vantara ensures a smooth, hassle-free network experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiGlobe,
                title: 'LAN / WAN Design & Implementation',
                items: [
                  'Structured, semi-structured & standard cabling',
                  'Customized network architecture',
                  'Seamless connectivity across branches and departments'
                ]
              },
              {
                icon: FiActivity,
                title: 'Network Auditing & Assessment',
                items: [
                  'Review of existing infrastructure',
                  'Performance & security analysis',
                  'Detailed improvement strategies'
                ]
              },
              {
                icon: FiLayers,
                title: 'Site Planning & Cabling Blueprint',
                items: [
                  'Cable routing design',
                  'OR-based site planning techniques',
                  'Professional network layout diagrams'
                ]
              },
              {
                icon: FiDatabase,
                title: 'Structured Cabling Solutions',
                items: [
                  'Fiber & copper cabling',
                  'Patch panels & racks',
                  'End-to-end connectivity setup'
                ]
              },
              {
                icon: FiTrendingUp,
                title: 'Network Resource Optimization',
                items: [
                  'Traffic prioritization',
                  'Bandwidth optimization',
                  'Load balancing'
                ]
              },
              {
                icon: FiMonitor,
                title: 'Network Management Services',
                items: [
                  'Monitoring & maintenance',
                  'Fault detection',
                  'Real-time issue resolution'
                ]
              },
              {
                icon: FiLock,
                title: 'Security Planning & Implementation',
                items: [
                  'Firewall deployment',
                  'Secure VPN',
                  'Network segmentation'
                ]
              },
              {
                icon: FiCpu,
                title: 'Hardware Deployment',
                items: [
                  'Network switches',
                  'Access points',
                  'Routers, firewalls, racks & accessories'
                ]
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-vantara to-vantara-light p-3 rounded-xl">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-vantara flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

     


      {/* Why Choose Vantara Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Why Choose Vantara?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Your Trusted Enterprise Networking Partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiShield,
                title: 'Experienced Experts',
                description: 'A strong team with 10–15 years of hands-on experience in designing and managing enterprise-grade networks.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: FiTrendingUp,
                title: 'Future-Ready Architecture',
                description: 'Networks designed with scalability, automation & security at the core.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: FiZap,
                title: 'Faster Deployment, Minimal Downtime',
                description: 'We ensure rapid installation, smooth transitions, and uninterrupted operations.',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                icon: FiActivity,
                title: '24×7 Support & Monitoring',
                description: 'Real-time monitoring, proactive issue resolution, and round-the-clock technical support.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: FiSettings,
                title: 'Cost-Optimized & Efficient',
                description: 'Reduced operational costs with improved network performance.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: FiLayers,
                title: 'End-to-End Delivery',
                description: 'From planning and installation to management and support — everything under one roof.',
                color: 'from-indigo-500 to-indigo-600'
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA Section with Background Image */}
      <CTASection />
    </>
  )
}
