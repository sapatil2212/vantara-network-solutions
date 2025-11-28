'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiChevronDown, FiServer, FiHardDrive, FiDatabase, FiCloud, FiShield, FiLock, FiPhone, FiPackage, FiHome, FiTool } from 'react-icons/fi'
import { Button as MovingBorderButton } from './ui/moving-border'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isContactPage = pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesData = [
    {
      category: 'Infrastructure Solutions',
      items: [
        { name: 'Network Solutions', href: '/services/network', icon: <FiServer className="w-3 h-3" />, desc: 'Enterprise networking & connectivity' },
        { name: 'IT Infrastructure Solutions', href: '/services/it-infra', icon: <FiServer className="w-3 h-3" />, desc: 'IT Infrastructure solutions' },
        { name: 'Hardware Solutions', href: '/services/hardware', icon: <FiHardDrive className="w-3 h-3" />, desc: 'Enterprise hardware products' },
        { name: 'Data Center Solutions', href: '/services/datacenter', icon: <FiDatabase className="w-3 h-3" />, desc: 'Modern data center design' },
        { name: 'Cloud Services', href: '/services/cloud', icon: <FiCloud className="w-3 h-3" />, desc: 'Cloud migration & management' },
      ]
    },
    {
      category: 'Security & Telecom',
      items: [
        { name: 'Information Security', href: '/services/security', icon: <FiShield className="w-3 h-3" />, desc: 'Complete security solutions' },
        { name: 'Cybersecurity', href: '/services/cyber', icon: <FiLock className="w-3 h-3" />, desc: 'Advanced threat protection' },
        { name: 'Telecom Solutions', href: '/services/telecom', icon: <FiPhone className="w-3 h-3" />, desc: 'Unified communications' },
        { name: 'Repair & Support', href: '/services/repair', icon: <FiTool className="w-3 h-3" />, desc: '24/7 technical support' },
      ]
    },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isContactPage
        ? 'bg-black border-b border-white/10 shadow-xl'
        : isScrolled 
          ? 'bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg border-b border-white/10 shadow-xl' 
          : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/images/logo/vantara-logo.png" 
              alt="Vantara Network Solutions" 
              width={180} 
              height={50} 
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-vantara-light transition-colors duration-200 font-normal">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-vantara-light transition-colors duration-200 font-normal">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-white hover:text-vantara-light transition-colors duration-200 font-normal"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <span>Services</span>
                  <FiChevronDown className="h-4 w-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl transition-all duration-200 ${
                    servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="p-6 flex gap-6">
                    {/* Left side - Services Menu */}
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-6">
                        {servicesData.map((category, idx) => (
                          <div key={idx}>
                            <h3 className="text-xs font-semibold text-vantara-light mb-3 uppercase tracking-wide">
                              {category.category}
                            </h3>
                            <div className="space-y-1">
                              {category.items.map((service) => (
                                <Link href={service.href} key={service.href} className="block group/item">
                                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-vantara/20 transition-colors">
                                    <div className="w-5 h-5 bg-vantara/10 rounded flex items-center justify-center text-vantara flex-shrink-0">
                                      {service.icon}
                                    </div>
                                    <div className="text-sm font-medium text-white group-hover/item:text-vantara-light transition-colors">
                                      {service.name}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="w-64 flex-shrink-0 border-l border-white/10 pl-6">
                      <div className="h-full">
                        <Image
                          src="/images/core-services/4.jpg"
                          alt="Vantara Services"
                          width={250}
                          height={300}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="text-white hover:text-vantara-light transition-colors duration-200 font-normal">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918446317126"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200"
            >
              <FiPhone className="w-4 h-4" />
              +91 84463 17126
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 text-white hover:text-vantara-light transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className={`h-full bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-md overflow-y-auto transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="px-6 pt-6 pb-3 space-y-2">
              <Link href="/" className="block px-3 py-2 text-white hover:text-vantara-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:text-vantara-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <button 
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-vantara-light transition-colors"
                >
                  <span>Services</span>
                  <FiChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesDropdownOpen && (
                  <div className="pl-4 space-y-1 border-l-2 border-vantara/20 ml-3">
                    {servicesData.map((category) => (
                      <div key={category.category} className="py-2">
                        <h4 className="text-xs font-semibold text-vantara-light mb-2 uppercase tracking-wide">
                          {category.category}
                        </h4>
                        <div className="space-y-1">
                          {category.items.map((service) => (
                            <Link 
                              key={service.href}
                              href={service.href} 
                              className="block px-2 py-1 text-sm text-gray-300 hover:text-white"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="block px-3 py-2 text-white hover:text-vantara-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="px-3 py-2">
                <a 
                  href="tel:+918446317126" 
                  className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 text-white px-6 py-2.5 rounded-lg font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiPhone className="w-4 h-4" />
                  +91 84463 17126
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
