'use client';
import Link from 'next/link';
import { User, Camera, MessageCircle, CircleDot, Globe } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#071020', borderTop: '1px solid rgba(184,150,62,0.2)', marginTop: 'auto' }}>
      {/* Main footer content */}
      <div className="container" style={{ padding: '64px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', display: 'block', lineHeight: 1 }}>VIZORA</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.28em', background: 'linear-gradient(135deg, #1565c0, #0097c7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textTransform: 'uppercase', display: 'block', marginTop: 3 }}>OPTICS</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 260 }}>
              Delivering precision-engineered ophthalmic lenses trusted by eye care professionals worldwide.
            </p>
            {/* <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {['linkedin', 'twitter', 'instagram'].map((s) => (
                <a key={s} href="#" aria-label={s}
                  style={{
                    width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(184,150,62,0.3)', color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', transition: 'all 0.2s',
                    textDecoration: 'none', letterSpacing: 0,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor='linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLAnchorElement).style.color='linear-gradient(135deg, #1565c0, #0097c7)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(184,150,62,0.3)'; (e.currentTarget as HTMLAnchorElement).style.color='rgba(255,255,255,0.5)'; }}
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div> */}
          </div>

          {/* Company */}
          <div>
            <h5 style={{ background: 'linear-gradient(135deg, #1565c0, #0097c7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Poppins, sans-serif', display: 'inline-block' }}>Company</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'About Us', href: '/' },
                { label: 'Mission & Values', href: '/' },
                { label: 'Our History', href: '/' },
                { label: 'Innovation & R&D', href: '/' },
                { label: 'Media & Press', href: '/' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color='linear-gradient(135deg, #1565c0, #0097c7)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color='rgba(255,255,255,0.5)'; }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 style={{ background: 'linear-gradient(135deg, #1565c0, #0097c7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Poppins, sans-serif', display: 'inline-block' }}>Products</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Optical Lenses', href: '/' },
                { label: 'Technology', href: '/' },
                { label: 'Compare Products', href: '/' },
                { label: 'Professionals', href: '/' },
                { label: 'Training', href: '/' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color='linear-gradient(135deg, #1565c0, #0097c7)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color='rgba(255,255,255,0.5)'; }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ background: 'linear-gradient(135deg, #1565c0, #0097c7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Poppins, sans-serif', display: 'inline-block' }}>Contact</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Office (PA)</p>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>307 Fieldbrook Dr<br/>Pittsburgh, PA 15288</p>
              </div>
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Communication (NJ)</p>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>64 4th Street<br/>Wood Ridge, NJ 07075</p>
              </div>
              <div>
                <a href="mailto:sales@vizoraoptics.com" style={{ fontSize: '0.83rem', background: 'linear-gradient(135deg, #1565c0, #0097c7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textDecoration: 'none', display: 'inline' }}>Sales@vizoraoptics.com</a><br/>
                <a href="mailto:vizoraoptics@gmail.com" style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Vizoraoptics@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with VIZORA logo */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '100px 0 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Large NURUI text background */}
        <div style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(80px, 16vw, 180px)',
          fontWeight: 900,
          fontFamily: 'Poppins, sans-serif',
          color: 'transparent',
          WebkitTextStroke: '2px #1565c0',
          letterSpacing: '0.05em',
          lineHeight: 0.85,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          userSelect: 'none'
        }}>
          VIZORA
        </div>
        
        {/* Content overlay */}
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%' }}>
          {/* Social icons - top left */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', position: 'absolute', top: 0, left: 0 }}>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1e88e5'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1e88e5'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" aria-label="X" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1e88e5'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1e88e5'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Copyright - top right */}
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0, position: 'absolute', top: 0, right: 0 }}>
            © {year} VIZORA. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          footer > div:first-child > div:first-child > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          footer > div:first-child > div:first-child > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
