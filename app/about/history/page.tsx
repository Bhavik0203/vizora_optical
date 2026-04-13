'use client'
import Link from 'next/link';

const milestones = [
  { year: 'Foundation', title: 'Vizora Optics Established', desc: 'Founded with a clear vision: to bridge the gap between premium optical quality and accessible pricing for eye care professionals across the United States.' },
  { year: 'Growth', title: 'Building Our Product Portfolio', desc: 'Developed and launched the core V-Series progressive lens lineup — V SELECT HD, V FLOW HD, and V ELITE HD — all built on digitally surfaced technology.' },
  { year: 'Innovation', title: 'Launching Advanced Coatings', desc: 'Introduced our specialized coating range: AR, AR PLUS, BLUE PLUS, and VIZORA DRIVE — addressing the full spectrum of modern lifestyle needs.' },
  { year: 'Expansion', title: 'V INFINITY 4K Unveiled', desc: 'Launched our flagship ultra-premium progressive lens delivering 4K-class visual clarity and maximum field of vision with minimal swim effect.' },
  { year: 'Partnership', title: 'Growing Our Network', desc: 'Expanded our partner network across PA, NJ, and beyond — empowering optical retailers and distributors with premium products and exceptional service.' },
  { year: 'Today', title: 'Setting the Standard', desc: 'Vizora Optics continues to evolve — investing in R&D, strengthening our supply chain, and deepening our commitment to partner success.' },
];

export default function HistoryPage() {
  return (
    <>
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">The Vizora Story</span>
              <h2 style={{ marginBottom: 16 }}>Built on a Foundation of Precision</h2>
              <div className="divider" />
              <p style={{ marginBottom: 16 }}>
                Vizora Optics was born from a deep understanding of what optical professionals truly need —
                premium quality products, dependable service, and a partner who shares their commitment to
                customer satisfaction.
              </p>
              <p style={{ marginBottom: 16 }}>
                From our offices in Pittsburgh, PA and Wood Ridge, NJ, we have built a brand that stands for
                consistency, innovation, and integrity in every lens delivered.
              </p>
              <p>
                Our story is one of careful growth — expanding our product portfolio, deepening manufacturing
                partnerships, and continuously raising the bar on what optical professionals can expect from
                their lens supplier.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Core Values', value: 'Precision, Innovation, Reliability' },
                { label: 'Headquarters', value: 'Pittsburgh, PA 15288' },
                { label: 'Communication Office', value: 'Wood Ridge, NJ 07075' },
                { label: 'Specialty', value: 'Premium Ophthalmic Lenses & Coatings' },
                { label: 'Focus', value: 'Eye Care Professionals & Distributors' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 0, borderBottom: '1px solid #e8e8e4', paddingBottom: 16 }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.08em', textTransform: 'uppercase', minWidth: 200 }}>{item.label}</span>
                  <span style={{ fontSize: '0.88rem', color: '#4a5568' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Timeline</span>
            <h2>Key Milestones</h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#e8e8e4', transform: 'translateX(-50%)' }} />
            {milestones.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                gap: 48, marginBottom: 48, position: 'relative', alignItems: 'flex-start',
              }}>
                <div style={{ flex: 1, padding: i % 2 === 0 ? '0 40px 0 0' : '0 0 0 40px' }}>
                  <div style={{ background: '#fff', border: '1px solid #e8e8e4', padding: '28px 28px', transition: 'all 0.2s' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{m.year}</div>
                    <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 10, fontSize: '1rem' }}>{m.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div style={{
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
