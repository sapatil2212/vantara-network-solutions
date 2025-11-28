import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  image?: string
}

export default function ServiceCard({ icon, title, description, link, image }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg border overflow-hidden h-[400px] flex flex-col">
      {/* Image Section - Top Half */}
      <div className="h-1/2 relative bg-gradient-to-br from-vantara to-vantara-light">
        {image ? (
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-6xl opacity-50">
              {icon}
            </div>
          </div>
        )}
      </div>
      
      {/* Content Section - Bottom Half */}
      <div className="h-1/2 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-vantara">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <Link 
          href={link}
          className="inline-flex items-center text-vantara font-semibold hover:underline mt-auto"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}
