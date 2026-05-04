'use client'
import Link from 'next/link';
import ServicesShowcase from '@/app/components/ServicesShowcase';
import CoreValues from '@/app/components/CoreValues';
import AboutSection from '@/app/components/aboutvisionmission';

const values = [
  { icon: '◈', title: 'Precision', desc: 'Every lens we design and deliver meets the highest standards of optical clarity and accuracy. We do not compromise on quality.' },
  { icon: '◉', title: 'Innovation', desc: 'We continuously invest in next-generation lens technologies to stay ahead of the evolving needs of eye care professionals.' },
  { icon: '◎', title: 'Reliability', desc: 'Our partners trust us for consistent product quality, dependable logistics, and responsive support - every single time.' },
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
    
    

      <AboutSection/>

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
