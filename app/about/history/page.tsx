'use client'
import Link from 'next/link';
import VizoraStory from '@/app/components/VizoraStory';
import { useEffect } from 'react';

const milestones = [
  { year: 'Foundation', title: 'Vizora Optics Established', desc: 'Founded with a clear vision: to bridge the gap between premium optical quality and accessible pricing for eye care professionals across the United States.' },
  { year: 'Growth', title: 'Building Our Product Portfolio', desc: 'Developed and launched the core V-Series progressive lens lineup - V SELECT HD, V FLOW HD, and V ELITE HD - all built on digitally surfaced technology.' },
  { year: 'Innovation', title: 'Launching Advanced Coatings', desc: 'Introduced our specialized coating range: AR, AR PLUS, BLUE PLUS, and VIZORA DRIVE - addressing the full spectrum of modern lifestyle needs.' },
  { year: 'Expansion', title: 'V INFINITY 4K Unveiled', desc: 'Launched our flagship ultra-premium progressive lens delivering 4K-class visual clarity and maximum field of vision with minimal swim effect.' },
  { year: 'Partnership', title: 'Growing Our Network', desc: 'Expanded our partner network across PA, NJ, and beyond - empowering optical retailers and distributors with premium products and exceptional service.' },
  { year: 'Today', title: 'Setting the Standard', desc: 'Vizora Optics continues to evolve - investing in R&D, strengthening our supply chain, and deepening our commitment to partner success.' },
];

// Mobile responsive styles for timeline
const TimelineStyles = () => (
  <style>{`
    /* Mobile Styles for Timeline Section */
    @media (max-width: 768px) {
      .timeline-section {
        padding: 40px 0 !important;
      }
      
      .timeline-section .container {
        padding: 0 16px !important;
      }
      
      .timeline-section .container > div:first-child {
        margin-bottom: 32px !important;
      }
      
      .timeline-section .container > div:last-child {
        max-width: none !important;
      }
      
      /* Hide vertical line on mobile */
      .timeline-section .container > div:last-child > div:first-child {
        display: none !important;
      }
      
      /* Stack timeline items vertically */
      .timeline-section .timeline-item {
        flex-direction: column !important;
        gap: 16px !important;
        margin-bottom: 24px !important;
        padding-left: 20px !important;
        position: relative !important;
      }
      
      /* Add small vertical line for mobile */
      .timeline-section .timeline-item::before {
        content: '' !important;
        position: absolute !important;
        left: 0 !important;
        top: 20px !important;
        bottom: -20px !important;
        width: 2px !important;
        background: '#e8e8e4' !important;
      }
      
      .timeline-section .timeline-item:last-child::before {
        display: none !important;
      }
      
      /* Adjust content padding */
      .timeline-section .timeline-item > div:first-child {
        padding: 0 !important;
      }
      
      .timeline-section .timeline-card {
        padding: 20px !important;
      }
      
      .timeline-section .timeline-card > div:first-child {
        font-size: 0.65rem !important;
        margin-bottom: 6px !important;
      }
      
      .timeline-section .timeline-card h4 {
        font-size: 0.9rem !important;
        margin-bottom: 8px !important;
      }
      
      .timeline-section .timeline-card p {
        font-size: 0.8rem !important;
        line-height: 1.6 !important;
      }
      
      /* Adjust dot position for mobile */
      .timeline-section .timeline-dot {
        position: absolute !important;
        left: 0 !important;
        top: 20px !important;
        transform: translateX(-50%) !important;
        width: 12px !important;
        height: 12px !important;
        border: '2px solid #f5f5f0' !important;
      }
      
      /* Hide empty flex div */
      .timeline-section .timeline-item > div:last-child {
        display: none !important;
      }
    }
    
    @media (max-width: 480px) {
      .timeline-section {
        padding: 32px 0 !important;
      }
      
      .timeline-section .timeline-card {
        padding: 16px !important;
      }
      
      .timeline-section .timeline-card h4 {
        font-size: 0.85rem !important;
      }
      
      .timeline-section .timeline-card p {
        font-size: 0.75rem !important;
      }
      
      .timeline-section .timeline-dot {
        width: 10px !important;
        height: 10px !important;
      }
    }
  `}</style>
);

