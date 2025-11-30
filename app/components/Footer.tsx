'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiClock, FiChevronRight } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaHeart } from 'react-icons/fa6'
import ParticleBackground from './ParticleBackground'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 text-white overflow-hidden">
      {/* Particles Background */}
      <ParticleBackground id="footer-particles" />
      {/* Main Footer */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/logo/vantara-logo.png" 
                alt="Vantara Network Solutions" 
                width={180} 
                height={50} 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Empowering businesses with reliable network & IT solutions. Building the future of IT—one business at a time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vantara-light transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vantara-light transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vantara-light transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vantara-light transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/about" className="text-gray-300 hover:text-vantara-light transition-colors">
                  About Us
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/services" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/contact" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/services/network" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Network Solutions
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/services/datacenter" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Data Center Solutions
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/services/security" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/services/cloud" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiChevronRight className="w-4 h-4 text-vantara-light flex-shrink-0" />
                <Link href="/services/hardware" className="text-gray-300 hover:text-vantara-light transition-colors">
                  Hardware & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <FiPhone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:08446317126" className="text-gray-300 hover:text-vantara-light transition-colors">
                  084463 17126
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FiMail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:vantaranet@gmail.com" className="text-gray-300 hover:text-vantara-light transition-colors">
                  vantaranet@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FiMapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Sai Platinum Building<br />
                  301, 3rd floor, Laxmi road<br />
                  Opp to Jyoti Gas appliances
                </span>
              </li>
              
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex flex-col items-center md:items-start">
              <p className="mb-2">
                &copy; {currentYear} Vantara Network Solutions. All rights reserved.
              </p>
             
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
             <p className="flex items-center text-xs">
                Made with <FaHeart className="w-3 h-3 mx-1 text-red-500" /> by{' '}
                <a 
                  href="https://digiworldtechnologies.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 hover:text-vantara-light transition-colors"
                >
                  Digiworld Infotech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
