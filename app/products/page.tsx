'use client'
import Link from 'next/link';
import './products.css';

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
          <div className="product-cards-grid">
            {[
              {
                icon: '◈', 
                title: 'Optical Lenses', 
                href: '/products/lenses',
                desc: 'Our full progressive lens series - V SELECT HD, V FLOW HD, V ELITE HD, and V INFINITY 4K - engineered for every segment from value to ultra-premium.',
                items: ['V SELECT HD', 'V FLOW HD', 'V ELITE HD', 'V INFINITY 4K'],
              },
              {
                icon: '◉', 
                title: 'Coating Technologies', 
                href: '/products/technology',
                desc: 'Four advanced coating solutions addressing everyday clarity, durability, digital lifestyle protection, and premium driving performance.',
                items: ['AR Coating', 'AR PLUS Coating', 'BLUE PLUS Coating', 'VIZORA DRIVE Coating'],
              },
              {
                icon: '◎', 
                title: 'Compare Products', 
                href: '/products/compare',
                desc: 'Side-by-side comparison of all Vizora lens series and coatings to help you recommend the right solution for every customer.',
                items: ['Lens Comparison', 'Coating Comparison', 'Target Audience Guide'],
              },
            ].map((cat, index) => (
              <Link 
                key={cat.href} 
                href={cat.href} 
                className="product-category-card"
                data-number={`0${index + 1}`}
                id={`products-${cat.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`}
              >
                <div className="card-icon">{cat.icon}</div>
                <h3 className="card-title">{cat.title}</h3>
                <p className="card-description">{cat.desc}</p>
                
                <ul className="features-list">
                  {cat.items.map((item, i) => (
                    <li key={i} className="feature-item">
                      {item}
                    </li>
                  ))}
                </ul>
                
                <span className="explore-text">Explore</span>
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
