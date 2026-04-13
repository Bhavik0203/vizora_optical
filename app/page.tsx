'use client'
import Link from 'next/link';
import { HeroSparkles } from '@/app/components/hero';
import Testimonials from '@/app/components/testimonials';

const products = [
  {
    id: 'v-select',
    name: 'V SELECT HD',
   
    desc: 'Designed for everyday comfort and easy adaptation - delivering clear, stable vision across all distances with a natural feel from day one.',
    ideal: 'First-time progressive wearers & everyday use',
   },
  {
    id: 'v-flow',
    name: 'V FLOW HD',
   
    desc: 'Enhanced digital surfacing delivers noticeably wider vision zones and silky-smooth transitions, making every glance feel effortless throughout the day.',
    ideal: 'Active professionals & digital device users',
   },
  {
    id: 'v-elite',
    name: 'V ELITE HD',
   
    desc: 'Individually calculated for your unique prescription and frame measurements, V ELITE HD delivers premium visual precision across every zone.',
    ideal: 'High-prescription wearers & precision demand',
  },
  {
    id: 'v-infinity',
    name: 'V INFINITY 4K',
  
    desc: 'Our most advanced lens - ultra HD 4K clarity, maximum field of vision, and minimal swim effect for the most demanding wearers who accept nothing less.',
    ideal: 'Premium lifestyle, high-demand professionals',
   },
];

