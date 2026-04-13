'use client'
import Link from 'next/link';

const pressItems = [
  { date: 'Q1 2025', category: 'Product Launch', title: 'Vizora Optics Introduces V INFINITY 4K — Setting a New Standard in Progressive Lens Design', summary: 'Vizora Optics announces the launch of its flagship ultra-premium progressive lens, the V INFINITY 4K, delivering 4K-class visual clarity with precision personalization.' },
  { date: 'Q4 2024', category: 'Technology', title: 'VIZORA DRIVE Coating Wins Recognition for Night Vision Enhancement Technology', summary: 'Our specialized driving coating garners industry attention for its advanced glare reduction and low-light contrast enhancement capabilities.' },
  { date: 'Q3 2024', category: 'Expansion', title: 'Vizora Optics Expands NJ Communication Hub at Wood Ridge', summary: 'Strengthening our East Coast presence, Vizora Optics formalizes its New Jersey communication office to better serve growing partner network.' },
  { date: 'Q2 2024', category: 'Partnership', title: 'Partnership Programme Extended to Premium Optical Retailers Across PA & NJ', summary: 'Vizora Optics grows its partner network with new agreements spanning Pennsylvania and New Jersey markets.' },
];

export default function MediaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/about">About Us</Link><span>›</span>
            <span style={{ color: '#fff' }}>Media & Press</span>
          </nav>
          <span className="section-label">Press Room</span>
          <h1 style={{ marginBottom: 16 }}>Media & Press</h1>
          <p>Official news, press releases, and media resources from Vizora Optics.</p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <span className="section-label">Press Releases</span>
              <h2>Latest News</h2>
              <div className="divider" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {pressItems.map((item, i) => (
              <div key={i} style={{ padding: '32px 36px', border: '1px solid #e8e8e4', background: '#fff', transition: 'all 0.2s', borderBottom: 'none', display: 'flex', gap: 32, alignItems: 'flex-start' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#f5f5f0'; (e.currentTarget as HTMLDivElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#fff'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e8e8e4'; }}
              >
                <div style={{ minWidth: 100, textAlign: 'right' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.date}</div>
                  <div style={{ fontSize: '0.68rem', color: '#9a9a96', marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.category}</div>
                </div>
                <div style={{ width: 2, background: '#e8e8e4', alignSelf: 'stretch', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 10, lineHeight: 1.4 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.86rem', color: '#4a5568', lineHeight: 1.7 }}>{item.summary}</p>
                </div>
              </div>
            ))}
            <div style={{ border: '1px solid #e8e8e4', height: 1 }} />
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Resources</span>
            <h2>Brand Assets & Media Kit</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              { icon: '◈', title: 'Brand Guidelines', desc: 'Logo usage, color palette, typography, and brand voice guidelines for media use.' },
              { icon: '◉', title: 'Product Images', desc: 'High-resolution product photography and lens imagery for editorial use.' },
              { icon: '◎', title: 'Company Fact Sheet', desc: 'Key statistics, overview, and background information about Vizora Optics.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', paddingTop: 40, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                <div style={{ fontSize: '1.8rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', marginBottom: 16 }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 12 }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.7, marginBottom: 20 }}>{item.desc}</p>
                <Link href="/contact" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Request Access →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Press Enquiries</span>
              <h2 style={{ marginBottom: 16 }}>Media Contact</h2>
              <div className="divider" />
              <p style={{ marginBottom: 24 }}>
                For press enquiries, interview requests, or media resources, please contact our team directly.
                We aim to respond to all media enquiries within 24 hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ padding: '20px 24px', background: '#f5f5f0', border: '1px solid #e8e8e4' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>Email</div>
                  <a href="mailto:vizoraoptics@gmail.com" style={{ fontSize: '0.95rem', color: '#0a1628', fontWeight: 600, textDecoration: 'none' }}>Vizoraoptics@gmail.com</a>
                </div>
                <div style={{ padding: '20px 24px', background: '#f5f5f0', border: '1px solid #e8e8e4' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>Sales Enquiries</div>
                  <a href="mailto:sales@vizoraoptics.com" style={{ fontSize: '0.95rem', color: '#0a1628', fontWeight: 600, textDecoration: 'none' }}>Sales@vizoraoptics.com</a>
                </div>
              </div>
            </div>
            <div style={{ background: '#0a1628', padding: '48px 40px', borderLeft: '4px solid linear-gradient(135deg, #1565c0, #0097c7)' }}>
              <h3 style={{ color: '#fff', marginBottom: 16, fontSize: '1.4rem' }}>About Vizora Optics</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 24, fontSize: '0.9rem' }}>
                Vizora Optics is a premium ophthalmic lens brand committed to delivering precision-engineered
                optical solutions for eye care professionals. Operating from Pittsburgh, PA and Wood Ridge, NJ,
                Vizora Optics offers a comprehensive range of progressive lenses and advanced coating
                technologies designed for the modern visual lifestyle.
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Headquarters</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>307 Fieldbrook Dr, Pittsburgh, PA 15288</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
