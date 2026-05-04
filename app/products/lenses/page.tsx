'use client'
import Link from 'next/link';
import './lenses.css';
import ProductStyle from '@/app/components/product-style';

// Mobile responsive styles for fashion video section
const FashionVideoStyles = () => (
  <style>{`
    /* Mobile Styles for Fashion Video Section */
    @media (max-width: 768px) {
      .fashion-video-section {
        padding: 60px 0 !important;
      }
      
      .fashion-video-section .container {
        padding: 0 16px !important;
      }
      
      .fashion-video-section .video-grid {
        grid-template-columns: 1fr !important;
        gap: 32px !important;
      }
      
      .fashion-video-section .video-content {
        text-align: center !important;
      }
      
      .fashion-video-section .video-content h2 {
        font-size: 1.8rem !important;
        margin-bottom: 12px !important;
      }
      
      .fashion-video-section .video-content p {
        font-size: 0.9rem !important;
        line-height: 1.6 !important;
        margin-bottom: 16px !important;
      }
      
      .fashion-video-section .video-content p:last-of-type {
        font-size: 0.85rem !important;
        margin-bottom: 24px !important;
      }
      
      .fashion-video-section .video-wrapper video {
        height: 280px !important;
      }
    }
    
    @media (max-width: 480px) {
      .fashion-video-section {
        padding: 40px 0 !important;
      }
      
      .fashion-video-section .video-grid {
        gap: 24px !important;
      }
      
      .fashion-video-section .video-content h2 {
        font-size: 1.6rem !important;
      }
      
      .fashion-video-section .video-content p {
        font-size: 0.85rem !important;
      }
      
      .fashion-video-section .video-content p:last-of-type {
        font-size: 0.8rem !important;
      }
      
      .fashion-video-section .video-wrapper video {
        height: 220px !important;
      }
    }
  `}</style>
);

const lenses = [
  {
    id: 'v-select-hd',
    name: 'V SELECT HD',
    type: 'Standard Digital Progressive',
    tag: 'Entry Premium',
    tagColor: '#3a3a36',
    positioning: 'Reliable performance with excellent value',
    desc: 'Designed for everyday comfort and easy adaptation, the V SELECT HD delivers clear vision across all distances for patients new to progressive lenses.',
    features: [
      'Clear vision across all distances',
      'Stable and comfortable design',
      'Easy adaptation for new wearers',
      'Digitally surfaced precision',
    ],
    ideal: 'First-time progressive wearers, everyday use, value-conscious segment',
  },
  {
    id: 'v-flow-hd',
    name: 'V FLOW HD',
    type: 'Advanced Digital Progressive',
    tag: 'Enhanced',
    tagColor: '#1c3460',
    positioning: 'Balanced performance with enhanced comfort',
    desc: 'Enhanced design for wider vision zones and smoother transitions. V FLOW HD delivers improved comfort for patients with active daily lifestyles.',
    features: [
      'Wider intermediate and near zones',
      'Reduced peripheral distortion',
      'Improved visual comfort for daily use',
      'Smooth zone transitions',
    ],
    ideal: 'Active daily users, intermediate-heavy tasks, longer screen time',
  },
  {
    id: 'v-elite-hd',
    name: 'V ELITE HD',
    type: 'Premium Customized Progressive',
    tag: 'Premium',
    tagColor: '#0a1628',
    positioning: 'Premium experience with maximum visual performance',
    desc: 'High-performance lens tailored for superior visual precision. V ELITE HD provides wider fields with minimal distortion for the discerning wearer.',
    features: [
      'Wider fields of vision with minimal distortion',
      'Faster adaptation and superior clarity',
      'Customized lens geometry',
      'Premium optical performance',
    ],
    ideal: 'Discerning patients, premium segment, high prescription values',
  },
  {
    id: 'v-infinity-4k',
    name: 'V INFINITY 4K',
    type: 'Ultra-Premium Digital Progressive',
    tag: 'Flagship',
    tagColor: 'linear-gradient(135deg, #1565c0, #0097c7)',
    tagTextColor: '#0a1628',
    positioning: 'Flagship lens offering unmatched clarity and performance',
    desc: 'Our most advanced lens, delivering ultra HD "4K" visual clarity with maximum field of vision and precision-engineered personalized viewing comfort.',
    features: [
      'Ultra high-definition "4K" visual clarity',
      'Maximum field of vision with minimal swim effect',
      'Precision-engineered for personalized viewing comfort',
      'Ideal for high-demand users and premium segment',
    ],
    ideal: 'Ultra-premium segment, high-demand users, patients requiring maximum performance',
  },
];

