'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, Eye, Stethoscope, 
  ClipboardList, CheckSquare, MessageCircle, 
  MonitorPlay, Briefcase, Download, ArrowRight
} from 'lucide-react';

const resources = [
  {
    category: 'Clinical Guides',
    icon: <Stethoscope size={48} strokeWidth={1} />,
    desc: 'Expert-curated protocols and measurement guides to ensure perfect lens fitting and adaptation.',
    items: [
      { title: 'Progressive Lens Fitting Guide', desc: 'Step-by-step guidance for measuring and fitting patients for progressive lenses, including key measurements and fitting height recommendations.' },
      { title: 'Patient Adaptation Guide', desc: 'How to prepare patients for the adaptation period with Vizora progressive lenses, including tips to minimize discomfort and maximize satisfaction.' },
      { title: 'Lens Selection by Prescription', desc: 'Practical guide for selecting the appropriate Vizora lens based on prescription strength, addition power, and patient lifestyle.' },
    ],
    bg: 'red-200'
  },
  {
    category: 'Patient Tools',
    icon: <MessageCircle size={48} strokeWidth={1} />,
    desc: 'Interactive tools and comparison charts designed for effective chairside consultations.',
    items: [
      { title: 'Lifestyle Assessment', desc: 'A structured questionnaire to help identify the ideal lens and coating combination based on each patient\'s daily activities and visual needs.' },
      { title: 'Lens Benefits Comparison', desc: 'A concise, patient-friendly comparison of all Vizora lens options designed for chairside use during consultations.' },
      { title: 'Coating Explainer', desc: 'A simple visual guide explaining each coating\'s benefits in plain language ideal for helping patients understand and justify their coating upgrade.' },
    ],
    bg: 'blue-50'
  },
  {
    category: 'Marketing Materials',
    icon: <Briefcase size={48} strokeWidth={1} />,
    desc: 'High-quality digital and physical assets to elevate your practice\'s brand presence.',
    items: [
      { title: 'Vizora Product Brochure', desc: 'A comprehensive printed and digital brochure detailing the full Vizora Optics product range, for use in-practice and during sales consultations.' },
      { title: 'Display Materials', desc: 'In-practice display assets including lens comparison charts, brand materials, and product feature cards.' },
      { title: 'Digital Assets Pack', desc: 'High-resolution product images, logos, and digital marketing materials for use on your website and social media.' },
    ],
    bg: 'red-200'
  },
];

const editorialStyles = `
  .editorial-row {
    display: flex;
    align-items: center;
    padding: 64px 0;
    border-bottom: 1px solid rgba(10, 22, 40, 0.08);
    cursor: pointer;
    position: relative;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .editorial-row::after {
    content: '';
    position: absolute;
    left: 0; right: 0; bottom: -1px;
    height: 2px;
    background: linear-gradient(135deg, #1565c0, #0097c7);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 10;
  }

  .editorial-row:hover::after {
    transform: scaleX(1);
  }

  .editorial-row:hover {
    padding-left: 40px;
    padding-right: 40px;
    background: rgba(21, 101, 192, 0.02);
  }

  .row-index {
    font-size: 1.2rem;
    font-family: var(--font-serif);
    font-weight: 700;
    color: rgba(10, 22, 40, 0.15);
    width: 60px;
    transition: color 0.4s;
  }

  .row-title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-family: var(--font-serif);
    color: var(--navy);
    flex: 1.2;
    margin: 0;
    padding-right: 40px;
    transition: all 0.4s ease;
  }

  .row-desc {
    flex: 1;
    color: #4a5568;
    font-size: 1.05rem;
    line-height: 1.7;
    opacity: 0.6;
    transition: opacity 0.4s ease;
  }

  .row-action {
    width: 80px;
    display: flex;
    justify-content: flex-end;
    color: rgba(10, 22, 40, 0.3);
    transition: color 0.4s ease;
  }

  .arrow-icon {
    transform: translateX(0);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Hover States */
  .editorial-row:hover .row-index {
    color: #1565c0;
  }

  .editorial-row:hover .row-title {
    color: transparent;
    background: linear-gradient(135deg, #1565c0, #0097c7);
    -webkit-background-clip: text;
  }

  .editorial-row:hover .row-desc {
    opacity: 1;
  }

  .editorial-row:hover .row-action {
    color: #1565c0;
  }

  .editorial-row:hover .arrow-icon {
    transform: translateX(12px) scale(1.2);
  }

  /* Sticky Layout Wrapper */
  .category-wrapper {
    display: flex;
    gap: 80px;
    position: relative;
  }

  .category-wrapper.reverse {
    flex-direction: row-reverse;
  }

  .category-sidebar {
    width: 320px;
    flex-shrink: 0;
  }

  .category-sticky-content {
    position: sticky;
    top: 140px;
  }

  .category-list {
    flex: 1;
    min-width: 0;
    border-top: 1px solid rgba(10, 22, 40, 0.08);
  }

  @media (max-width: 1024px) {
    .category-wrapper, .category-wrapper.reverse {
      flex-direction: column;
      gap: 40px;
    }
    .category-sidebar {
      width: 100%;
    }
    .category-sticky-content {
      position: relative;
      top: 0;
    }
    .editorial-row {
      flex-direction: column;
      align-items: flex-start;
      padding: 40px 0;
      gap: 20px;
    }
    .editorial-row:hover {
      padding-left: 20px;
      padding-right: 20px;
    }
    .row-title { padding-right: 0; }
    .row-action { justify-content: flex-start; width: 100%; }
  }
`;

