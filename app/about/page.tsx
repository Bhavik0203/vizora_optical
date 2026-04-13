'use client'
import Link from 'next/link';

const subPages = [
  { title: 'Mission & Values', href: '/about/mission', icon: '◈', desc: 'Our guiding principles and core values that drive everything we do.' },
  { title: 'Our History', href: '/about/history', icon: '◉', desc: 'The journey that shaped Vizora Optics into a trusted optical solutions provider.' },
  { title: 'Innovation & R&D', href: '/about/innovation', icon: '◎', desc: 'Our commitment to advancing lens technology and optical science.' },
  { title: 'Media & Press', href: '/about/media', icon: '◆', desc: 'Latest news, press releases, and media resources for journalists.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span style={{ color: '#fff' }}>About Us</span>
          </nav>
          <span className="section-label">Company</span>
          <h1 style={{ marginBottom: 16 }}>About Vizora Optics</h1>
          <p>
            Committed to delivering high-quality optical solutions designed to meet the evolving needs
            of modern eye care professionals and their customers.
          </p>
        </div>
      </section>

      {/* Sub-page navigation */}
      <section className="section-sm bg-off-white">
        <div className="container">
          <div className="grid-4">
            {subPages.map((p) => (
              <Link key={p.href} href={p.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: '28px 24px', background: '#fff', border: '1px solid #e8e8e4', transition: 'all 0.25s' }}
                id={`about-nav-${p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = ''; }}
              >
                <span style={{ fontSize: '1.5rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{p.icon}</span>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700 }}>{p.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#4a5568', lineHeight: 1.6 }}>{p.desc}</p>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Who We Are</span>
              <h2 style={{ marginBottom: 16 }}>Precision-Engineered for the Modern Eye</h2>
              <div className="divider" />
              <p style={{ marginBottom: 20 }}>
                At Vizora Optics, we are committed to delivering high-quality optical solutions designed to meet
                the evolving needs of modern eye care professionals and their customers. With a strong focus on
                precision, innovation, and reliability, we specialize in providing premium ophthalmic lenses
                that combine advanced technology with exceptional visual performance.
              </p>
              <p style={{ marginBottom: 32 }}>
                Our product range includes a variety of lens designs, from everyday single vision lenses to
                advanced progressive lenses, all crafted to ensure clarity, comfort, and durability. We work
                closely with trusted manufacturing partners to maintain consistent quality standards and deliver
                products that meet international benchmarks.
              </p>
              <Link href="/about/mission" className="btn btn-primary" id="about-mission-link">Our Mission & Values</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { title: 'Customer-First Approach', desc: 'Every decision we make is guided by what best serves our partners and their customers.' },
                { title: 'Continuous Improvement', desc: 'We constantly evolve our products, processes, and partnerships to deliver better outcomes.' },
                { title: 'International Excellence', desc: 'Global manufacturing partnerships ensuring consistent quality and adherence to international standards.' },
                { title: 'Competitive Value', desc: 'Premium quality with optimized pricing that supports our partners\' profitability and growth.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, padding: '20px 24px', border: '1px solid #e8e8e4', background: '#f5f5f0' }}>
                  <div style={{ width: 40, height: 40, background: '#0a1628', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontSize: '0.85rem', fontWeight: 700 }}>0{i + 1}</span>
                  </div>
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

      {/* CTA */}
      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Ready to Partner with Vizora Optics?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Join our growing network of trusted optical retailers and distributors.</p>
          <Link href="/contact" className="btn btn-primary" id="about-cta-contact">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
