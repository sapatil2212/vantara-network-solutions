import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Vantara Network Solutions',
  description: 'Get in touch with Vantara Network Solutions for enterprise IT infrastructure, network solutions, and technology services. Call us or fill out our contact form.',
  openGraph: {
    title: 'Contact Us - Vantara Network Solutions',
    description: 'Get in touch with Vantara Network Solutions for enterprise IT solutions.',
    images: ['/images/og-image.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
