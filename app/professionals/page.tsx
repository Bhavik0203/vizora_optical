'use client'
import Link from 'next/link';

export default function ProfessionalsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: '#fff' }}>Professionals</span>
          </nav>
          <span className="section-label">For ECP & Opticians</span>
          <h1 style={{ marginBottom: 16 }}>Professional Centre</h1>
          <p>Dedicated resources, technical specifications, and training support for eye care professionals and optical retailers.</p>
        </div>
      </section>

      {/* Sub-pages grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              {
                icon: '◈', title: 'Resources', href: '/professionals/resources',
                desc: 'Guides, brochures, and resources specifically designed to support eye care professionals in recommending and fitting Vizora lenses.',
                items: ['Clinical guides', 'Patient recommendation tools', 'Marketing materials'],
              },
              {
                icon: '◉', title: 'Specs & Docs', href: '/professionals/specs',
                desc: 'Technical specifications, product data sheets, and documentation for all Vizora lens and coating products.',
                items: ['Lens design specs', 'Coating spec sheets', 'Technical brochures'],
              },
              {
                icon: '◎', title: 'Training', href: '/professionals/training',
                desc: 'Training materials and support to help your team understand, recommend, and fit Vizora lenses with confidence.',
                items: ['Product training guides', 'Fitting consultation support', 'Practice support'],
              },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none', background: '#fff', border: '1px solid #e8e8e4', overflow: 'hidden', transition: 'all 0.25s', display: 'flex', flexDirection: 'column' }}
                id={`prof-${cat.title.toLowerCase()}`}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = ''; (e.currentTarget as HTMLAnchorElement).style.transform = ''; }}
              >
                <div style={{ height: 4, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                <div style={{ padding: '36px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <span style={{ fontSize: '1.8rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem' }}>{cat.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.75 }}>{cat.desc}</p>
                  <ul className="feature-list">
                    {cat.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <div style={{ marginTop: 'auto', paddingTop: 20 }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Access →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Vizora</span>
              <h2 style={{ marginBottom: 16 }}>Built for Eye Care Professionals</h2>
              <div className="divider" />
              <p style={{ marginBottom: 20 }}>
                At Vizora Optics, we understand the demands placed on optical professionals every day.
                That is why our work goes beyond manufacturing — we provide comprehensive support
                to help you grow your practice and serve your patients better.
              </p>
              <p>
                From technical documentation to clinical guidance, our professional centre is designed
                to give you everything you need to confidently recommend, fit, and dispense Vizora lenses.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '◈', title: 'Comprehensive Documentation', desc: 'Full technical specifications, fitting guides, and product data for every lens and coating in our range.' },
                { icon: '◉', title: 'Practice Support', desc: 'Dedicated support for your practice including consultation tools and patient communication materials.' },
                { icon: '◎', title: 'Training & Education', desc: 'Structured training materials to help your team master the Vizora product range.' },
                { icon: '◆', title: 'Direct Sales Support', desc: 'Access to our team for personalised guidance on product selection and patient recommendations.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, padding: '18px 20px', background: '#fff', border: '1px solid #e8e8e4' }}>
                  <span style={{ fontSize: '1.2rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <h5 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{item.title}</h5>
                    <p style={{ fontSize: '0.82rem', color: '#4a5568', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Need Professional Support?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Our team is ready to provide technical guidance and practice support for your optical business.</p>
          <Link href="/contact" className="btn btn-primary" id="professionals-cta">Contact Our Team</Link>
        </div>
      </section>
    </>
  );
}
