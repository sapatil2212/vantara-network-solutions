// This component is a utility for injecting SEO metadata
// It's primarily used for demonstration purposes
// In Next.js App Router, metadata is typically exported from page.tsx files

interface SharedSEOProps {
  title: string
  description: string
  image?: string
  jsonLd?: object
}

export default function SharedSEO({ title, description, image, jsonLd }: SharedSEOProps) {
  // In App Router, this would be handled via metadata export
  // This component serves as documentation of SEO requirements
  return null
}
