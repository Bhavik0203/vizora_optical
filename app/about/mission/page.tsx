'use client'
import Link from 'next/link';

const values = [
  { icon: '◈', title: 'Precision', desc: 'Every lens we design and deliver meets the highest standards of optical clarity and accuracy. We do not compromise on quality.' },
  { icon: '◉', title: 'Innovation', desc: 'We continuously invest in next-generation lens technologies to stay ahead of the evolving needs of eye care professionals.' },
  { icon: '◎', title: 'Reliability', desc: 'Our partners trust us for consistent product quality, dependable logistics, and responsive support — every single time.' },
  { icon: '◆', title: 'Partnership', desc: 'We build lasting relationships by prioritizing our partners\' success through competitive pricing, support, and shared growth.' },
  { icon: '▣', title: 'Excellence', desc: 'We hold ourselves to global quality benchmarks, working with carefully selected international manufacturing partners.' },
  { icon: '◇', title: 'Integrity', desc: 'Transparent communication, honest pricing, and accountability define how we operate with every stakeholder.' },
];

export default function MissionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/about">About Us</Link><span>›</span>
            <span style={{ color: '#fff' }}>Mission & Values</span>
          </nav>
          <span className="section-label">Who We Are</span>
          <h1 style={{ marginBottom: 16 }}>Mission & Values</h1>
          <p>The principles that guide every decision, every product, and every partnership at Vizora Optics.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 48 }}>
            <div style={{ background: '#0a1628', padding: '48px 40px', borderLeft: '4px solid linear-gradient(135deg, #1565c0, #0097c7)' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', color: 'linear-gradient(135deg, #1565c0, #0097c7)', textTransform: 'uppercase' }}>Our Mission</span>
              <h2 style={{ color: '#fff', marginTop: 12, marginBottom: 20, fontSize: '1.8rem' }}>Empowering Eye Care Through Precision</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
                At Vizora Optics, our mission is to empower optical retailers and distributors with superior,
                precision-engineered lens solutions that enhance customer satisfaction and drive business growth.
                We are committed to combining advanced technology with dependable service and competitive value.
              </p>
            </div>
            <div style={{ background: '#f5f5f0', padding: '48px 40px', borderLeft: '4px solid #e8e8e4' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', color: 'linear-gradient(135deg, #1565c0, #0097c7)', textTransform: 'uppercase' }}>Our Vision</span>
              <h2 style={{ color: '#0a1628', marginTop: 12, marginBottom: 20, fontSize: '1.8rem' }}>A Trusted Name in Optical Excellence</h2>
              <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
                With a customer-first approach and a commitment to continuous improvement, Vizora Optics aims
                to become a globally recognized trusted name in the optical industry — known for precision,
                partnership, and unwavering dedication to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Core Values</span>
            <h2>What We Stand For</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ position: 'relative', paddingTop: 40 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                <div style={{ fontSize: '1.8rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', marginBottom: 16 }}>{v.icon}</div>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 12 }}>{v.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Pillars */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Our Commitment</span>
            <h2>What Sets Us Apart</h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { num: '01', title: 'Exceptional Optical Precision', desc: 'We deliver lenses engineered for superior visual clarity, precision, and all-day comfort — meeting the expectations of today\'s discerning customers.' },
              { num: '02', title: 'Advanced Lens Design & Innovation', desc: 'Our portfolio features next-generation lens technologies, including digitally surfaced and high-performance progressive designs.' },
              { num: '03', title: 'Premium Quality with Strategic Value', desc: 'We combine world-class quality standards with optimized pricing, enabling our partners to offer premium products while maintaining strong profitability.' },
              { num: '04', title: 'Global Expertise, Consistent Excellence', desc: 'Through carefully selected international manufacturing partnerships, we ensure consistent quality, reliability, and adherence to global optical standards.' },
              { num: '05', title: 'Seamless & Efficient Supply Chain', desc: 'Our streamlined logistics and fulfillment processes are designed to deliver speed, reliability, and consistency — supporting uninterrupted business operations.' },
              { num: '06', title: 'Partnership-Driven Approach', desc: 'At Vizora Optics, we go beyond supply — we build long-term partnerships through dedicated support, responsiveness, and a shared commitment to growth.' },
            ].map((item) => (
              <div key={item.num} style={{ display: 'flex', gap: 32, padding: '28px 32px', border: '1px solid #e8e8e4', borderBottom: 'none', alignItems: 'flex-start', background: '#fff', transition: 'background 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#f5f5f0'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#fff'; }}
              >
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#e8e8e4', minWidth: 56 }}>{item.num}</span>
                <div>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ border: '1px solid #e8e8e4', height: 1 }} />
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Experience the Vizora Difference</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Partner with us and discover what premium ophthalmic solutions truly means.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products/lenses" className="btn btn-primary" id="mission-products-link">View Our Products</Link>
            <Link href="/contact" className="btn btn-outline" id="mission-contact-link">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
