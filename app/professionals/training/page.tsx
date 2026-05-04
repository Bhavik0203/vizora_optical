'use client'
import Link from 'next/link';
import { Key, Package, Users, Headphones, BookOpen, Eye, Stethoscope, MonitorPlay, CheckCircle } from 'lucide-react';

const modules = [
  {
    num: '01',
    title: 'Introduction to Vizora Optics',
    desc: 'An overview of the Vizora brand, product philosophy, and what makes our lenses different from conventional offerings.',
    topics: ['Brand values and positioning', 'Product range overview', 'V-Series lens hierarchy', 'How to position Vizora vs. competitors'],
    duration: 'Approx. 30 mins',
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    color: '#1565c0'
  },
  {
    num: '02',
    title: 'Progressive Lens Fundamentals',
    desc: 'A technical introduction to progressive lens design and how to understand and communicate lens performance to patients.',
    topics: ['How progressive lenses work', 'Zone design and width explained', 'Understanding swim effect and adaptation', 'Reading prescription for progressive fitting'],
    duration: 'Approx. 45 mins',
    icon: <Eye size={24} strokeWidth={1.5} />,
    color: '#0097c7'
  },
  {
    num: '03',
    title: 'Vizora Lens Range In Depth',
    desc: 'Detailed product training on each lens in the V-Series, covering design features, target segments, and dispensing tips.',
    topics: ['V SELECT HD fitting and benefits', 'V FLOW HD advanced features', 'V ELITE HD customization overview', 'V INFINITY 4K the 4K difference'],
    duration: 'Approx. 60 mins',
    icon: <Stethoscope size={24} strokeWidth={1.5} />,
    color: '#1565c0'
  },
  {
    num: '04',
    title: 'Coating Technologies Training',
    desc: 'Understanding and communicating the value of Vizora\'s four coating technologies to optimize upsell and patient satisfaction.',
    topics: ['AR vs AR PLUS differences', 'BLUE PLUS who needs it and why', 'VIZORA DRIVE the driving safety story', 'Coating recommendation by patient profile'],
    duration: 'Approx. 45 mins',
    icon: <MonitorPlay size={24} strokeWidth={1.5} />,
    color: '#0097c7'
  },
  {
    num: '05',
    title: 'Patient Consultation & Recommendation',
    desc: 'Best practice consultation techniques for matching patients to the right Vizora lens and coating based on their lifestyle.',
    topics: ['Lifestyle needs assessment', 'Recommendation scripts', 'Handling patient objections', 'Presenting value and premium options'],
    duration: 'Approx. 40 mins',
    icon: <Users size={24} strokeWidth={1.5} />,
    color: '#1565c0'
  },
  {
    num: '06',
    title: 'Dispensing & Follow-Up',
    desc: 'Practical guidance on dispensing Vizora progressive lenses including adaptation management and follow-up support.',
    topics: ['Pre-dispensing checks', 'Adaptation period management', 'Follow-up consultation protocols', 'Patient satisfaction and remakes'],
    duration: 'Approx. 30 mins',
    icon: <CheckCircle size={24} strokeWidth={1.5} />,
    color: '#0097c7'
  },
];

