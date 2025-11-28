'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadLinksPreset } from 'tsparticles-preset-links'
import type { Engine } from 'tsparticles-engine'

interface ParticleBackgroundProps {
  id?: string
  className?: string
}

export default function ParticleBackground({ id = 'tsparticles', className = '' }: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine)
  }, [])

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <Particles
        id={id}
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          preset: 'links',
          background: {
            color: {
              value: 'transparent',
            },
          },
          particles: {
            color: {
              value: '#4d9ff5',
            },
            links: {
              color: '#4d9ff5',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: {
                default: 'bounce',
              },
            },
            number: {
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
    </div>
  )
}
