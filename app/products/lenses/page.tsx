'use client'
import Link from 'next/link';

const lenses = [
  {
    id: 'v-select-hd',
    name: 'V SELECT HD',
    type: 'Standard Digital Progressive',
    tag: 'Entry Premium',
    tagColor: '#3a3a36',
    positioning: 'Reliable performance with excellent value',
    desc: 'Designed for everyday comfort and easy adaptation, the V SELECT HD delivers clear vision across all distances for patients new to progressive lenses.',
    features: [
      'Clear vision across all distances',
      'Stable and comfortable design',
      'Easy adaptation for new wearers',
      'Digitally surfaced precision',
    ],
    ideal: 'First-time progressive wearers, everyday use, value-conscious segment',
  },
  {
    id: 'v-flow-hd',
    name: 'V FLOW HD',
    type: 'Advanced Digital Progressive',
    tag: 'Enhanced',
    tagColor: '#1c3460',
    positioning: 'Balanced performance with enhanced comfort',
    desc: 'Enhanced design for wider vision zones and smoother transitions. V FLOW HD delivers improved comfort for patients with active daily lifestyles.',
    features: [
      'Wider intermediate and near zones',
      'Reduced peripheral distortion',
      'Improved visual comfort for daily use',
      'Smooth zone transitions',
    ],
    ideal: 'Active daily users, intermediate-heavy tasks, longer screen time',
  },
  {
    id: 'v-elite-hd',
    name: 'V ELITE HD',
    type: 'Premium Customized Progressive',
    tag: 'Premium',
    tagColor: '#0a1628',
    positioning: 'Premium experience with maximum visual performance',
    desc: 'High-performance lens tailored for superior visual precision. V ELITE HD provides wider fields with minimal distortion for the discerning wearer.',
    features: [
      'Wider fields of vision with minimal distortion',
      'Faster adaptation and superior clarity',
      'Customized lens geometry',
      'Premium optical performance',
    ],
    ideal: 'Discerning patients, premium segment, high prescription values',
  },
  {
    id: 'v-infinity-4k',
    name: 'V INFINITY 4K',
    type: 'Ultra-Premium Digital Progressive',
    tag: 'Flagship',
    tagColor: 'linear-gradient(135deg, #1565c0, #0097c7)',
    tagTextColor: '#0a1628',
    positioning: 'Flagship lens offering unmatched clarity and performance',
    desc: 'Our most advanced lens, delivering ultra HD "4K" visual clarity with maximum field of vision and precision-engineered personalized viewing comfort.',
    features: [
      'Ultra high-definition "4K" visual clarity',
      'Maximum field of vision with minimal swim effect',
      'Precision-engineered for personalized viewing comfort',
      'Ideal for high-demand users and premium segment',
    ],
    ideal: 'Ultra-premium segment, high-demand users, patients requiring maximum performance',
  },
];