export default function LensesPage() {
  return (
    <>
      <FashionVideoStyles />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/products">Products</Link><span>›</span>
            <span style={{ color: '#fff' }}>Optical Lenses</span>
          </nav>
          <span className="section-label">Progressive Lens Series</span>
          <h1 style={{ marginBottom: 16 }}>Optical Lenses</h1>
          <p>Four premium progressive lens designs engineered for every segment - from everyday reliability to ultra-premium 4K clarity.</p>
        </div>
      </section>

      {/* Series overview */}
      <section className="section-sm bg-off-white">
        <div className="container">
          <div className="lens-grid">
            {lenses.map((lens, index) => (
              <Link
                key={lens.id}
                href={`#${lens.id}`}
                className="lens-card"
              >
                <div className="lens-number">0{index + 1}</div>
                <div className="lens-card-content">
                  <div className="lens-category">Progressive</div>
                  <h5 className="lens-name">{lens.name}</h5>
                  <p className="lens-type">{lens.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

     
      {/* ── Wear Your Shape ── */}
      <section style={{ background: '#0a1628', padding: '72px 0 80px' }}>
        <style>{`
          .shape-card { display: flex; flex-direction: column; align-items: center; gap: 0px; cursor: default; }
          .shape-icon-wrap {
            display: flex; align-items: center; justify-content: center;
            transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
          }
          .shape-card:hover .shape-icon-wrap { transform: scale(1.32); }
          .shape-icon-wrap img {
            display: block;
            transition: transform 0.3s ease;
          }
          .shape-card:hover .shape-icon-wrap img { transform: scale(1.1); }
        `}</style>
        <div className="container">
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <h2 style={{
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}>
              Lens Types
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.55)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}>
              Advanced optical solutions for every vision need
            </p>
          </div>

          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(24px, 5vw, 72px)',
            flexWrap: 'wrap',
          }}>
            {[
              { src: '/images/1.png', label: 'Converging', size: 130 },
              { src: '/images/2.png', label: 'Diverging', size: 130 },
              { src: '/images/3.png', label: 'Cylindrical Lens', size: 130 },
              { src: '/images/4.png', label: 'Aspherical Lens', size: 130 },
              { src: '/images/5.png', label: 'Fresnel Lens', size: 130 },
            ].map((shape) => (
              <div key={shape.label} className="shape-card">
                <div className="shape-icon-wrap">
                  <img
                    src={shape.src}
                    alt={shape.label}
                    width={shape.size}
                    height={shape.size}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  {shape.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
            <ProductStyle/>

      {/* Individual lens cards */}
      {/* <section className="section bg-white">
        <div className="lens-cards-container">
          {lenses.map((lens, index) => (
            <div key={lens.id} id={lens.id} className={`lens-detail-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}>
           
              <div className="lens-info-panel">
                <div className="lens-tag" style={{ background: lens.tagColor || '#0a1628', color: lens.tagTextColor || '#fff' }}>
                  {lens.tag}
                </div>
                <h2 className="lens-title">{lens.name}</h2>
                <p className="lens-type-text">{lens.type}</p>
                <div className="lens-divider"></div>
                <p className="lens-description">{lens.desc}</p>
                <div className="lens-positioning">
                  <div className="positioning-label">Positioning</div>
                  <p className="positioning-text">{lens.positioning}</p>
                </div>
              </div>

              <div className="lens-features-panel">
                <div className="features-header">
                  <span className="features-title">Key Features</span>
                  <div className="features-underline"></div>
                </div>
                <ul className="features-list">
                  {lens.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                      <div className="feature-icon">
                        <div className="feature-dot"></div>
                      </div>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="ideal-section">
                  <div className="ideal-label">Ideal For</div>
                  <p className="ideal-text">{lens.ideal}</p>
                </div>
                <div className="lens-cta">
                  <Link href="/contact" className="btn btn-outline-navy lens-enquire-btn" id={`lens-enquire-${lens.id}`}>
                    Enquire About This Lens
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Fashion Video Section */}
      <section className="fashion-video-section" style={{ background: '#0a1628', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Text */}
            <div className="video-content">
              <span className="section-label">Style in Motion</span>
              <h2 style={{ color: '#fff', marginBottom: 16 }}>See Our Lenses in Action</h2>
              <div style={{ width: 48, height: 2, background: 'linear-gradient(135deg, #1565c0, #0097c7)', marginBottom: 24 }} />
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>
                From bold cat-eye frames to sleek pilots, our progressive lenses are engineered to perform beautifully in every style - delivering clarity without compromise.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 32 }}>
                Every Vizora lens is crafted to complement modern eyewear aesthetics while maintaining the highest optical standards.
              </p>
              <Link href="/contact" className="btn btn-primary" id="lenses-video-enquire">Enquire for Partnership</Link>
            </div>
            {/* Video */}
            <div className="video-wrapper" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(184,150,62,0.25)' }}>
              {/* <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #1565c0, #0097c7)', zIndex: 1 }} /> */}
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              >
                <source src="/images/browncolorlens.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Not Sure Which Lens to Choose?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Use our comparison tool to find the right lens for every patient segment.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products/compare" className="btn btn-primary" id="lenses-compare-cta">Compare All Products</Link>
            <Link href="/products/technology" className="btn btn-outline" id="lenses-coating-cta">View Coating Options</Link>
          </div>
        </div>
      </section>
    </>
  );
}
