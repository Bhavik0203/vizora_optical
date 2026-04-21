'use client'
import Link from 'next/link';
import GetToKnowUs from '../components/GetToKnowUs';

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
      <section style={{ background: '#071020', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <span style={{ color: '#fff' }}>About Us</span>
          </nav>
          <span style={{ 
            background: 'linear-gradient(135deg, #1565c0, #0097c7)', 
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: 16
          }}>Company</span>
          <h1 style={{ marginBottom: 16, color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700 }}>About Vizora Optics</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.6 }}>
            Committed to delivering high-quality optical solutions designed to meet the evolving needs
            of modern eye care professionals and their customers.
          </p>
        </div>
      </section>
           <GetToKnowUs/>
      {/* Sub-page navigation */}
      <section style={{ background: '#0a1628', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {subPages.map((p) => (
              <Link key={p.href} href={p.href} 
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 12, 
                  padding: '28px 24px', 
                  background: 'rgba(10, 22, 40, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '16px',
                  transition: 'all 0.25s',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)'
                }}
                id={`about-nav-${p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`}
                onMouseEnter={(e) => { 
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(21, 101, 192, 0.4)'; 
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(21, 101, 192, 0.15)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => { 
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'; 
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(10, 22, 40, 0.6)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1.5rem', color: '#fff' }}>{p.icon}</span>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>{p.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{p.desc}</p>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ background: '#071020', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 64, alignItems: 'center' }}>
            <div>
              <span style={{ 
                background: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
                color: 'transparent',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: 16
              }}>Who We Are</span>
              <h2 style={{ marginBottom: 16, color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700 }}>Precision-Engineered for the Modern Eye</h2>
              <div style={{ width: 60, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)', marginBottom: 24 }} />
              <p style={{ marginBottom: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                At Vizora Optics, we are committed to delivering high-quality optical solutions designed to meet
                the evolving needs of modern eye care professionals and their customers. With a strong focus on
                precision, innovation, and reliability, we specialize in providing premium ophthalmic lenses
                that combine advanced technology with exceptional visual performance.
              </p>
              <p style={{ marginBottom: 32, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Our product range includes a variety of lens designs, from everyday single vision lenses to
                advanced progressive lenses, all crafted to ensure clarity, comfort, and durability. We work
                closely with trusted manufacturing partners to maintain consistent quality standards and deliver
                products that meet international benchmarks.
              </p>
              <Link href="/about/mission" 
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #1565c0, #0097c7)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                id="about-mission-link"
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(21, 101, 192, 0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
              >Our Mission & Values</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { title: 'Customer-First Approach', desc: 'Every decision we make is guided by what best serves our partners and their customers.' },
                { title: 'Continuous Improvement', desc: 'We constantly evolve our products, processes, and partnerships to deliver better outcomes.' },
                { title: 'International Excellence', desc: 'Global manufacturing partnerships ensuring consistent quality and adherence to international standards.' },
                { title: 'Competitive Value', desc: 'Premium quality with optimized pricing that supports our partners\' profitability and growth.' },
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  gap: 16, 
                  padding: '20px 24px', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  background: 'rgba(10, 22, 40, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  transition: 'all 0.3s'
                }}>
                  <div style={{ 
                    width: 40, 
                    height: 40, 
                    background: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexShrink: 0,
                    borderRadius: '8px'
                  }}>
                    <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>0{i + 1}</span>
                  </div>
                  <div>
                    <h5 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: 4, color: '#fff' }}>{item.title}</h5>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1628', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Large VIZORA text background */}
        <div style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(80px, 16vw, 180px)',
          fontWeight: 900,
          fontFamily: 'Poppins, sans-serif',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(21, 101, 192, 0.3)',
          letterSpacing: '0.05em',
          lineHeight: 0.85,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          userSelect: 'none'
        }}>
          VIZORA
        </div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: 16, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700 }}>Ready to Partner with Vizora Optics?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Join our growing network of trusted optical retailers and distributors.</p>
          <Link href="/contact" 
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #1565c0, #0097c7)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            id="about-cta-contact"
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(21, 101, 192, 0.3)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
          >Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
