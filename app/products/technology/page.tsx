'use client'
import Link from 'next/link';

const coatings = [
  {
    id: 'ar-coating',
    name: 'AR Coating',
    subtitle: 'Anti-Reflective',
    level: 'Standard',
    bestFor: 'Everyday Use',
    icon: '◈',
    desc: 'Multi-layer anti-reflective coating designed to minimize surface reflections and maximize light transmission through the lens.',
    technology: 'Multi-layer anti-reflective coating designed to minimize surface reflections and maximize light transmission through the lens.',
    benefits: [
      'Enhances lens transparency for a cleaner look',
      'Provides basic scratch resistance',
      'Reduces eye strain from reflected light',
      'Improves lens aesthetics — less glare visible to others',
    ],
  },
  {
    id: 'ar-plus',
    name: 'AR PLUS Coating',
    subtitle: 'Enhanced Anti-Reflective',
    level: 'Advanced',
    bestFor: 'Durability & Easy Maintenance',
    icon: '◉',
    desc: 'Advanced multi-layer coating with added hydrophobic and oleophobic layers, improving durability and cleanliness.',
    technology: 'Advanced multi-layer coating with added hydrophobic and oleophobic layers over the base AR stack, improving durability and cleanliness.',
    benefits: [
      'Superior glare reduction compared to standard AR',
      'Water, dust, and smudge resistance',
      'Easier cleaning and maintenance',
      'Improved durability and longer coating life',
    ],
  },
  {
    id: 'blue-plus',
    name: 'BLUE PLUS Coating',
    subtitle: 'Blue Light Protection + AR',
    level: 'Premium',
    bestFor: 'Digital Lifestyle Users',
    icon: '◎',
    desc: 'Selective blue light filtering coating combined with anti-reflective layers, designed to reduce exposure to harmful high-energy visible (HEV) light.',
    technology: 'Selective blue light filtering coating combined with anti-reflective layers, designed to reduce exposure to harmful high-energy visible (HEV) light from digital screens.',
    benefits: [
      'Reduces digital eye strain and fatigue',
      'Filters harmful blue light from screens',
      'Maintains natural color perception',
      'Improves contrast and visual comfort',
      'Anti-glare benefits for prolonged screen use',
    ],
  },
  {
    id: 'vizora-drive',
    name: 'VIZORA DRIVE Coating',
    subtitle: 'Premium Driving Coating',
    level: 'Specialized Premium',
    bestFor: 'Driving & Night Vision',
    icon: '◆',
    desc: 'Specialized anti-reflective coating optimized for low-light and night driving conditions, with enhanced contrast and glare control.',
    technology: 'Specialized anti-reflective coating optimized for low-light and night driving conditions, featuring enhanced contrast layers and precision glare control optics.',
    benefits: [
      'Reduces glare from headlights and streetlights',
      'Enhances contrast in low-light environments',
      'Improves night driving comfort and safety',
      'Minimizes halo and starburst effects',
      'Provides sharper and more stable vision while driving',
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/products">Products</Link><span>›</span>
            <span style={{ color: '#fff' }}>Technology</span>
          </nav>
          <span className="section-label">Coating Technologies</span>
          <h1 style={{ marginBottom: 16 }}>Advanced Lens Coatings</h1>
          <p>Four specialized coating technologies engineered to address every modern visual lifestyle — from everyday clarity to premium driving performance.</p>
        </div>
      </section>

      {/* Tier Overview */}
      <section className="section-sm bg-off-white">
        <style>{`
          /* Mobile Styles for Tier Overview */
          @media (max-width: 768px) {
            .tier-overview-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 8px !important;
            }
            
            .tier-card {
              padding: 16px !important;
            }
            
            .tier-card span:first-child {
              font-size: 1.1rem !important;
            }
            
            .tier-card h5 {
              font-size: 0.8rem !important;
            }
            
            .tier-card > div:nth-child(3) {
              font-size: 0.7rem !important;
            }
            
            .tier-card > div:last-child {
              font-size: 0.7rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .tier-overview-grid {
              grid-template-columns: 1fr !important;
              gap: 4px !important;
            }
            
            .tier-card {
              padding: 12px !important;
            }
          }
        `}</style>
        <div className="container">
          <div className="tier-overview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
            {coatings.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="tier-card" style={{
                display: 'flex', flexDirection: 'column', gap: 8,
                padding: '20px 24px', background: '#fff', border: '1px solid #e8e8e4',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor='linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLAnchorElement).style.background='#f5f5f0'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor='#e8e8e4'; (e.currentTarget as HTMLAnchorElement).style.background='#fff'; }}
              >
                <span style={{ fontSize: '1.3rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{c.icon}</span>
                <h5 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '0.88rem', color: '#0a1628' }}>{c.name}</h5>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#9a9a96', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.level}</div>
                <div style={{ fontSize: '0.75rem', color: '#4a5568' }}>Best for: {c.bestFor}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coating Details */}
      <section className="section bg-white">
        <style>{`
          /* Mobile Styles for Coating Details */
          @media (max-width: 768px) {
            .coating-header {
              padding: 24px 20px !important;
              flex-direction: column !important;
              gap: 16px !important;
              text-align: center !important;
            }
            
            .coating-header span:first-child {
              font-size: 1.5rem !important;
            }
            
            .coating-header h3 {
              font-size: 1.3rem !important;
              margin-bottom: 8px !important;
            }
            
            .coating-header p {
              font-size: 0.85rem !important;
              max-width: none !important;
            }
            
            .coating-header > div:last-child {
              text-align: center !important;
            }
            
            .coating-details {
              grid-template-columns: 1fr !important;
            }
            
            .coating-details > div {
              padding: 24px 20px !important;
            }
            
            .coating-details > div:first-child {
              border-right: none !important;
              border-bottom: 1px solid #e8e8e4 !important;
            }
          }
          
          @media (max-width: 480px) {
            .coating-header {
              padding: 20px 16px !important;
            }
            
            .coating-header h3 {
              font-size: 1.2rem !important;
            }
            
            .coating-header p {
              font-size: 0.8rem !important;
            }
            
            .coating-details > div {
              padding: 20px 16px !important;
            }
          }
        `}</style>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {coatings.map((c) => (
            <div key={c.id} id={c.id} style={{ border: '1px solid #e8e8e4', overflow: 'hidden' }}>
              <div className="coating-header" style={{ background: '#0a1628', padding: '32px 40px', display: 'flex', alignItems: 'flex-start', gap: 24, borderLeft: '4px solid linear-gradient(135deg, #1565c0, #0097c7)' }}>
                <span style={{ fontSize: '2rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{c.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', lineHeight: 1.2 }}>{c.name}</h3>
                    <span style={{ background: 'linear-gradient(135deg, #1565c0, #0097c7)', color: '#0a1628', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 10px' }}>{c.level}</span>
                  </div>
                  <p style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{c.subtitle}</p>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 680 }}>{c.desc}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Ideal For</div>
                  <div style={{ fontSize: '0.85rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontWeight: 600 }}>{c.bestFor}</div>
                </div>
              </div>
              <div className="coating-details" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                <div style={{ padding: '32px 40px', borderRight: '1px solid #e8e8e4' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Technology</div>
                  <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.75 }}>{c.technology}</p>
                </div>
                <div style={{ padding: '32px 40px' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Benefits</div>
                  <ul className="feature-list">
                    {c.benefits.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tier Table */}
      <section className="section bg-off-white comparison-section">
        <style>{`
          /* Mobile Styles for Tier Comparison Table */
          @media (max-width: 768px) {
            .comparison-section .container {
              padding: 0 16px !important;
            }
            
            .comparison-section .text-center {
              margin-bottom: 32px !important;
            }
            
            .comparison-section .data-table {
              font-size: 0.8rem !important;
            }
            
            .comparison-section .data-table th,
            .comparison-section .data-table td {
              padding: 12px 8px !important;
            }
            
            .comparison-section .data-table th:first-child,
            .comparison-section .data-table td:first-child {
              padding-left: 12px !important;
            }
            
            .comparison-section .data-table th:last-child,
            .comparison-section .data-table td:last-child {
              padding-right: 12px !important;
            }
          }
          
          @media (max-width: 480px) {
            .comparison-section .text-center {
              margin-bottom: 24px !important;
            }
            
            .comparison-section .data-table {
              font-size: 0.75rem !important;
            }
            
            .comparison-section .data-table th,
            .comparison-section .data-table td {
              padding: 8px 4px !important;
            }
            
            .comparison-section .data-table th:first-child,
            .comparison-section .data-table td:first-child {
              padding-left: 8px !important;
            }
            
            .comparison-section .data-table th:last-child,
            .comparison-section .data-table td:last-child {
              padding-right: 8px !important;
            }
          }
        `}</style>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Tier Positioning</span>
            <h2>Coating Comparison at a Glance</h2>
            <div className="divider divider-center" />
          </div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Coating</th>
                  <th>Level</th>
                  <th>Best For</th>
                  <th>Glare Reduction</th>
                  <th>Scratch Resistance</th>
                  <th>Blue Light Filter</th>
                  <th>Hydrophobic</th>
                  <th>Night Driving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'AR', level: 'Standard', best: 'Everyday Use', glare: '✓', scratch: '✓', blue: '—', hydro: '—', night: '—' },
                  { name: 'AR PLUS', level: 'Advanced', best: 'Durability & Maintenance', glare: '✓✓', scratch: '✓✓', blue: '—', hydro: '✓', night: '—' },
                  { name: 'BLUE PLUS', level: 'Premium', best: 'Digital Lifestyle', glare: '✓✓', scratch: '✓', blue: '✓', hydro: '✓', night: '—' },
                  { name: 'VIZORA DRIVE', level: 'Specialized Premium', best: 'Driving & Night Vision', glare: '✓✓✓', scratch: '✓✓', blue: '—', hydro: '✓', night: '✓✓✓' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0a1628' }}>{row.name}</td>
                    <td>{row.level}</td>
                    <td>{row.best}</td>
                    <td style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontWeight: 700 }}>{row.glare}</td>
                    <td style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontWeight: 700 }}>{row.scratch}</td>
                    <td style={{ color: row.blue === '✓' ? 'linear-gradient(135deg, #1565c0, #0097c7)' : '#ccc', fontWeight: 700 }}>{row.blue}</td>
                    <td style={{ color: row.hydro === '✓' ? 'linear-gradient(135deg, #1565c0, #0097c7)' : '#ccc', fontWeight: 700 }}>{row.hydro}</td>
                    <td style={{ color: row.night !== '—' ? 'linear-gradient(135deg, #1565c0, #0097c7)' : '#ccc', fontWeight: 700 }}>{row.night}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Find the Right Coating for Your Customers</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Our sales team can help you pair the right coating with the perfect lens for any patient profile.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products/compare" className="btn btn-primary" id="tech-compare-link">Compare Full Range</Link>
            <Link href="/contact" className="btn btn-outline" id="tech-contact-link">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
