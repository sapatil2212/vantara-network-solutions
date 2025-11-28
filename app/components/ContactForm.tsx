'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Send } from 'lucide-react'

// List of countries
const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
  'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
  'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji',
  'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
  'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea',
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
  'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
  'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
  'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway',
  'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
  'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
  'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka',
  'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
  'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
  'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
]

// Services list
const services = [
  'Network Solutions',
  'IT Infrastructure Solutions',
  'Hardware Solutions',
  'Data Center Solutions',
  'Cloud Services',
  'Information Security',
  'Cybersecurity',
  'Telecom Solutions',
  'Repair & Support',
  'Other'
]

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    country: 'India',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const emailJSServiceID = 'service_wvyur3z' // Service ID
    const emailJSPublicKey = 'TDx6VB3NgpSqUCF-t' // Updated Public KEY

    try {
      const promises = []

      // 1. Send to EmailJS - Admin template
      const adminEmailPromise = emailjs.send(
        emailJSServiceID,
        'template_euiv8zx',
        {
          name: formData.name,          // Changed from from_name to name
          email: formData.email,        // Changed from from_email to email
          mobile: formData.mobile,
          service: formData.service,
          country: formData.country,
          message: formData.message,
          timestamp: new Date().toLocaleString(), // Added timestamp
        },
        emailJSPublicKey
      ).catch(err => {
        console.error('Admin Email Failed:', err)
        throw new Error('Failed to send admin email')
      })
      promises.push(adminEmailPromise)

      // 2. Send to EmailJS - User template
      const userEmailPromise = emailjs.send(
        emailJSServiceID,
        'template_qdtejvn',
        {
          name: formData.name,
          email: formData.email,
          to_email: formData.email,
          sender_name: 'Vantara Network Solutions', // Map this to "From Name" in EmailJS
          reply_to: 'info@vantaranetwork.com',
          mobile: formData.mobile,
          service: formData.service,
          country: formData.country,
          message: formData.message,
          timestamp: new Date().toLocaleString(),
        },
        emailJSPublicKey
      ).catch(err => {
        console.error('User Email Failed:', err)
      })
      promises.push(userEmailPromise)

      // 3. Send to Google Sheets
      // Note: Using URLSearchParams to send as form-encoded data to avoid CORS preflight
      const sheetData = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        service: formData.service,
        country: formData.country,
        message: formData.message,
      })

      const sheetPromise = fetch('https://script.google.com/macros/s/AKfycby5LkybOdNYeLZGoUHXBHVcbGfD_Y03a3CFEL8zI_8yJ87n_4PPfNUa-i32JpS5RF--/exec', {
        method: 'POST',
        body: sheetData,
        redirect: 'follow'
      }).then(res => {
        console.log('Google Sheet submission sent (status:', res.status, ')')
        return res.json()
      }).then(data => {
        console.log('Google Sheet submission successful:', data)
      }).catch(err => {
        console.error('Google Sheet Submission Failed:', err)
        // Don't throw - allow form submission to succeed even if sheet fails
      })
      promises.push(sheetPromise)

      // Wait for Admin Email (critical) and others
      await Promise.all(promises)

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        mobile: '',
        service: '',
        country: 'India',
        message: '',
      })
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please check your connection and try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vantara focus:border-transparent transition-all"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email and Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vantara focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium mb-1.5 text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vantara focus:border-transparent transition-all"
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      {/* Service and Country - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1.5 text-gray-700">
            Service Interested <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vantara focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1.5 text-gray-700">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vantara focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vantara focus:border-transparent transition-all resize-none"
          placeholder="Tell us how we can help you..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-vantara hover:bg-vantara-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      {/* Success Message */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-green-800 text-sm">Message Sent!</p>
              <p className="text-xs text-green-700 mt-1">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-red-800 text-sm">Failed to Send</p>
              <p className="text-xs text-red-700 mt-1">{errorMessage || 'Please try again or contact us directly.'}</p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
