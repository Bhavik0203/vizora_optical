'use client'
import Link from 'next/link';

export default function ComparePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/products">Products</Link><span>›</span>
            <span style={{ color: '#fff' }}>Compare Products</span>
          </nav>
          <span className="section-label">Product Comparison</span>
          <h1 style={{ marginBottom: 16 }}>Compare Our Products</h1>
          <p>Side-by-side comparison of all Vizora lenses and coatings to help you match the right solution to every patient profile.</p>
        </div>
      </section>

      {/* Lens Comparison */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="section-label">Progressive Series</span>
            <h2>Lens Comparison</h2>
            <div className="divider" />
          </div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ minWidth: 180 }}>Feature</th>
                  <th>V SELECT HD</th>
                  <th>V FLOW HD</th>
                  <th>V ELITE HD</th>
                  <th>V INFINITY 4K</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Tier', a: 'Entry Premium', b: 'Enhanced', c: 'Premium', d: 'Flagship' },
                  { feature: 'Technology', a: 'Standard Digital', b: 'Advanced Digital', c: 'Premium Custom', d: 'Ultra-Premium Digital' },
                  { feature: 'Near Zone Width', a: 'Standard', b: 'Wider', c: 'Wide', d: 'Maximum' },
                  { feature: 'Intermediate Zone', a: 'Standard', b: 'Wider', c: 'Wide', d: 'Maximum' },
                  { feature: 'Peripheral Distortion', a: 'Standard', b: 'Reduced', c: 'Minimal', d: 'Ultra-Minimal' },
                  { feature: 'Adaptation Speed', a: 'Standard', b: 'Faster', c: 'Fast', d: 'Fastest' },
                  { feature: 'Swim Effect', a: 'Standard', b: 'Reduced', c: 'Low', d: 'Minimal' },
                  { feature: 'HD Clarity', a: '✓', b: '✓✓', c: '✓✓✓', d: '✓✓✓✓ (4K)' },
                  { feature: 'Personalization', a: '—', b: '—', c: 'Partial', d: 'Full Precision' },
                  { feature: 'Ideal Segment', a: 'Value / Entry', b: 'Mid-Range', c: 'Premium', d: 'Ultra-Premium' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0a1628', background: '#f5f5f0' }}>{row.feature}</td>
                    <td>{row.a}</td>
                    <td>{row.b}</td>
                    <td>{row.c}</td>
                    <td style={{ fontWeight: 600, color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coating Comparison */}
      <section className="section bg-off-white">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="section-label">Coating Technologies</span>
            <h2>Coating Comparison</h2>
            <div className="divider" />
          </div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ minWidth: 160 }}>Feature</th>
                  <th>AR</th>
                  <th>AR PLUS</th>
                  <th>BLUE PLUS</th>
                  <th>VIZORA DRIVE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Tier', a: 'Standard', b: 'Advanced', c: 'Premium', d: 'Specialized Premium' },
                  { feature: 'Anti-Reflective', a: '✓', b: '✓✓', c: '✓✓', d: '✓✓✓' },
                  { feature: 'Scratch Resistance', a: 'Basic', b: 'Enhanced', c: 'Enhanced', d: 'Enhanced' },
                  { feature: 'Hydrophobic Layer', a: '—', b: '✓', c: '✓', d: '✓' },
                  { feature: 'Oleophobic Layer', a: '—', b: '✓', c: '✓', d: '✓' },
                  { feature: 'Blue Light Filter', a: '—', b: '—', c: '✓', d: '—' },
                  { feature: 'Glare from Headlights', a: 'Basic', b: 'Good', c: 'Good', d: 'Excellent' },
                  { feature: 'Night Driving', a: '—', b: '—', c: '—', d: '✓✓✓' },
                  { feature: 'Color Perception', a: 'Natural', b: 'Natural', c: 'Preserved', d: 'Enhanced Contrast' },
                  { feature: 'Best For', a: 'Everyday Use', b: 'Durability', c: 'Digital Users', d: 'Drivers' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0a1628', background: '#eeeee8' }}>{row.feature}</td>
                    <td>{row.a}</td>
                    <td>{row.b}</td>
                    <td>{row.c}</td>
                    <td style={{ fontWeight: 600, color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Audience Guide */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Recommendation Guide</span>
            <h2>Who Is Each Product For?</h2>
            <div className="divider divider-center" />
            <p style={{ maxWidth: 560, margin: '0 auto' }}>Use this guide to quickly match patient profiles to the right Vizora lens and coating combination.</p>
          </div>
          <div className="grid-2" style={{ gap: 24 }}>
            {[
              { profile: 'First-Time Progressive Wearer', lens: 'V SELECT HD', coating: 'AR or AR PLUS', icon: '◈', desc: 'Patients new to progressive lenses benefit from V SELECT HD\'s stable, easy-to-adapt design. Pair with AR for value or AR PLUS for added durability.' },
              { profile: 'Digital Professional / Office Worker', lens: 'V FLOW HD or V ELITE HD', coating: 'BLUE PLUS', icon: '◉', desc: 'Long hours on screens call for BLUE PLUS coating to reduce eye strain. Pair with V FLOW HD for comfort or V ELITE HD for wider working zones.' },
              { profile: 'Active Daily User', lens: 'V FLOW HD', coating: 'AR PLUS', icon: '◎', desc: 'V FLOW HD\'s wider zones suit active users with varied visual demands. AR PLUS provides smudge resistance and easy cleaning for busy days.' },
              { profile: 'Frequent Driver / Night Driver', lens: 'V ELITE HD or V INFINITY 4K', coating: 'VIZORA DRIVE', icon: '◆', desc: 'VIZORA DRIVE drastically improves night driving safety. Pair with V ELITE or V INFINITY for superior clarity in both day and night conditions.' },
              { profile: 'Premium / Discerning Patient', lens: 'V ELITE HD', coating: 'BLUE PLUS or AR PLUS', icon: '▣', desc: 'Patients seeking premium quality without compromise will appreciate V ELITE HD\'s customized geometry paired with superior coating protection.' },
              { profile: 'Ultra-Premium / High-Demand User', lens: 'V INFINITY 4K', coating: 'VIZORA DRIVE or BLUE PLUS', icon: '◇', desc: 'The ultimate combination — V INFINITY 4K\'s 4K clarity and personalization paired with our most specialized coatings for unmatched visual performance.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, padding: '28px 28px', border: '1px solid #e8e8e4', background: '#fff', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLDivElement).style.background = '#f5f5f0'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLDivElement).style.background = '#fff'; }}
              >
                <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9a9a96', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Patient Profile</div>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: 12 }}>{item.profile}</h4>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{ padding: '3px 10px', background: '#0a1628', color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Lens: {item.lens}</span>
                    <span style={{ padding: '3px 10px', background: '#f5f5f0', border: '1px solid #e8e8e4', color: '#0a1628', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Coating: {item.coating}</span>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: '#4a5568', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Ready to Stock the Vizora Range?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Contact our team for pricing, samples, and partnership opportunities.</p>
          <Link href="/contact" className="btn btn-primary" id="compare-cta">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