export default function TrainingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/professionals">Professionals</Link><span>›</span>
            <span style={{ color: '#fff' }}>Training</span>
          </nav>
          <span className="section-label">Professional Training</span>
          <h1 style={{ marginBottom: 16 }}>Training & Education</h1>
          <p>Structured training modules to help your team confidently understand, recommend, and fit every Vizora product.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-sm bg-off-white overview-section">
        <style>{`
          /* Mobile Styles for Overview Section */
          @media (max-width: 768px) {
            .overview-section .container {
              padding: 0 16px !important;
            }
            
            .overview-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
            }
            
            .overview-stat {
              padding: 20px 16px !important;
            }
            
            .overview-stat > div:first-child {
              font-size: 1.8rem !important;
              margin-bottom: 6px !important;
            }
            
            .overview-stat > div:last-child {
              font-size: 0.7rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .overview-grid {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }
            
            .overview-stat {
              padding: 16px 12px !important;
            }
            
            .overview-stat > div:first-child {
              font-size: 1.6rem !important;
            }
            
            .overview-stat > div:last-child {
              font-size: 0.65rem !important;
            }
          }
        `}</style>
        <div className="container">
          <div className="overview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
            {[
              { value: '6', label: 'Training Modules' },
              { value: '4+', label: 'Hours of Content' },
              { value: 'Free', label: 'For Partners' },
              { value: '100%', label: 'Product Coverage' },
            ].map((s, i) => (
              <div key={i} className="overview-stat" style={{ padding: '28px 20px', background: '#fff', border: '1px solid #e8e8e4' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9a9a96', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="section bg-white training-modules-section">
        <style>{`
          /* Mobile Styles for Training Modules */
          @media (max-width: 768px) {
            .training-modules-section .container {
              padding: 0 16px !important;
            }
            
            .training-modules-section .text-center {
              margin-bottom: 32px !important;
            }
            
            .training-modules-section .text-center p {
              font-size: 0.9rem !important;
            }
            
            .training-module {
              grid-template-columns: 80px 1fr !important;
              gap: 0 !important;
            }
            
            .training-module > div:first-child {
              padding: 20px 0 !important;
            }
            
            .training-module > div:first-child div:first-child {
              font-size: 1.8rem !important;
              margin-bottom: 6px !important;
            }
            
            .training-module > div:first-child span {
              font-size: 1.1rem !important;
            }
            
            .training-module > div:nth-child(2) {
              padding: 20px 20px !important;
            }
            
            .training-module > div:nth-child(2) h4 {
              font-size: 1rem !important;
              margin-bottom: 6px !important;
            }
            
            .training-module > div:nth-child(2) p {
              font-size: 0.85rem !important;
              margin-bottom: 12px !important;
            }
            
            .training-module > div:nth-child(2) > div {
              gap: 6px !important;
            }
            
            .training-module > div:nth-child(2) > div span {
              font-size: 0.7rem !important;
              padding: 4px 8px !important;
            }
            
            .training-module > div:last-child {
              display: none !important;
            }
          }
          
          @media (max-width: 480px) {
            .training-modules-section .text-center {
              margin-bottom: 24px !important;
            }
            
            .training-modules-section .text-center p {
              font-size: 0.85rem !important;
            }
            
            .training-module {
              grid-template-columns: 70px 1fr !important;
            }
            
            .training-module > div:first-child {
              padding: 16px 0 !important;
            }
            
            .training-module > div:first-child div:first-child {
              font-size: 1.5rem !important;
            }
            
            .training-module > div:first-child span {
              font-size: 1rem !important;
            }
            
            .training-module > div:nth-child(2) {
              padding: 16px 16px !important;
            }
            
            .training-module > div:nth-child(2) h4 {
              font-size: 0.9rem !important;
            }
            
            .training-module > div:nth-child(2) p {
              font-size: 0.8rem !important;
              margin-bottom: 10px !important;
            }
            
            .training-module > div:nth-child(2) > div span {
              font-size: 0.65rem !important;
              padding: 3px 6px !important;
            }
          }
        `}</style>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Training Programme</span>
            <h2>Training Modules</h2>
            <div className="divider divider-center" />
            <p style={{ maxWidth: 540, margin: '0 auto' }}>Our structured training programme takes your team from product knowledge through to confident patient consultation.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {modules.map((m, i) => (
              <div key={i} className="training-module" style={{
                display: 'grid', gridTemplateColumns: '100px 1fr 140px', gap: 0,
                border: '1px solid #e8e8e4', borderBottom: 'none', overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                background: '#ffffff'
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = m.color;
                  el.style.boxShadow = `0 8px 32px ${m.color}20`;
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = '#e8e8e4';
                  el.style.boxShadow = '';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Animated progress bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '3px',
                  background: m.color,
                  transform: 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }} 
                className="progress-bar"
                />
                
                {/* Icon and Number */}
                <div style={{ 
                  background: `linear-gradient(135deg, ${m.color}15, ${m.color}05)`,
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '24px 0',
                  position: 'relative',
                  borderRight: `1px solid #e8e8e4` 
                }}>
                  <div style={{
                    color: m.color,
                    marginBottom: '8px',
                    transition: 'transform 0.3s ease'
                  }}
                  className="module-icon"
                  >
                    {m.icon}
                  </div>
                  <span style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    color: m.color,
                    transition: 'all 0.3s ease'
                  }}
                  className="module-number"
                  >
                    {m.num}
                  </span>
                </div>
                
                {/* Content */}
                <div style={{ padding: '28px 32px' }}>
                  <h4 style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 700, 
                    fontSize: '1.1rem', 
                    marginBottom: 8,
                    color: '#0a1628',
                    transition: 'color 0.3s ease'
                  }}
                  className="module-title"
                  >
                    {m.title}
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#64748b', 
                    lineHeight: 1.65, 
                    marginBottom: 16 
                  }}>
                    {m.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {m.topics.map((t, ti) => (
                      <span key={ti} style={{ 
                        padding: '6px 12px', 
                        background: `${m.color}08`,
                        border: `1px solid ${m.color}20`,
                        fontSize: '0.75rem', 
                        fontWeight: 600, 
                        color: '#475569', 
                        letterSpacing: '0.04em',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease'
                      }}
                      className="topic-tag"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Duration */}
                <div style={{ 
                  padding: '24px 28px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  background: `linear-gradient(135deg, ${m.color}08, transparent)`,
                  minWidth: 140,
                  borderLeft: `1px solid #e8e8e4` 
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: 700, 
                      color: '#94a3b8', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase', 
                      marginBottom: 6 
                    }}>
                      Duration
                    </div>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 700, 
                      color: m.color,
                      transition: 'all 0.3s ease'
                    }}
                    className="duration-text"
                    >
                      {m.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ border: '1px solid #e8e8e4', height: 1 }} />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">Practice Support</span>
              <h2 style={{ marginBottom: 16 }}>Training Delivered Your Way</h2>
              <div className="divider" />
              <p style={{ marginBottom: 20 }}>
                We understand that optical practices run on tight schedules. That is why Vizora training
                is designed to be flexible, practical, and immediately applicable giving your team the
                knowledge they need without disrupting your daily operations.
              </p>
              <ul className="feature-list" style={{ marginBottom: 32 }}>
                <li>On-request digital training materials</li>
                <li>Printable quick-reference cards for dispensing staff</li>
                <li>Direct sales team support for in-practice briefings</li>
                <li>Patient consultation scripts and recommendation guides</li>
                <li>Ongoing support as new products are launched</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" id="training-access-cta">Request Training Access</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { num: '01', title: 'Request Access', desc: 'Contact our team to enrol your practice in the Vizora professional training programme.', icon: <Key size={20} strokeWidth={1.5} /> },
                { num: '02', title: 'Receive Materials', desc: 'Get your full training pack digital modules, quick-reference cards, and consultation guides.', icon: <Package size={20} strokeWidth={1.5} /> },
                { num: '03', title: 'Train Your Team', desc: 'Work through the training modules at your own pace, or schedule a briefing with our sales team.', icon: <Users size={20} strokeWidth={1.5} /> },
                { num: '04', title: 'Ongoing Support', desc: 'Access continued support as you stock, recommend, and fit Vizora products.', icon: <Headphones size={20} strokeWidth={1.5} /> },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, padding: '18px 20px', background: '#fff', border: '1px solid #e8e8e4', transition: 'all 0.3s ease' }}>
                  <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #1565c0, #0097c7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: '8px' }}>
                    <div style={{ color: '#ffffff' }}>
                      {s.icon}
                    </div>
                  </div>
                  <div>
                    <h5 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{s.title}</h5>
                    <p style={{ fontSize: '0.82rem', color: '#4a5568', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Get Your Practice Trained Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Contact our professional support team to access the complete Vizora training programme.</p>
          <Link href="/contact" className="btn btn-primary" id="training-final-cta">Contact Our Team</Link>
        </div>
      </section>
    </>
  );
}