export default function ResourcesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: editorialStyles }} />

      {/* --- HERO SECTION --- */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/professionals">Professionals</Link><span>›</span>
            <span style={{ color: '#fff' }}>Resources</span>
          </nav>
          <span className="section-label">Professional Resources</span>
          <h1 style={{ marginBottom: 16, color: '#fff' }}>Resources & Guides</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '600px' }}>
            Comprehensive clinical guides, patient tools, and marketing materials to support your optical practice.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT: Card-less Editorial Layout --- */}
      <section style={{ background: '#fcfcfc', padding: '10px 0' }}>
        <div className="container">
          
          {resources.map((category, index) => (
            <div key={index} className={`category-wrapper ${index % 2 !== 0 ? 'reverse' : ''}`} style={{ background: category.bg === 'blue-200' ? '#dbeafe' : category.bg === 'blue-50' ? '#eff6ff' : '#fcfcfc', padding: '20px', borderRadius: '16px', marginBottom: '80px' }}>
              
              {/* Sticky Left Sidebar */}
              <div className="category-sidebar">
                <div className="category-sticky-content">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div style={{ 
                      color: 'transparent',
                      background: 'linear-gradient(135deg, rgba(21,101,192,0.1), rgba(0,151,199,0.1))',
                      WebkitBackgroundClip: 'text',
                      fontSize: '8rem', 
                      fontWeight: 900, 
                      lineHeight: 0.8, 
                      marginBottom: '14px', 
                      fontFamily: 'var(--font-serif)',
                      marginLeft: '-8px'
                    }}>
                      0{index + 1}
                    </div>
                    
                    {/* <div style={{ color: '#1565c0', marginBottom: '24px' }}>
                      {category.icon}
                    </div> */}
                    
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1 }}>
                      {category.category}
                    </h2>
                    
                    <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      {category.desc}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Minimalist Interactive Rows */}
              <div className="category-list">
                {category.items.map((item, itemIndex) => (
                  <Link href="/contact" key={itemIndex} style={{ textDecoration: 'none', display: 'block' }}>
                    <motion.div 
                      className="editorial-row"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="row-index">
                        0{itemIndex + 1}
                      </div>
                      
                      <h3 className="row-title">
                        {item.title}
                      </h3>
                      
                      <p className="row-desc">
                        {item.desc}
                      </p>

                      <div className="row-action">
                        <ArrowRight size={28} className="arrow-icon" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
              
            </div>
          ))}

        </div>
      </section>

      {/* --- ORIGINAL CTA SECTION --- */}
      <section className="section-sm" style={{ background: '#0a1628' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Access the Full Resource Library</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: '600px', margin: '0 auto 32px' }}>
            Contact our team to receive the complete set of professional resources for your practice.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" id="resources-contact-cta">
              Request Resources
            </Link>
            <Link href="/professionals/specs" className="btn btn-outline" id="resources-specs-link">
              View Specs & Docs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}