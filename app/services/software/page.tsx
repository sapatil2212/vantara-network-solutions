import { Metadata } from 'next'
import { FiMonitor } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Software Solutions - Enterprise Software & Licensing',
  description: 'Enterprise software solutions, licensing, ERP, CRM, and custom software development services.',
}

export default function SoftwareServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-vantara text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <FiMonitor className="w-12 h-12" />
            <h1 className="heading-primary">Software Solutions</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Enterprise software, licensing, and custom development to power your business
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-secondary mb-6">Software Services</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Enterprise Software</h3>
              <p className="text-gray-700">ERP, CRM, and business management software</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Software Licensing</h3>
              <p className="text-gray-700">Microsoft, Adobe, and enterprise software licensing</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Custom Development</h3>
              <p className="text-gray-700">Tailored software solutions for unique business needs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Software Support</h3>
              <p className="text-gray-700">Implementation, training, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-vantara text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">Transform Your Business with Software</h2>
          <a href="/contact" className="bg-white text-vantara px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block">
            Discuss Your Needs
          </a>
        </div>
      </section>
    </>
  )
}
