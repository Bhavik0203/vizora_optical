'use client'
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: '#fff' }}>Products</span>
          </nav>
          <span className="section-label">Our Portfolio</span>
          <h1 style={{ marginBottom: 16 }}>Vision Solutions</h1>
          <p>A complete portfolio of premium ophthalmic lenses and advanced coating technologies for every visual need.</p>
        </div>
      </section>

      {/* Product Category Cards */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              {
                icon: '◈', title: 'Optical Lenses', href: '/products/lenses',
                desc: 'Our full progressive lens series — V SELECT HD, V FLOW HD, V ELITE HD, and V INFINITY 4K — engineered for every segment from value to ultra-premium.',
                items: ['V SELECT HD', 'V FLOW HD', 'V ELITE HD', 'V INFINITY 4K'],
              },
              {
                icon: '◉', title: 'Coating Technologies', href: '/products/technology',
                desc: 'Four advanced coating solutions addressing everyday clarity, durability, digital lifestyle protection, and premium driving performance.',
                items: ['AR Coating', 'AR PLUS Coating', 'BLUE PLUS Coating', 'VIZORA DRIVE Coating'],
              },
              {
                icon: '◎', title: 'Compare Products', href: '/products/compare',
                desc: 'Side-by-side comparison of all Vizora lens series and coatings to help you recommend the right solution for every customer.',
                items: ['Lens Comparison', 'Coating Comparison', 'Target Audience Guide'],
              },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 0, background: '#fff', border: '1px solid #e8e8e4', transition: 'all 0.25s', overflow: 'hidden', position: 'relative' }}
                id={`products-${cat.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = ''; (e.currentTarget as HTMLAnchorElement).style.transform = ''; }}
              >
                <div style={{ width: '100%', height: 4, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                <div style={{ padding: '36px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ fontSize: '1.8rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)' }}>{cat.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: 4 }}>{cat.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.75 }}>{cat.desc}</p>
                  <ul className="feature-list" style={{ marginTop: 8 }}>
                    {cat.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <div style={{ marginTop: 'auto', paddingTop: 20 }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Need Help Choosing the Right Product?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Our team is ready to help you find the perfect lens and coating combination for your customers.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products/compare" className="btn btn-primary" id="products-compare-link">Compare Products</Link>
            <Link href="/contact" className="btn btn-outline" id="products-contact-link">Contact Sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
