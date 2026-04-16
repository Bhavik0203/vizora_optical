'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/',
    children: [
      { label: 'Mission & Values', href: '/' },
      { label: 'History', href: '/' },
      { label: 'Innovation & R&D', href: '/' },
      { label: 'Media & Press', href: '/' },
    ],
  },
  {
    label: 'Products',
    href: '/',
    children: [
      { label: 'Optical Lenses', href: '/' },
      { label: 'Technology', href: '/' },
      { label: 'Compare Products', href: '/' },
    ],
  },
  {
    label: 'Professionals',
    href: '/',
    children: [
      { label: 'Resources', href: '/' },
      { label: 'Specs & Docs', href: '/' },
      { label: 'Training', href: '/' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [showHeroNavbar, setShowHeroNavbar] = useState(true);
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);
  const [heroEnded, setHeroEnded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is 100vh
      
      // Check if user is within hero section
      if (scrollY < heroHeight) {
        setShowHeroNavbar(true);
        setShowSecondNavbar(false);
        setHeroEnded(false);
      } else {
        // User has scrolled past hero section
        setHeroEnded(true);
        setShowHeroNavbar(false);
        
        // Hide both headers when scrolling down
        if (scrollY > lastScrollY) {
          setShowSecondNavbar(false);
        } 
        // Show second header when scrolling up
        else {
          setShowSecondNavbar(true);
        }
      }
      
      setLastScrollY(scrollY);
      setScrolled(scrollY > 24);
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => { setMenuOpen(false); setMobileOpen(null); }, [pathname]);

  const isHero = showHeroNavbar;

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: isHero ? 'rgba(10, 22, 40, 0.85)' : 'rgba(10, 22, 40, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: isHero ? '16px' : '0 0 16px 16px',
        margin: isHero ? '20px 200px' : '0 16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        transform: (isHero || showSecondNavbar) ? 'translateY(0)' : 'translateY(-100%)',
        opacity: (isHero || showSecondNavbar) ? 1 : 0,
        pointerEvents: (isHero || showSecondNavbar) ? 'auto' : 'none',
      }}
    >
      {/* Top bar */}
      {/* <div style={{ background: '#071020', padding: '6px 0', borderBottom: '1px solid rgba(184,150,62,0.15)' }}>
        <div className="container flex-between" style={{ gap: 16 }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
            Premium Ophthalmic Lenses — Pittsburgh, PA &amp; Wood Ridge, NJ
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="mailto:sales@vizoraoptics.com" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>
              Sales@vizoraoptics.com
            </a>
          </div>
        </div>
      </div> */}

      {/* Main nav */}
      <div className="container flex-between" style={{ height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
  <Image
    src="/images/logo.png"
    alt="Vizora Optics Logo"
    width={140}
    height={80}
    unoptimized
    style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
  />
</Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-nav">
          {NAV.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                style={{
                  padding: '10px 16px',
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: '0.9rem', fontWeight: 500,
                  color: pathname === item.href || pathname.startsWith(item.href + '/') ? '#fff' : 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => {
                  const active = pathname === item.href || pathname.startsWith(item.href + '/');
                  (e.currentTarget as HTMLAnchorElement).style.color = active ? '#fff' : 'rgba(255,255,255,0.7)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 4px)', left: 0, minWidth: 220,
                  background: 'rgba(10, 22, 40, 0.98)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '10px 0',
                  animation: 'fadeInUp 0.2s ease both',
                  zIndex: 1000,
                }}>
                  {/* Invisible bridge to prevent hover gap */}
                  <div style={{ position: 'absolute', top: -10, left: 0, right: 0, height: 10 }} />
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      style={{
                        display: 'block', padding: '12px 20px',
                        fontSize: '0.85rem', fontWeight: 500,
                        color: '#fff',
                        transition: 'all 0.15s ease',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        margin: '2px 10px',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(21, 101, 192, 0.3)';
                        (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                        (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>


        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, color: '#fff', display: 'none',
          }}
          id="mobile-hamburger"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10, 22, 40, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '0 0 16px 16px',
          margin: '0 16px',
          padding: '16px 0 24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: 'none',
        }}>
          {NAV.map((item) => (
            <div key={item.label}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <Link
                  href={item.href}
                  style={{ fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                    style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: 4 }}
                  >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d={mobileOpen === item.label ? 'M1 7l5-5 5 5' : 'M1 1l5 5 5-5'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
              {item.children && mobileOpen === item.label && (
                <div style={{ background: 'rgba(0, 0, 0, 0.2)', paddingLeft: 16 }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      style={{ display: 'block', padding: '10px 24px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', borderBottom: '1px solid rgba(255,255,255,0.03)', textDecoration: 'none' }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ padding: '20px 24px 0' }}>
            <Link href="/"  style={{ 
              display: 'flex', 
              width: '100%', 
              justifyContent: 'center', 
              alignItems: 'center',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #1565c0, #0097c7)',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '4px'
            }} id="mobile-nav-cta">
              Get in Touch
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          header > div:nth-child(2) > a.btn { display: none !important; }
          .desktop-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}