export default function HistoryPage() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.timeline-card');
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        const maxDistance = window.innerHeight / 2;
        
        // Calculate opacity and transform based on distance from center
        const opacity = Math.max(0.3, 1 - (distance / maxDistance) * 0.7);
        const translateY = Math.max(0, (distance / maxDistance) * 30);
        
        // Apply styles
        (card as HTMLElement).style.opacity = opacity.toString();
        (card as HTMLElement).style.transform = `translateY(${translateY}px)`;
        
        // Add color effect when card is near center
        if (distance < 100) {
          const intensity = 1 - (distance / 100);
          (card as HTMLElement).style.background = `linear-gradient(135deg, 
            rgba(240, 247, 255, ${intensity}), 
            rgba(230, 243, 255, ${intensity * 0.8}))`;
          (card as HTMLElement).style.borderColor = `rgba(21, 101, 192, ${intensity})`;
          (card as HTMLElement).style.boxShadow = `0 ${8 * intensity}px ${25 * intensity}px rgba(21, 101, 192, ${0.15 * intensity})`;
        } else {
          (card as HTMLElement).style.background = '#fff';
          (card as HTMLElement).style.borderColor = '#e8e8e4';
          (card as HTMLElement).style.boxShadow = 'none';
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TimelineStyles />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/about">About Us</Link><span>›</span>
            <span style={{ color: '#fff' }}>History</span>
          </nav>
          <span className="section-label">Our Story</span>
          <h1 style={{ marginBottom: 16 }}>Our History & Legacy</h1>
          <p>A journey driven by precision, purpose, and a passion for optical excellence.</p>
        </div>
      </section>

     
    

<VizoraStory />


      {/* Ambient Video – Brand Films */}
      <section style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {[
            {
              src: '/images/01_fjord_line_mid_crop.mp4',
              label: 'Precision Engineered',
              sub: 'Born from a commitment to optical excellence',
            },
            {
              src: '/images/01_shore_leave_mat_antartica_mid.mp4',
              label: 'Globally Inspired',
              sub: 'World-class manufacturing partnerships',
            },
          ].map((film, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', height: 380 }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
              >
                <source src={film.src} type="video/mp4" />
              </video>
              <div style={{
                position: 'absolute', inset: 0,
                background: i === 0
                  ? 'linear-gradient(to right, rgba(10,22,40,0.8), rgba(10,22,40,0.3))'
                  : 'linear-gradient(to left, rgba(10,22,40,0.8), rgba(10,22,40,0.3))',
              }} />
              <div style={{
                position: 'relative', padding: '48px 40px',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',
                textAlign: i === 0 ? 'left' : 'right',
                alignItems: i === 0 ? 'flex-start' : 'flex-end',
              }}>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(135deg, #1565c0, #0097c7)', marginBottom: 16 }} />
                <h3 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: 8 }}>{film.label}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', maxWidth: 280 }}>{film.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-off-white timeline-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 26 }}>
            <span className="section-label">Timeline</span>
            <h2>Key Milestones</h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#e8e8e4', transform: 'translateX(-50%)' }} />
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item" style={{
                display: 'flex',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                gap: 48, marginBottom: 48, position: 'relative', alignItems: 'flex-start',
              }}>
                <div style={{ flex: 1, padding: i % 2 === 0 ? '0 40px 0 0' : '0 0 0 40px' }}>
                  <div 
                    className="timeline-card"
                    style={{ 
                      background: '#fff', 
                      border: '1px solid #e8e8e4', 
                      padding: '28px 28px', 
                      transition: 'all 0.6s ease',
                      opacity: 0,
                      transform: 'translateY(30px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f0f7ff, #e6f3ff)';
                      e.currentTarget.style.borderColor = '#1565c0';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(21, 101, 192, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.borderColor = '#e8e8e4';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{m.year}</div>
                    <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 10, fontSize: '1rem' }}>{m.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="timeline-dot" style={{
                  position: 'absolute', left: '50%', top: 20,
                  width: 16, height: 16, background: 'linear-gradient(135deg, #1565c0, #0097c7)',
                  transform: 'translateX(-50%)',
                  border: '3px solid #f5f5f0',
                }} />
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Be Part of the Vizora Journey</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>We're always looking for like-minded partners who share our commitment to optical excellence.</p>
          <Link href="/contact" className="btn btn-primary" id="history-cta">Partner With Us</Link>
        </div>
      </section>
    </>
  );
}
