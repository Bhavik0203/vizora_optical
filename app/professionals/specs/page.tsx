'use client'
import Link from 'next/link';

const specSections = [
  {
    title: 'Progressive Lens Specifications',
    items: [
      { name: 'V SELECT HD', type: 'Standard Digital Progressive', add: '+0.75 to +3.50', material: 'Optical-grade polymer', index: '1.50 / 1.56 / 1.60 / 1.67', diameter: '70mm round', treatment: 'AR, AR PLUS, BLUE PLUS' },
      { name: 'V FLOW HD', type: 'Advanced Digital Progressive', add: '+0.75 to +3.50', material: 'Optical-grade polymer', index: '1.50 / 1.56 / 1.60 / 1.67', diameter: '70mm round', treatment: 'AR, AR PLUS, BLUE PLUS, VIZORA DRIVE' },
      { name: 'V ELITE HD', type: 'Premium Customized Progressive', add: '+0.75 to +3.50', material: 'Optical-grade polymer', index: '1.56 / 1.60 / 1.67 / 1.74', diameter: '70mm round', treatment: 'All coatings' },
      { name: 'V INFINITY 4K', type: 'Ultra-Premium Digital Progressive', add: '+0.75 to +3.50', material: 'Premium optical polymer', index: '1.60 / 1.67 / 1.74', diameter: '70mm round', treatment: 'All coatings' },
    ],
  },
];

const coatingSpecs = [
  { name: 'AR Coating', layers: 'Multi-layer AR stack', hardcoat: '✓ Basic', hydrophobic: '—', oleophobic: '—', blueFilter: '—', reflectance: '<1.5%', transmittance: '>99%' },
  { name: 'AR PLUS Coating', layers: 'Enhanced multi-layer + hydrophobic top layer', hardcoat: '✓ Enhanced', hydrophobic: '✓', oleophobic: '✓', blueFilter: '—', reflectance: '<1.0%', transmittance: '>99.2%' },
  { name: 'BLUE PLUS Coating', layers: 'Blue-blocking + AR layers', hardcoat: '✓ Enhanced', hydrophobic: '✓', oleophobic: '✓', blueFilter: '✓ HEV 380–440nm', reflectance: '<1.2%', transmittance: '>99%' },
  { name: 'VIZORA DRIVE Coating', layers: 'Specialized low-light AR stack', hardcoat: '✓ Enhanced', hydrophobic: '✓', oleophobic: '✓', blueFilter: '—', reflectance: '<0.8%', transmittance: '>99.5%' },
];

export default function SpecsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/professionals">Professionals</Link><span>›</span>
            <span style={{ color: '#fff' }}>Specs & Docs</span>
          </nav>
          <span className="section-label">Technical Documentation</span>
          <h1 style={{ marginBottom: 16 }}>Specs & Docs</h1>
          <p>Technical specifications and product documentation for the full Vizora Optics range.</p>
        </div>
      </section>

      {/* Lens Specs */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="section-label">Progressive Lenses</span>
            <h2>Lens Specifications</h2>
            <div className="divider" />
          </div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Type</th>
                  <th>Addition Range</th>
                  <th>Refractive Index Options</th>
                  <th>Diameter</th>
                  <th>Compatible Coatings</th>
                </tr>
              </thead>
              <tbody>
                {specSections[0].items.map((item, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0a1628' }}>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.add}</td>
                    <td>{item.index}</td>
                    <td>{item.diameter}</td>
                    <td style={{ color: '#4a5568' }}>{item.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coating Specs */}
      <section className="section bg-off-white">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="section-label">Coatings</span>
            <h2>Coating Specifications</h2>
            <div className="divider" />
          </div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Coating</th>
                  <th>Layer Construction</th>
                  <th>Hardcoat</th>
                  <th>Hydrophobic</th>
                  <th>Oleophobic</th>
                  <th>Blue Filter</th>
                  <th>Reflectance</th>
                  <th>Transmittance</th>
                </tr>
              </thead>
              <tbody>
                {coatingSpecs.map((c, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0a1628' }}>{c.name}</td>
                    <td style={{ fontSize: '0.8rem' }}>{c.layers}</td>
                    <td>{c.hardcoat}</td>
                    <td style={{ color: c.hydrophobic === '✓' ? 'linear-gradient(135deg, #1565c0, #0097c7)' : '#ccc', fontWeight: 700 }}>{c.hydrophobic}</td>
                    <td style={{ color: c.oleophobic === '✓' ? 'linear-gradient(135deg, #1565c0, #0097c7)' : '#ccc', fontWeight: 700 }}>{c.oleophobic}</td>
                    <td style={{ color: c.blueFilter !== '—' ? 'linear-gradient(135deg, #1565c0, #0097c7)' : '#ccc', fontWeight: 600, fontSize: '0.8rem' }}>{c.blueFilter}</td>
                    <td style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontWeight: 700 }}>{c.reflectance}</td>
                    <td style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontWeight: 700 }}>{c.transmittance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Documentation</span>
            <h2>Technical Downloads</h2>
            <div className="divider divider-center" />
            <p style={{ maxWidth: 520, margin: '0 auto' }}>Contact our team to request the full technical documentation package for your practice.</p>
          </div>
          <div className="grid-4" style={{ gap: 20 }}>
            {[
              { icon: '◈', title: 'Lens Data Sheets', desc: 'Full technical data sheets for all progressive lens models.' },
              { icon: '◉', title: 'Coating Spec Sheets', desc: 'Detailed specifications for all four coating technologies.' },
              { icon: '◎', title: 'Product Brochures', desc: 'Printable and digital brochures for the full product range.' },
              { icon: '◆', title: 'Clinical Studies', desc: 'Available clinical evidence and performance data on request.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '28px 24px', border: '1px solid #e8e8e4', background: '#f5f5f0', display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', paddingTop: 36 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{item.icon}</span>
                <h5 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>{item.title}</h5>
                <p style={{ fontSize: '0.82rem', color: '#4a5568', lineHeight: 1.65 }}>{item.desc}</p>
                <Link href="/contact" style={{ fontSize: '0.72rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 'auto' }}>
                  Request →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Need Full Technical Documentation?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Contact our sales team to receive the complete technical package for all Vizora products.</p>
          <Link href="/contact" className="btn btn-primary" id="specs-contact-cta">Request Documentation</Link>
        </div>
      </section>
    </>
  );
}
