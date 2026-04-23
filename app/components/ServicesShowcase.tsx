'use client'
import { useState } from 'react'
import Image from 'next/image'

const services = [
  { 
    num: '01', 
    title: 'Exceptional Optical Precision', 
    desc: 'We deliver lenses engineered for superior visual clarity, precision, and all-day comfort — meeting the expectations of today\'s discerning customers.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80'
  },
  { 
    num: '02', 
    title: 'Advanced Lens Design & Innovation', 
    desc: 'Our portfolio features next-generation lens technologies, including digitally surfaced and high-performance progressive designs.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
  },
  { 
    num: '03', 
    title: 'Premium Quality with Strategic Value', 
    desc: 'We combine world-class quality standards with optimized pricing, enabling our partners to offer premium products while maintaining strong profitability.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
  },
  { 
    num: '04', 
    title: 'Global Expertise, Consistent Excellence', 
    desc: 'Through carefully selected international manufacturing partnerships, we ensure consistent quality, reliability, and adherence to global optical standards.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80'
  },
  { 
    num: '05', 
    title: 'Seamless & Efficient Supply Chain', 
    desc: 'Our streamlined logistics and fulfillment processes are designed to deliver speed, reliability, and consistency — supporting uninterrupted business operations.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80'
  },
  { 
    num: '06', 
    title: 'Partnership-Driven Approach', 
    desc: 'At Vizora Optics, we go beyond supply — we build long-term partnerships through dedicated support, responsiveness, and a shared commitment to growth.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
  },
]

export default function ServicesShowcase() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span className="section-label">Our Commitment</span>
          <h2>What Sets Us Apart</h2>
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
                  <div style={{
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
      `}</style>
    </section>
  )
}
