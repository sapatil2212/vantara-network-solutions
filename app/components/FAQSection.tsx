'use client'

import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQItem[]
  imageSrc?: string
}

export default function FAQSection({ 
  title = "FAQ – Your Questions Answered", 
  faqs,
  imageSrc = "/images/faq.png"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">{title}</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* FAQ List */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900 text-base md:text-lg flex-1">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-vantara text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {openIndex === index ? (
                      <FiMinus className="w-4 h-4" />
                    ) : (
                      <FiPlus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
                
                {/* Horizontal divider - hide for last item */}
                {index < faqs.length - 1 && (
                  <div className="border-b border-gray-200" />
                )}
              </div>
            ))}
          </div>

            {/* Image */}
            <div className="hidden lg:flex items-stretch">
              <img 
                src={imageSrc}
                alt="FAQ"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
