'use client'

import { useState, useEffect, ReactNode } from "react"

interface AnimatedTextProps {
  text?: string
  children?: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedText({ text, children, delay = 0, className = '' }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, text, children])

  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-4 blur-sm'
      } ${className}`}
    >
      {text || children}
    </div>
  )
}
