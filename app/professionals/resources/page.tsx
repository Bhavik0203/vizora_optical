'use client'
import Link from 'next/link';

const resources = [
  {
    category: 'Clinical Guides',
    icon: '◈',
    items: [
      { title: 'Progressive Lens Fitting Guide', desc: 'Step-by-step guidance for measuring and fitting patients for progressive lenses, including key measurements and fitting height recommendations.' },
      { title: 'Patient Adaptation Guide', desc: 'How to prepare patients for the adaptation period with Vizora progressive lenses, including tips to minimize discomfort and maximize satisfaction.' },
      { title: 'Lens Selection by Prescription Guide', desc: 'Practical guide for selecting the appropriate Vizora lens based on prescription strength, addition power, and patient lifestyle.' },
    ],
  },
  {
    category: 'Patient Recommendation Tools',
    icon: '◉',
    items: [
      { title: 'Lifestyle Assessment Questionnaire', desc: 'A structured questionnaire to help identify the ideal lens and coating combination based on each patient\'s daily activities and visual needs.' },
      { title: 'Lens Benefits Comparison Card', desc: 'A concise, patient-friendly comparison of all Vizora lens options — designed for chairside use during consultations.' },
      { title: 'Coating Benefits Explainer', desc: 'A simple visual guide explaining each coating\'s benefits in plain language — ideal for helping patients understand and justify their coating upgrade.' },
    ],
  },
  {
    category: 'Marketing Materials',
    icon: '◎',
    items: [
      { title: 'Vizora Product Brochure', desc: 'A comprehensive printed and digital brochure detailing the full Vizora Optics product range, for use in-practice and during sales consultations.' },
      { title: 'Counter Display Materials', desc: 'In-practice display assets including lens comparison charts, brand materials, and product feature cards.' },
      { title: 'Digital Assets Pack', desc: 'High-resolution product images, logos, and digital marketing materials for use on your website and social media.' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/professionals">Professionals</Link><span>›</span>
            <span style={{ color: '#fff' }}>Resources</span>
          </nav>
          <span className="section-label">Professional Resources</span>
          <h1 style={{ marginBottom: 16 }}>Resources & Guides</h1>
          <p>Comprehensive clinical guides, patient tools, and marketing materials to support your optical practice.</p>
        </div>
      </section>

      {/* Resource categories */}
      <section className="section bg-white">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {resources.map((cat, ci) => (
            <div key={ci}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, paddingBottom: 16, borderBottom: '1px solid #e8e8e4' }}>
                <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{cat.icon}</span>
                <div>
                  <span className="section-label" style={{ margin: 0 }}>{cat.category}</span>
                </div>
              </div>
              <div className="grid-3" style={{ gap: 20 }}>
                {cat.items.map((item, ii) => (
                  <div key={ii} style={{ padding: '28px 28px', border: '1px solid #e8e8e4', background: '#fff', position: 'relative', transition: 'all 0.2s', paddingTop: 36 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                    <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: 10 }}>{item.title}</h4>
                    <p style={{ fontSize: '0.84rem', color: '#4a5568', lineHeight: 1.72, marginBottom: 20 }}>{item.desc}</p>
                    <Link href="/contact" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
                      Request Access →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Access CTA */}
      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Access the Full Resource Library</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Contact our team to receive the complete set of professional resources for your practice.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" id="resources-contact-cta">Request Resources</Link>
            <Link href="/professionals/specs" className="btn btn-outline" id="resources-specs-link">View Specs & Docs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
