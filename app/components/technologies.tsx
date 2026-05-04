'use client'
import { useState } from 'react'
import Image from 'next/image'

const services = [
  { 
    num: '01', 
    title: 'Digital Progressive Design', 
    desc: 'All progressive lenses in the Vizora range use digitally surfaced designs to ensure maximum zone width, minimal swim effect, and fast adaptation.',
    image: '/images/mission1.jpg'
  },
  { 
    num: '02', 
    title: 'Multi-Layer AR Technology', 
    desc: 'Our AR and AR PLUS coatings feature advanced multi-layer anti-reflective stacks that dramatically reduce surface reflections and increase light transmission.',
    image: '/images/mission2.jpg'
  },
  { 
    num: '03', 
    title: 'Selective Blue Light Filtration', 
    desc: 'BLUE PLUS uses precisely calibrated wavelength filtration to block harmful HEV blue light while preserving natural colour balance.',
    image: '/images/mission3.jpg'
  },
  { 
    num: '04', 
    title: 'Hydrophobic & Oleophobic Layers', 
    desc: 'AR PLUS coating incorporates hydrophobic and oleophobic top layers for superior water, dust, and smudge resistance and extended lens lifespan.',
    image: '/images/mission4.jpg'
  },
  { 
    num: '05', 
    title: 'Low-Light Contrast Enhancement', 
    desc: 'VIZORA DRIVE is engineered with special contrast-enhancing properties that improve clarity and sharpness in low-light driving conditions.',
    image: '/images/mission5.jpg'
  },
  { 
    num: '06', 
    title: 'Precision Personalization', 
    desc: 'Our flagship V INFINITY 4K lens supports personalized parameters for a truly custom visual experience tailored to each wearer.',
    image: '/images/misson6.jpg'
  },
]

export default function Technologies() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span className="section-label">Key Technologies</span>
          <h2>Innovations in Our Portfolio</h2>
          <div className="divider divider-center" />
        </div>
        
        <div className="relative">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {services.map((item, index) => (
              <div 
                key={item.num} 
                style={{ 
                  display: 'flex', 
                  gap: 32, 
                  padding: '32px 40px', 
                  border: '1px solid #e8e8e4', 
                  borderBottom: index !== services.length - 1 ? 'none' : '1px solid #e8e8e4', 
                  alignItems: 'center', 
                  background: hoveredItem === item.num ? '#f8f9fa' : '#fff', 
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredItem(item.num)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '2.5rem', 
                  fontWeight: 700, 
                  color: hoveredItem === item.num ? '#1565c0' : '#e8e8e4', 
                  minWidth: 80,
                  textAlign: 'center',
                  transition: 'color 0.3s ease'
                }}>
                  {item.num}
                </span>
                
                <div style={{ flex: 1, paddingRight: hoveredItem === item.num ? '320px' : '0' }}>
                  <h4 style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 700, 
                    marginBottom: 8,
                    fontSize: '1.25rem',
                    color: hoveredItem === item.num ? '#1565c0' : '#1a1a1a',
                    lineHeight: 1.3,
                    transition: 'color 0.3s ease'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: hoveredItem === item.num ? '#374151' : '#6b7280',
                    lineHeight: 1.7,
                    margin: 0,
                    transition: 'color 0.3s ease'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Hover Image - positioned absolutely to the right */}
                {hoveredItem === item.num && (
                  <div className="hover-image" style={{
                    position: 'absolute',
                    right: 40,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 280,
                    height: 180,
                    zIndex: 10,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    opacity: 0,
                    animation: 'slideInFade 0.4s ease forwards'
                  }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInFade {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        
        @media (max-width: 768px) {
          .hover-image {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
