'use client'
import Link from 'next/link';

export default function InnovationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/about">About Us</Link><span>›</span>
            <span style={{ color: '#fff' }}>Innovation & R&D</span>
          </nav>
          <span className="section-label">Technology</span>
          <h1 style={{ marginBottom: 16 }}>Innovation & R&D</h1>
          <p>Pushing the boundaries of ophthalmic lens technology through continuous research and engineering excellence.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Approach</span>
              <h2 style={{ marginBottom: 16 }}>Engineering the Future of Vision</h2>
              <div className="divider" />
              <p style={{ marginBottom: 20 }}>
                At Vizora Optics, innovation is not an afterthought — it is embedded in every step of our
                product development process. From conceptualization to final delivery, we leverage the latest
                advancements in digital surfacing, optical design, and coating technology.
              </p>
              <p style={{ marginBottom: 20 }}>
                Our R&D efforts are focused on identifying the real-world challenges faced by lens wearers and
                designing solutions that address them directly — whether it is reducing digital eye strain,
                improving night driving visibility, or maximizing progressive lens adaptation.
              </p>
              <p>
                Through selective partnerships with world-class manufacturers, we translate cutting-edge optical
                research into practical, deliverable products that set new performance standards.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '◈', title: 'Digital Surfacing Technology', desc: 'All Vizora progressive lenses are manufactured using advanced digital surfacing processes that deliver mathematically precise lens geometries for superior optical performance.' },
                { icon: '◉', title: 'High-Energy HEV Filtration', desc: 'Our BLUE PLUS coating uses selective wavelength filtration to reduce exposure to harmful high-energy visible blue light without compromising colour perception.' },
                { icon: '◎', title: 'Night Driving Optimization', desc: 'VIZORA DRIVE coating incorporates specialized anti-reflective layers engineered specifically for low-light and high-glare driving conditions.' },
                { icon: '◆', title: '4K Visual Clarity', desc: 'V INFINITY 4K represents our most advanced progressive design — engineered for ultra-high-definition clarity with a precision-personalized approach.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, padding: '20px 24px', border: '1px solid #e8e8e4', background: '#f5f5f0' }}>
                  <span style={{ fontSize: '1.4rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <h5 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.92rem', marginBottom: 6 }}>{item.title}</h5>
                    <p style={{ fontSize: '0.82rem', color: '#4a5568', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Development Process</span>
            <h2>How We Build Better Lenses</h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2, position: 'relative' }}>
            {[
              { step: '01', title: 'Research', desc: 'Identify real user needs and emerging optical science trends.' },
              { step: '02', title: 'Design', desc: 'Develop lens geometries and coating formulas using advanced simulation.' },
              { step: '03', title: 'Prototype', desc: 'Manufacture and test prototype lenses under rigorous optical standards.' },
              { step: '04', title: 'Validate', desc: 'Clinical and field validation with eye care professionals.' },
              { step: '05', title: 'Deliver', desc: 'Refined product released through our quality-controlled supply chain.' },
            ].map((s, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? '#0a1628' : '#12233f', padding: '36px 24px', textAlign: 'center', position: 'relative' }}>
                {i < 4 && (
                  <div style={{ position: 'absolute', right: -1, top: '50%', transform: 'translateY(-50%)', width: 12, height: 12, border: '2px solid linear-gradient(135deg, #1565c0, #0097c7)', borderLeft: 'none', borderBottom: 'none', rotate: '45deg', zIndex: 2, background: i % 2 === 0 ? '#0a1628' : '#12233f' }} />
                )}
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', lineHeight: 1, marginBottom: 12 }}>{s.step}</div>
                <h5 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 10 }}>{s.title}</h5>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Key Technologies</span>
            <h2>Innovations in Our Portfolio</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              { title: 'Digital Progressive Design', desc: 'All progressive lenses in the Vizora range use digitally surfaced designs to ensure maximum zone width, minimal swim effect, and fast adaptation.', link: '/products/lenses' },
              { title: 'Multi-Layer AR Technology', desc: 'Our AR and AR PLUS coatings feature advanced multi-layer anti-reflective stacks that dramatically reduce surface reflections and increase light transmission.', link: '/products/technology' },
              { title: 'Selective Blue Light Filtration', desc: 'BLUE PLUS uses precisely calibrated wavelength filtration to block harmful HEV blue light while preserving natural colour balance.', link: '/products/technology' },
              { title: 'Hydrophobic & Oleophobic Layers', desc: 'AR PLUS coating incorporates hydrophobic and oleophobic top layers for superior water, dust, and smudge resistance and extended lens lifespan.', link: '/products/technology' },
              { title: 'Low-Light Contrast Enhancement', desc: 'VIZORA DRIVE is engineered with special contrast-enhancing properties that improve clarity and sharpness in low-light driving conditions.', link: '/products/technology' },
              { title: 'Precision Personalization', desc: 'Our flagship V INFINITY 4K lens supports personalized parameters for a truly custom visual experience tailored to each wearer.', link: '/products/lenses' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ position: 'relative', paddingTop: 40 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)' }} />
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, marginBottom: 12, fontSize: '0.95rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.75, marginBottom: 16 }}>{item.desc}</p>
                <Link href={item.link} style={{ fontSize: '0.78rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>See Our Technology in Action</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Explore our full product range and discover the engineering behind every Vizora lens.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products/technology" className="btn btn-primary" id="innovation-tech-link">Coating Technologies</Link>
            <Link href="/products/lenses" className="btn btn-outline" id="innovation-lenses-link">View Lenses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
