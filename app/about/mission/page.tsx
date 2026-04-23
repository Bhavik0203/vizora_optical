'use client'
import Link from 'next/link';
import ServicesShowcase from '@/app/components/ServicesShowcase';
import CoreValues from '@/app/components/CoreValues';

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
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', color: '#fff', textTransform: 'uppercase' }}>Our Mission</span>
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

      

            <CoreValues />
      <ServicesShowcase />

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
