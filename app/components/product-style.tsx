'use client';

import React from 'react';
import { ArrowRight, Eye, Zap, Shield, Star } from 'lucide-react';
import styles from './product-style.module.css';
import Link from 'next/link';

interface LensData {
  id: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  name: string;
  type: string;
  tag: string;
  tagColor: string;
  tagTextColor?: string;
  positioning: string;
  desc: string;
  features: string[];
  ideal: string;
  color: string;
  bg: string;
  border: string;
  count: string;
  href: string;
  image: string;
}

interface ProductStyleProps {
  onApplyNowClick?: () => void;
}

const lenses: LensData[] = [
  {
    id: 'v-select-hd',
    icon: Eye,
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
    color: '#3a3a36',
    bg: '#0a1628',
    border: 'rgba(58,58,54,0.25)',
    count: 'Entry Premium',
    href: '#v-select-hd',
    image: '/images/1.png',
  },
  {
    id: 'v-flow-hd',
    icon: Zap,
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
    color: '#1c3460',
    bg: '#0a1628',
    border: 'rgba(28,52,96,0.25)',
    count: 'Enhanced',
    href: '#v-flow-hd',
    image: '/images/2.png',
  },
  {
    id: 'v-elite-hd',
    icon: Shield,
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
    color: '#0a1628',
    bg: '#0a1628',
    border: 'rgba(10,22,40,0.25)',
    count: 'Premium',
    href: '#v-elite-hd',
    image: '/images/3.png',
  },
  {
    id: 'v-infinity-4k',
    icon: Star,
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
    color: '#1565c0',
    bg: '#0a1628',
    border: 'rgba(21,101,192,0.25)',
    count: 'Flagship',
    href: '#v-infinity-4k',
    image: '/images/4.png',
  },
];

const ProductStyle = ({ onApplyNowClick: _onApplyNowClick }: ProductStyleProps) => {
  return (
    <section className={styles.section}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <Eye size={14} /> Progressive Lens Series
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', marginBottom: '6px', letterSpacing: '-0.02em' }}>
          Four Premium <span className="text-blue-800-solid">Optical Solutions</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
          From everyday reliability to ultra-premium 4K clarity - engineered for every vision need and patient segment.
        </p>
      </div>
      <div className={styles.outerWrap}>
        <div className={styles.stickyContainer}>
          {lenses.map((lens) => (
            <div key={lens.id} className={styles.stickySquare} style={{ background: lens.bg, border: `1px solid ${lens.border}` }}>
              {/* Top accent line */}
              <div className={styles.accentLine} style={{ background: `${lens.color}` }} />

              <div className={styles.productCard}>
                {/* Left: Background Image */}
                <div className={styles.imageWrapper}>
                  {/* Background photo */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url('${lens.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                  {/* Colour gradient overlay at bottom */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, ${lens.color}CC 0%, ${lens.color}44 40%, transparent 90%)`,
                  }} />
                  {/* Floating icon + count badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    zIndex: 2,
                  }}>
                    <lens.icon size={36} strokeWidth={1.9} />
                    <div style={{
                      background: 'rgba(255,255,255,0.92)',
                      borderRadius: '50px',
                      padding: '6px 16px',
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      color: lens.color,
                      backdropFilter: 'blur(8px)',
                    }}>
                      {lens.count}
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className={styles.productContent}>
                  {/* Header Section */}
                  <div className={styles.contentHeader}>
                    {/* Category pill */}
                    <span 
                      className={styles.categoryPill} 
                      style={{ 
                        color: lens.tagTextColor || '#ffffff',
                        background: lens.tagColor
                      }}
                    >
                      {lens.tag}
                    </span>

                    <h2 className={styles.productHeading} style={{ color: '#ffffff' }}>
                      {lens.name}
                    </h2>

                    <p className={styles.lensType}>{lens.type}</p>
                  </div>

                  {/* Description */}
                  <p className={styles.contentText}>{lens.desc}</p>

                  {/* Features Section */}
                  <div className={styles.featuresSection}>
                    <div className={styles.featuresLabel}>Key Features</div>
                    <div className={styles.subTagRow}>
                      {lens.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={feature}
                          className={styles.subTag}
                          style={{ 
                            background: 'rgba(255,255,255,0.08)', 
                            border: '1px solid rgba(255,255,255,0.15)', 
                            color: '#ffffff',
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Section */}
                  <div className={styles.idealSection}>
                    <div className={styles.idealLabel}>Ideal For</div>
                    <p className={styles.idealText}>{lens.ideal}</p>
                  </div>

                  {/* Footer */}
                  <div className={styles.cardFooter}>
                    <span className={styles.countText} style={{ color: '#ffffff' }}>
                      Premium Optical Solution
                    </span>
                    <Link href={lens.href} className={styles.exploreLink} style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)' }}>
                      Explore <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductStyle;
