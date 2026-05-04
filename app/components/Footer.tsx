'use client';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#071020', borderTop: '1px solid rgba(184,150,62,0.2)', marginTop: 'auto' }}>
      <div className="footer-grid-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div style={{ marginBottom: 10 }}>
              <img
                src="/images/logo.png"
                alt="VIZORA OPTICS"
                style={{ height: 120, width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'white', lineHeight: 1.75 }}>
              Delivering precision-engineered ophthalmic lenses trusted by eye care professionals worldwide.
            </p>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-list">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Mission & Values', href: '/about/mission' },
                { label: 'Our History', href: '/about/history' },
                { label: 'Innovation & R&D', href: '/about/innovation' },
                { label: 'Media & Press', href: '/about/media' }
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="footer-link">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h5 className="footer-heading">Products</h5>
            <ul className="footer-list">
              {[
                { label: 'Optical Lenses', href: '/products/lenses' },
                { label: 'Technology', href: '/products/technology' },
                { label: 'Compare Products', href: '/products/compare' },
                { label: 'Professionals', href: '/professionals' },
                { label: 'Training', href: '/professionals/training' }
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="footer-link">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5 className="footer-heading">Contact</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <p className="footer-contact-label">Office (PA)</p>
                <p className="footer-contact-text">307 Fieldbrook Dr<br/>Pittsburgh, PA 15288</p>
              </div>
              <div>
                <p className="footer-contact-label">Communication (NJ)</p>
                <p className="footer-contact-text">64 4th Street<br/>Wood Ridge, NJ 07075</p>
              </div>
              <div>
                <a href="mailto:sales@vizoraoptics.com" className="footer-link" style={{ display: 'block' }}>Sales@vizoraoptics.com</a>
                <a href="mailto:vizoraoptics@gmail.com" className="footer-link">Vizoraoptics@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 0 40px', position: 'relative', overflow: 'hidden' }}>
        <div className="footer-watermark">VIZORA</div>

        <div className="footer-bottom-content">
          {/* Social icons */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <a href="#" aria-label="Facebook" className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" aria-label="X" className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
            © {year} VIZORA. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 24px 48px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        .footer-brand {
          grid-column: span 1;
        }
        .footer-heading {
          background: linear-gradient(135deg, #1565c0, #0097c7);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-family: Poppins, sans-serif;
          display: inline-block;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #0097c7; }
        .footer-contact-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: white;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .footer-contact-text {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.65;
          margin: 0;
        }
        .footer-watermark {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(70px, 14vw, 180px);
          font-weight: 900;
          font-family: Poppins, sans-serif;
          color: transparent;
          -webkit-text-stroke: 2px #1565c0;
          letter-spacing: 0.05em;
          line-height: 0.85;
          pointer-events: none;
          white-space: nowrap;
          user-select: none;
        }
        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-social-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
          text-decoration: none;
        }
        .footer-social-icon:hover { color: #1e88e5; }

        /* Tablet */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .footer-brand {
            grid-column: span 2;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-brand {
            grid-column: span 1;
          }
          .footer-grid-container {
            padding: 36px 18px 32px;
          }
          .footer-bottom-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .footer-watermark {
            font-size: clamp(52px, 18vw, 100px);
          }
        }
      `}</style>
    </footer>
  );
}