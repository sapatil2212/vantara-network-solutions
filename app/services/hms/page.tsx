import { Metadata } from 'next'
import { FiHome } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Hotel Management Systems - Hospitality IT Solutions',
  description: 'Specialized hotel management systems including PMS, POS, booking engines, and complete hospitality IT infrastructure.',
}

export default function HMSServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-vantara text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <FiHome className="w-12 h-12" />
            <h1 className="heading-primary">Hotel Management Systems</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Complete IT and software solutions for the hospitality industry
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-secondary mb-6">Hospitality Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Property Management System</h3>
              <p className="text-gray-600">Complete hotel PMS with reservations, check-in/out, and billing</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Point of Sale</h3>
              <p className="text-gray-600">Restaurant and bar POS systems integrated with PMS</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Booking Engine</h3>
              <p className="text-gray-600">Online booking and channel management solutions</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">IT Infrastructure</h3>
              <p className="text-gray-600">Network, Wi-Fi, IPTV, and door lock systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-vantara text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">Modernize Your Hotel</h2>
          <a href="/contact" className="bg-white text-vantara px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block">
            Schedule Demo
          </a>
        </div>
      </section>
    </>
  )
}