export default function LensesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/products">Products</Link><span>›</span>
            <span style={{ color: '#fff' }}>Optical Lenses</span>
          </nav>
          <span className="section-label">Progressive Lens Series</span>
          <h1 style={{ marginBottom: 16 }}>Optical Lenses</h1>
          <p>Four premium progressive lens designs engineered for every segment — from everyday reliability to ultra-premium 4K clarity.</p>
        </div>
      </section>

      {/* Series overview */}
      <section className="section-sm bg-off-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
            {lenses.map((l) => (
              <a key={l.id} href={`#${l.id}`} style={{
                display: 'block', padding: '20px 24px',
                background: '#fff', border: '1px solid #e8e8e4',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLAnchorElement).style.background = '#f5f5f0'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; }}
              >
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'linear-gradient(135deg, #1565c0, #0097c7)', textTransform: 'uppercase', marginBottom: 6 }}>Progressive</div>
                <h5 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#0a1628', marginBottom: 4 }}>{l.name}</h5>
                <p style={{ fontSize: '0.75rem', color: '#9a9a96' }}>{l.type}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Frame Shape Guide */}
      <section className="section-sm" style={{ background: '#f5f5f0', borderTop: '1px solid #e8e8e4', borderBottom: '1px solid #e8e8e4' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 36 }}>
            <span className="section-label">Frame Shapes</span>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#0a1628' }}>Compatible Lens Shapes</h3>
            <p style={{ fontSize: '0.88rem', color: '#4a5568', marginTop: 8 }}>All Vizora progressive lenses are available across our full range of frame styles</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {[
              { src: '/images/Round_Icon_abcdff6e-1d7f-4930-9d40-49b9fd9d5bff.png', label: 'Round' },
              { src: '/images/Rectangle_icon_bc5eeb4c-1110-4d36-b618-f9442f2cf1b7.png', label: 'Rectangle' },
              { src: '/images/Square_Icon_c7492fda-09bc-4a6a-92f0-c73f00f9451f.png', label: 'Square' },
              { src: '/images/Pilot_Icon_26f3477e-49c1-4724-9977-d3a1d1bb0859.png', label: 'Pilot' },
              { src: '/images/Cateye_Icon_2218d707-d80d-4221-bfa8-c7cc25e30484.png', label: 'Cat-Eye' },
            ].map((shape) => (
              <div key={shape.label} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                background: '#fff', border: '1px solid #e8e8e4',
                padding: '24px 28px', minWidth: 120,
                transition: 'all 0.2s', cursor: 'default',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
              >
                <img
                  src={shape.src}
                  alt={`${shape.label} frame shape`}
                  style={{ width: 56, height: 56, objectFit: 'contain', filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.6)' }}
                />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a1628' }}>{shape.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual lens cards */}
      <section className="section bg-white">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {lenses.map((lens, i) => (
            <div key={lens.id} id={lens.id} style={{
              display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
              gap: 0, border: '1px solid #e8e8e4', overflow: 'hidden',
            }}>
              {/* Left: Info Panel (always first in DOM order, reorder visually) */}
              <div style={{
                background: '#0a1628', padding: '48px 44px',
                display: 'flex', flexDirection: 'column', gap: 16,
                order: i % 2 === 0 ? 0 : 1,
              }}>
                <div style={{
                  display: 'inline-block', padding: '4px 12px',
                  background: lens.tagColor || '#0a1628',
                  color: lens.tagTextColor || '#fff',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  alignSelf: 'flex-start', marginBottom: 4,
                }}>
                  {lens.tag}
                </div>
                <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '2rem', lineHeight: 1.1 }}>{lens.name}</h2>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{lens.type}</p>
                <div style={{ width: 48, height: 2, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{lens.desc}</p>
                <div style={{ background: 'rgba(184,150,62,0.08)', border: '1px solid rgba(184,150,62,0.2)', padding: '12px 16px', marginTop: 8 }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Positioning</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>{lens.positioning}</p>
                </div>
              </div>

              {/* Right: Features */}
              <div style={{ padding: '48px 44px', background: '#fff', order: i % 2 === 0 ? 1 : 0 }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: 'linear-gradient(135deg, #1565c0, #0097c7)', textTransform: 'uppercase', borderBottom: '2px solid linear-gradient(135deg, #1565c0, #0097c7)', paddingBottom: 4, display: 'inline-block', marginBottom: 24 }}>Key Features</span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {lens.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                      <div style={{ width: 28, height: 28, background: '#0a1628', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <div style={{ width: 8, height: 8, background: 'linear-gradient(135deg, #1565c0, #0097c7)', borderRadius: '50%' }} />
                      </div>
                      <span style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.6, paddingTop: 4 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 32, padding: '20px 24px', background: '#f5f5f0', border: '1px solid #e8e8e4' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#9a9a96', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Ideal For</div>
                  <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.65 }}>{lens.ideal}</p>
                </div>
                <div style={{ marginTop: 24 }}>
                  <Link href="/contact" className="btn btn-outline-navy" style={{ padding: '10px 24px', fontSize: '0.8rem' }}
                    id={`lens-enquire-${lens.id}`}>
                    Enquire About This Lens
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fashion Video Section */}
      <section style={{ background: '#0a1628', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Text */}
            <div>
              <span className="section-label">Style in Motion</span>
              <h2 style={{ color: '#fff', marginBottom: 16 }}>See Our Lenses in Action</h2>
              <div style={{ width: 48, height: 2, background: 'linear-gradient(135deg, #1565c0, #0097c7)', marginBottom: 24 }} />
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>
                From bold cat-eye frames to sleek pilots, our progressive lenses are engineered to perform beautifully in every style — delivering clarity without compromise.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 32 }}>
                Every Vizora lens is crafted to complement modern eyewear aesthetics while maintaining the highest optical standards.
              </p>
              <Link href="/contact" className="btn btn-primary" id="lenses-video-enquire">Enquire for Partnership</Link>
            </div>
            {/* Video */}
            <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(184,150,62,0.25)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)', zIndex: 1 }} />
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              >
                <source src="/images/From KlickPin CF which one sunglassesfashion sunglasses fyp unboxing foryou [Video] _ Creative sunglasses Sunglass photoshoot Fashion videos.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Not Sure Which Lens to Choose?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Use our comparison tool to find the right lens for every patient segment.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products/compare" className="btn btn-primary" id="lenses-compare-cta">Compare All Products</Link>
            <Link href="/products/technology" className="btn btn-outline" id="lenses-coating-cta">View Coating Options</Link>
          </div>
        </div>
      </section>
    </>
  );
}
