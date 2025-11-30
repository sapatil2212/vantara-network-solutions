'use client'

import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

const COMPANY_INFO = {
  phone: '+91 84463 17126',
  email: 'vantaranet@gmail.com',
  address: 'Sai Platinum Building, 301, 3rd floor, Laxmi road, Opp to Jyoti Gas appliances',
  whatsapp: '+91 84463 17126'
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="rounded-b-[50px] md:rounded-b-[100px] bg-white overflow-hidden mx-0 sm:mx-10">
        <section 
          className="relative text-white pt-28 pb-12 md:pt-32 md:pb-16"
          style={{
            backgroundImage: 'url(/images/core-services/it-infra.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

          <div className="container-custom relative z-10 px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Get in Touch
              </h1>
              <p className="text-xs sm:text-sm md:text-lg md:text-xl mb-3 md:mb-6 opacity-95 leading-relaxed">
                Let&apos;s discuss how we can transform your IT infrastructure. Get in touch with our experts today.
              </p>
              <p className="text-xs sm:text-sm md:text-lg mb-6 md:mb-8 opacity-90 leading-relaxed">
                We&apos;re here to help you build a robust, secure, and scalable IT environment.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="border border-gray-200 rounded-xl bg-white">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  
                  <ContactForm />
                </div>
              </div>
            </motion.div>

            {/* Map and Contact Information Combined */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                {/* Map Section - Google Maps */}
                <div className="h-64 md:h-80 bg-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.331076438922!2d73.84537127519145!3d18.513935082578346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMwJzUwLjIiTiA3M8KwNTAnNTIuNiJF!5e0!3m2!1sen!2sin!4v1764414838572!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                {/* Contact Information Section */}
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Phone and WhatsApp - Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Call */}
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-vantara rounded flex items-center justify-center flex-shrink-0">
                          <Phone className="h-3 w-3 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <a
                            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                            className="text-xs sm:text-sm text-gray-600 hover:text-vantara transition-colors font-semibold"
                          >
                            {COMPANY_INFO.phone}
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-vantara rounded flex items-center justify-center flex-shrink-0">
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                          </svg>
                        </div>
                        
                        <div className="flex-1">
                          <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[\s+-]/g, '')}?text=Hello%20Vantara%2C%20I%20would%20like%20to%20inquire%20about%20your%20services`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm text-gray-600 hover:text-vantara transition-colors font-semibold"
                          >
                            {COMPANY_INFO.whatsapp}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email and Address - Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-vantara rounded flex items-center justify-center flex-shrink-0">
                          <Mail className="h-3 w-3 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <a
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="text-xs sm:text-sm text-gray-600 hover:text-vantara transition-colors font-semibold break-all"
                          >
                            {COMPANY_INFO.email}
                          </a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-vantara rounded flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-3 w-3 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed">
                            {COMPANY_INFO.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
