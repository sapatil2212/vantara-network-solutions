import Image from 'next/image'

export default function TrustedBrands() {
  const brands = [
    // Hardware & Infrastructure
    { name: 'Dell', logo: '/images/company-logo/dell.png' },
    { name: 'HP', logo: '/images/company-logo/hp.png' },
    { name: 'Hewlett Packard', logo: '/images/company-logo/hewlett-packard.png' },
    { name: 'IBM', logo: '/images/company-logo/ibm.png' },
    { name: 'Lenovo', logo: '/images/company-logo/lenovo.png' },
    { name: 'ASUS', logo: '/images/company-logo/asus.png' },
    { name: 'Acer', logo: '/images/company-logo/acer.png' },
    { name: 'Apple', logo: '/images/company-logo/apple.png' },
    
    // Networking
    { name: 'Cisco', logo: '/images/company-logo/cisco-logo.png' },
    { name: 'Juniper', logo: '/images/company-logo/Juniper.png' },
    { name: 'Aruba', logo: '/images/company-logo/Aruba.png' },
    { name: 'Arista', logo: '/images/company-logo/arista.png' },
    { name: 'D-Link', logo: '/images/company-logo/dlink.png' },
    
    // Storage & Data Center
    { name: 'NetApp', logo: '/images/company-logo/NetApp.png' },
    { name: 'APC', logo: '/images/company-logo/apc.png' },
    { name: 'Webwerks', logo: '/images/company-logo/webwerks.png' },
    { name: 'Yotta', logo: '/images/company-logo/yotta.png' },
    
    // Security
    { name: 'Fortinet', logo: '/images/company-logo/fortinet.png' },
    { name: 'Sophos', logo: '/images/company-logo/sophos.png' },
    { name: 'SonicWall', logo: '/images/company-logo/sonicwall.png' },
    { name: 'WatchGuard', logo: '/images/company-logo/watchguard.png' },
    { name: 'Seqrite', logo: '/images/company-logo/Seqrite.png' },
    { name: 'Quick Heal', logo: '/images/company-logo/quickheal.png' },
    { name: 'Bitdefender', logo: '/images/company-logo/bitedefender.png' },
    { name: 'Trend Micro', logo: '/images/company-logo/trend.png' },
    
    // Software & Cloud
    { name: 'Microsoft', logo: '/images/company-logo/microsoft.png' },
    { name: 'Adobe', logo: '/images/company-logo/adobe.png' },
    { name: 'Autodesk', logo: '/images/company-logo/autodesk.png' },
    
    // Peripherals & Accessories
    { name: 'Canon', logo: '/images/company-logo/canon.png' },
    { name: 'Epson', logo: '/images/company-logo/epson.png' },
    { name: 'Brother', logo: '/images/company-logo/brother.png' },
    { name: 'Samsung', logo: '/images/company-logo/samsung.png' },
    { name: 'BenQ', logo: '/images/company-logo/benq.png' },
    { name: 'Kramer', logo: '/images/company-logo/kramer.jpg' },
    
    // Connectivity & Telecom
    { name: 'Tata', logo: '/images/company-logo/tata.png' },
    { name: 'Sify', logo: '/images/company-logo/sify.png' },
    { name: 'AMP', logo: '/images/company-logo/amp.png' },
    
    // Other Partners
    { name: 'ESSL', logo: '/images/company-logo/essl.png' },
    { name: 'Codexxa', logo: '/images/company-logo/codexxa.png' },
    { name: 'Technavious', logo: '/images/company-logo/technavious.png' },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="border border-gray-200 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white to-gray-50">
          <div className="text-center mb-12 pb-8 border-b border-gray-200">
            <h2 className="heading-secondary mb-4">Authorized Partners & Trusted Brands</h2>
            <p className="text-lg text-gray-600">
              We work with industry-leading technology providers to deliver the best solutions
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-110"
            >
              <Image 
                src={brand.logo} 
                alt={brand.name} 
                width={120} 
                height={80} 
                className="object-contain w-full h-auto max-h-16" 
              /> 
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
