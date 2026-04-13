'use client';

import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    name: 'Omar Raza',
    title: 'CEO',
    avatar: '/images/avatar1.jpg',
  },
  {
    id: 2,
    quote: "The precision and quality of these lenses have transformed our customer experience. Outstanding clarity and comfort.",
    name: 'Sarah Chen',
    title: 'Optometrist',
    avatar: '/images/avatar2.jpg',
  },
  {
    id: 3,
    quote: "Partnering with this team has been a game-changer for our practice. Reliable supply chain and exceptional support.",
    name: 'Michael Torres',
    title: 'Store Owner',
    avatar: '/images/avatar3.jpg',
  },
  {
    id: 4,
    quote: "The V ELITE HD lenses exceeded all expectations. Our patients appreciate the seamless transition between zones.",
    name: 'Dr. Emily Watson',
    title: 'Ophthalmologist',
    avatar: '/images/avatar4.jpg',
  },
  {
    id: 5,
    quote: "Fantastic value for premium quality. The progressive lenses have significantly reduced our return rate.",
    name: 'James Liu',
    title: 'Optical Retailer',
    avatar: '/images/avatar5.jpg',
  },
  {
    id: 6,
    quote: "The AR coating is exceptional - virtually no glare and crystal clear vision for our customers.",
    name: 'Priya Sharma',
    title: 'Lab Manager',
    avatar: '/images/avatar6.jpg',
  },
  {
    id: 7,
    quote: "Fast delivery times and consistent quality. VIZORA has become our go-to lens supplier.",
    name: 'Robert Kim',
    title: 'Distributor',
    avatar: '/images/avatar7.jpg',
  },
  {
    id: 8,
    quote: "The blue light protection lenses are a hit with our younger patients. Great addition to our offerings.",
    name: 'Anna Schmidt',
    title: 'Eye Care Specialist',
    avatar: '/images/avatar8.jpg',
  },
  {
    id: 9,
    quote: "Impressive technical support and training. The team went above and beyond to help our staff.",
    name: 'David Park',
    title: 'Clinic Director',
    avatar: '/images/avatar9.jpg',
  },
  {
    id: 10,
    quote: "Our sales have increased 30% since switching to VIZORA lenses. Customers notice the difference immediately.",
    name: 'Maria Garcia',
    title: 'Boutique Owner',
    avatar: '/images/avatar10.jpg',
  },
  {
    id: 11,
    quote: "The V INFINITY 4K lenses are a masterpiece. Our high-prescription patients finally have a premium option.",
    name: 'Dr. Ahmed Hassan',
    title: 'Vision Specialist',
    avatar: '/images/avatar11.jpg',
  },
  {
    id: 12,
    quote: "Seamless ordering process and excellent packaging. VIZORA understands what optical businesses need.",
    name: 'Lisa Thompson',
    title: 'Operations Manager',
    avatar: '/images/avatar12.jpg',
  },
];

// Split into 3 columns (4 each)
const col1 = testimonials.slice(0, 4);
const col2 = testimonials.slice(4, 8);
const col3 = testimonials.slice(8, 12);

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '24px 24px 20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        minWidth: 320,
        maxWidth: 340,
        flexShrink: 0,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
      }}
    >
      {/* Quote */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          color: '#334155',
          marginBottom: 20,
        }}
      >
        {t.quote}
      </p>

      {/* Author */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Avatar - Initials with gradient background */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1565c0, #0097c7)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 600,
            flexShrink: 0,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>

        {/* Name & Title */}
        <div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#1e293b',
              margin: 0,
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              color: '#64748b',
              margin: 0,
            }}
          >
            {t.title}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({ items, duration }: { items: Testimonial[]; duration: number }) {
  // Duplicate items for seamless loop
  const duplicated = [...items, ...items, ...items];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: 500,
        position: 'relative',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)',
        padding: '0 10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          animation: `marquee-up ${duration}s linear infinite`,
        }}
      >
        {duplicated.map((t, idx) => (
          <TestimonialCard key={`${t.id}-${idx}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: '#f8fafc', padding: '80px 0', overflow: 'hidden' }}>
      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
      `}</style>

      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
              color: '#1e293b',
              marginBottom: 12,
            }}
          >
            What Our Partners Say
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: '#64748b',
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            Trusted by leading optical professionals worldwide
          </p>
        </div>

        {/* 3 Columns - Vertical Scrolling */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          {/* Column 1 - Fast speed */}
          <MarqueeColumn items={col1} duration={25} />

          {/* Column 2 - Slow speed */}
          <MarqueeColumn items={col2} duration={40} />

          {/* Column 3 - Fast speed */}
          <MarqueeColumn items={col3} duration={25} />
        </div>
      </div>
    </section>
  );
}