const usps = [
  { icon: '◈', title: 'Exceptional Optical Precision', desc: 'Lenses engineered for superior visual clarity, precision, and all-day comfort.' },
  { icon: '◉', title: 'Advanced Lens Technology', desc: 'Next-generation lens designs with digitally surfaced and high-performance progressives.' },
  { icon: '◇', title: 'Premium Quality, Strategic Value', desc: 'World-class quality with optimized pricing for maximum partner profitability.' },
  { icon: '◆', title: 'Seamless Supply Chain', desc: 'Streamlined logistics for speed, reliability, and uninterrupted business operations.' },
  { icon: '◎', title: 'Global Expertise', desc: 'International manufacturing partnerships ensuring consistent quality and reliability.' },
  { icon: '▣', title: 'Partnership-Driven Approach', desc: 'Long-term partnerships through dedicated support, responsiveness, and shared growth.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSparkles />

      {/* ── Announcement bar ── */}
      <div style={{ background: 'linear-gradient(135deg, #1565c0, #0097c7)', padding: '14px 0' }}>
        <div className="container flex-between" style={{ flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'white', letterSpacing: '0.04em' }}>
            Now Available: V INFINITY 4K - Ultra-Premium Digital Progressive Lens
          </p>
          <Link href="/products/lenses" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'white', textDecoration: 'underline', letterSpacing: '0.06em' }}>
            Learn More →
          </Link>
        </div>
      </div>

   <section style={{ position: 'relative', overflow: 'hidden', height: '520px', background: '#0a1628' }}>
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      opacity: 0.75,
    }}
  >
    <source src="/images/spin-new-styles-2026-720-1.mp4" type="video/mp4" />
  </video>

  {/* Centered button */}
  <div style={{
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <button
      style={{
        color: '#fff',
        background: 'transparent',
        border: '2px solid #fff',
        borderRadius: '50px',
        padding: '14px 36px',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
        letterSpacing: '0.05em',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.background = 'linear-gradient(135deg, #1565c0, #0097c7)';
        el.style.borderColor = 'transparent';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.background = 'transparent';
        el.style.borderColor = '#fff';
      }}
    >
      Explore All Products
    </button>
  </div>
</section>

   
      {/* ── Wear Your Shape ── */}
      <section style={{ background: '#000', padding: '72px 0 80px' }}>
        <style>{`
          .shape-card { display: flex; flex-direction: column; align-items: center; gap: 20px; cursor: default; }
          .shape-icon-wrap {
            display: flex; align-items: center; justify-content: center;
            transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
          }
          .shape-card:hover .shape-icon-wrap { transform: scale(1.32); }
          .shape-icon-wrap img {
            filter: brightness(0) invert(1);
            display: block;
            transition: filter 0.3s ease;
          }
          .shape-card:hover .shape-icon-wrap img { filter: brightness(0) invert(1) sepia(1) saturate(4) hue-rotate(5deg) brightness(1.1); }
        `}</style>
        <div className="container">
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}>
              Wear Your Shape
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.55)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}>
              Turn up the heat in our trendiest shapes of the season
            </p>
          </div>

          {/* Shape Grid */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(24px, 5vw, 72px)',
            flexWrap: 'wrap',
          }}>
            {[
              { src: '/images/Cateye_Icon_2218d707-d80d-4221-bfa8-c7cc25e30484.png',    label: 'Cateye',    size: 130 },
              { src: '/images/Square_Icon_c7492fda-09bc-4a6a-92f0-c73f00f9451f.png',    label: 'Square',    size: 130 },
              { src: '/images/Rectangle_icon_bc5eeb4c-1110-4d36-b618-f9442f2cf1b7.png', label: 'Rectangle', size: 130 },
              { src: '/images/Pilot_Icon_26f3477e-49c1-4724-9977-d3a1d1bb0859.png',     label: 'Pilot',     size: 130 },
              { src: '/images/Round_Icon_abcdff6e-1d7f-4930-9d40-49b9fd9d5bff.png',     label: 'Round',     size: 130 },
            ].map((shape) => (
              <div key={shape.label} className="shape-card">
                <div className="shape-icon-wrap">
                  <img
                    src={shape.src}
                    alt={shape.label}
                    width={shape.size}
                    height={shape.size}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  {shape.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
     <section >
        {/* Section Header */}
        {/* <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <span className="section-label">Product Portfolio</span>
              <h2>Progressive Lens Series</h2>
              <div className="divider" />
            </div>
            <Link href="/products/lenses" className="btn btn-outline-navy" id="home-view-all-products">View All Products</Link>
          </div>
        </div> */}

        {/* Split-panel product rows */}
        <style>{`
          .prod-panel { display: grid; grid-template-columns: 1fr 1fr; min-height: 480px; }
          .prod-video-cell { position: relative; overflow: hidden; min-height: 480px; }
          .prod-video-cell video {
            position: absolute; inset: 0;
            width: 100%; height: 100%;
            object-fit: cover; object-position: center;
            display: block;
          }
          .prod-detail {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            padding: 60px 48px;
            overflow: hidden;
            text-align: center;
            min-height: 480px;
          }
          .prod-detail-name-bg {
            position: absolute;
            top: 0; left: 0; right: 0;
            padding: 28px 32px 0;
            pointer-events: none;
            overflow: hidden;
          }
          .prod-detail-name-bg span {
            font-family: 'Inter', sans-serif;
            font-size: clamp(2.8rem, 5.5vw, 5rem);
            font-weight: 900;
            letter-spacing: -0.01em;
            text-transform: uppercase;
            line-height: 1.05;
            color: rgba(255,255,255,0.37);
            display: block;
            word-break: break-word;
          }
          .prod-detail-arrow {
            font-size: 3.5rem;
            color: rgba(255,255,255,0.55);
            margin-bottom: 28px;
            line-height: 1;
          }
          .prod-detail-desc {
            font-size: 1rem;
            color: rgba(255,255,255,0.55);
            line-height: 1.88;
            max-width: 540px;
            text-align: center;
          }
          @media (max-width: 768px) {
            .prod-panel { grid-template-columns: 1fr; }
            .prod-video-cell { min-height: 320px; }
            .prod-detail { padding: 48px 28px; min-height: auto; }
            .prod-detail-name-bg span { font-size: 2.5rem; }
          }
        `}</style>

        {[
          {
            ...products[0],
            video: '/images/pinkvideos.mp4',
            bg2:   '#CAA696',
             flip:  true,
          },
          {
            ...products[1],
            video: '/images/01_shore_leave_mat_antartica_mid.mp4',
            bg2:   '#353333',
           
            flip:  false,
          },
          {
            ...products[2],
            video: '/images/01_fjord_line_mid_crop.mp4',
            bg2:   '#b1adad',
             flip:  true,
          },
          {
            ...products[3],
           video:"/images/browncolorlens.mp4",
            bg2:   '#151e12',
            flip:  false,
          },
        ].map((p) => {
          const videoCell = (
            <div key="vis" className="prod-video-cell" style={{ order: p.flip ? 1 : 0 }}>
              <video autoPlay muted loop playsInline preload="none">
                <source src={p.video} type="video/mp4" />
              </video>
            </div>
          );

          const detail = (
            <div key="det" className="prod-detail" style={{ background: p.bg2, order: p.flip ? 0 : 1 }}>
              {/* Giant watermark name at top */}
              <div className="prod-detail-name-bg">
                <span>{p.name}</span>
              </div>

              {/* Main content */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                {/* Arrow */}
                <div className="prod-detail-arrow">↓</div>

                {/* Description */}
                <p className="prod-detail-desc" style={{ marginBottom: 28 }}>{p.desc}</p>

                {/* Ideal for */}
                <p style={{
                  fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginBottom: 32, fontWeight: 600,
                }}>
                  Ideal for - <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>{p.ideal}</span>
                </p>

                {/* See More — bottom-right */}
              

              </div>
                <Link
                  href="/products/lenses"
                  id={`prod-seemore-${p.id}`}
                  style={{
                    position: 'absolute', bottom: 20, right: 20,
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: '1 rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  See More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </Link>
            </div>
          );

          return (
            <div key={p.id} className="prod-panel">
              {videoCell}
              {detail}
            </div>
          );
        })}
      </section>

      

     

      {/* ── Video Grid Section ── */}
      <section className="section-lg " style={{ 
        background: 'linear-gradient(135deg, #0a1628 0%, #12233f 100%)',
        position: 'relative',
        padding: '60px 0',
        overflow: 'hidden'
        
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(21,101,192,0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center" style={{  marginTop: 20 }}>
          
            <h2 style={{ 
              color: '#fff', 
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              marginBottom: 16,
              lineHeight: 1.2
            }}>
              Advanced Lens Coatings
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Cutting-edge coating technologies designed for superior clarity, durability, and visual comfort
            </p>
          </div>
          
       
          {/* Grid Layout */}
          <div className='' style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 1fr',
            gap: '20px',
            alignItems: 'center',
            height: '600px'
          }}>
            {/* Left Column - AR & BLUE PLUS */}
            <div style={{ 
              display: 'grid', 
              gridTemplateRows: '1fr 1fr', 
              gap: '20px',
              height: '100%'
            }}>
              <div style={{
                background: 'rgba(10, 22, 40, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                height: '290px'
              }}
                onMouseEnter={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(21,101,192,0.15)';
                  element.style.borderColor = 'rgba(21,101,192,0.4)';
                  element.style.transform = 'translateY(-4px)';
                  element.style.boxShadow = '0 12px 40px rgba(21,101,192,0.2)';
                }}
                onMouseLeave={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(10, 22, 40, 0.6)';
                  element.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  element.style.transform = 'translateY(0)';
                  element.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(21,101,192,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  border: '1px solid rgba(21,101,192,0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>◈</span>
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: 8
                }}>
                  AR
                </h3>
                <p style={{ 
                  fontSize: '0.8rem', 
                  color: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase', 
                  marginBottom: 12,
                  fontWeight: 600
                }}>
                  Anti-Reflective
                </p>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.4,
                  marginBottom: 12
                }}>
                  Reduces glare and improves visual clarity for daily activities
                </p>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 600
                }}>
                  Best for: Everyday Use
                </div>
              </div>
              
              <div style={{
                background: 'rgba(10, 22, 40, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                height: '290px'
              }}
                onMouseEnter={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(21,101,192,0.15)';
                  element.style.borderColor = 'rgba(21,101,192,0.4)';
                  element.style.transform = 'translateY(-4px)';
                  element.style.boxShadow = '0 12px 40px rgba(21,101,192,0.2)';
                }}
                onMouseLeave={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(10, 22, 40, 0.6)';
                  element.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  element.style.transform = 'translateY(0)';
                  element.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(21,101,192,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  border: '1px solid rgba(21,101,192,0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>◎</span>
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: 8
                }}>
                  BLUE PLUS
                </h3>
                <p style={{ 
                  fontSize: '0.8rem', 
                  color: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase', 
                  marginBottom: 12,
                  fontWeight: 600
                }}>
                  Blue Light Protection
                </p>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.4,
                  marginBottom: 12
                }}>
                  Filters harmful blue light from digital devices
                </p>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 600
                }}>
                  Best for: Digital Lifestyle
                </div>
              </div>
            </div>
            
            {/* Center - Video */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              height: '600px'
            }}>
              <video
                src="/images/girl.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
            
            {/* Right Column - AR PLUS & VIZORA DRIVE */}
            <div style={{ 
              display: 'grid', 
              gridTemplateRows: '1fr 1fr', 
              gap: '20px',
              height: '100%'
            }}>
              <div style={{
                background: 'rgba(10, 22, 40, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                height: '290px'
              }}
                onMouseEnter={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(21,101,192,0.15)';
                  element.style.borderColor = 'rgba(21,101,192,0.4)';
                  element.style.transform = 'translateY(-4px)';
                  element.style.boxShadow = '0 12px 40px rgba(21,101,192,0.2)';
                }}
                onMouseLeave={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(10, 22, 40, 0.6)';
                  element.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  element.style.transform = 'translateY(0)';
                  element.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(21,101,192,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  border: '1px solid rgba(21,101,192,0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>◉</span>
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: 8
                }}>
                  AR PLUS
                </h3>
                <p style={{ 
                  fontSize: '0.8rem', 
                  color: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase', 
                  marginBottom: 12,
                  fontWeight: 600
                }}>
                  Enhanced Anti-Reflective
                </p>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.4,
                  marginBottom: 12
                }}>
                  Advanced protection with superior scratch resistance
                </p>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 600
                }}>
                  Best for: Durability & Maintenance
                </div>
              </div>
              
              <div style={{
                background: 'rgba(10, 22, 40, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                height: '290px'
              }}
                onMouseEnter={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(21,101,192,0.15)';
                  element.style.borderColor = 'rgba(21,101,192,0.4)';
                  element.style.transform = 'translateY(-4px)';
                  element.style.boxShadow = '0 12px 40px rgba(21,101,192,0.2)';
                }}
                onMouseLeave={(e) => { 
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.background = 'rgba(10, 22, 40, 0.6)';
                  element.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  element.style.transform = 'translateY(0)';
                  element.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(21,101,192,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  border: '1px solid rgba(21,101,192,0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>◆</span>
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: 8
                }}>
                  VIZORA DRIVE
                </h3>
                <p style={{ 
                  fontSize: '0.8rem', 
                  color: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase', 
                  marginBottom: 12,
                  fontWeight: 600
                }}>
                  Premium Driving
                </p>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.4,
                  marginBottom: 12
                }}>
                  Optimized for enhanced contrast and reduced glare while driving
                </p>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 600
                }}>
                  Best for: Driving & Night Vision
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="section ">
        <div className="container">
          <div style={{
            position: 'relative',
            padding: '72px 64px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 48,
            alignItems: 'center',
            height: '400px',
            borderRadius: '26px',
            overflow: 'hidden',
          }}>
            {/* Background Image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/ctc.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
            }} />
            {/* Dark Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.70)',
              zIndex: 1,
            }} />
            <div style={{ position: 'absolute', top: 30, left: 30, zIndex: 2 }}>
              <span style={{ background: `white`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '1.2rem', fontWeight: 700 }}>Partner With Us</span>
              <h2 style={{ color: '#fff', marginBottom: 16 }}>Ready to Elevate Your Optical Practice?</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 620 }}>
                Join our network of trusted optical retailers and distributors. Get competitive pricing, dependable service, and efficient logistics support.
              </p>
            </div>
            <div style={{ position: 'absolute', bottom: 30, right: 30, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
              <Link
                href="/contact"
                id="home-partner-cta"
                style={{
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #1565c0, #0097c7)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(21, 101, 192, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(21, 101, 192, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(21, 101, 192, 0.3)';
                }}
              >
                Get in Touch
              </Link>
              {/* <Link href="/about" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                Learn About Us →
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
