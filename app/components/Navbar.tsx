'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Mission & Values', href: '/about/mission' },
      { label: 'History', href: '/about/history' },
      { label: 'Innovation & R&D', href: '/about/innovation' },
      // { label: 'Media & Press', href: '/about/media' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Optical Lenses', href: '/products/lenses' },
      { label: 'Technology', href: '/products/technology' },
      { label: 'Compare Products', href: '/products/compare' },
    ],
  },
  {
    label: 'Professionals',
    href: '/professionals',
    children: [
      { label: 'Resources', href: '/professionals/resources' },
      { label: 'Specs & Docs', href: '/professionals/specs' },
      { label: 'Training', href: '/professionals/training' },
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
        margin: isHero ? '20px' : '0 16px',
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

        {/* Order Online Button */}
        <a
          href="https://www.solenzara.co.uk/vizorastart.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 8,
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'white',
            background: 'rgba(21, 101, 192, 0.8)',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(21, 101, 192, 0.4)',
          }}
          className="desktop-order-btn"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(21, 101, 192, 1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(21, 101, 192, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(21, 101, 192, 0.8)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Order Online
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </a>

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
          background: 'rgba(10, 22, 40, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: isHero ? '0 0 16px 16px' : '0',
          margin: isHero ? '0 20px' : '0',
          padding: '20px 0 32px',
          border: isHero ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          borderTop: 'none',
          maxHeight: 'calc(100vh - 112px)',
          overflowY: 'auto',
        }}>
          {NAV.map((item) => (
            <div key={item.label}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '16px 24px', 
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                transition: 'background 0.2s ease'
              }}>
                <Link
                  href={item.href}
                  style={{ 
                    fontSize: '1rem', 
                    fontWeight: 500, 
                    color: pathname === item.href ? '#fff' : 'rgba(255,255,255,0.9)', 
                    textDecoration: 'none',
                    flex: 1
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: mobileOpen === item.label ? '#fff' : 'rgba(255,255,255,0.6)', 
                      cursor: 'pointer', 
                      padding: 6,
                      borderRadius: '6px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d={mobileOpen === item.label ? 'M1 9l6-6 6 6' : 'M1 1l6 6 6-6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
              {item.children && mobileOpen === item.label && (
                <div style={{ 
                  background: 'rgba(0, 0, 0, 0.3)', 
                  paddingLeft: 24,
                  borderLeft: '3px solid rgba(21, 101, 192, 0.5)',
                  animation: 'slideDown 0.3s ease'
                }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      style={{ 
                        display: 'block', 
                        padding: '14px 24px', 
                        fontSize: '0.9rem', 
                        color: pathname === child.href ? '#fff' : 'rgba(255,255,255,0.7)', 
                        borderBottom: '1px solid rgba(255,255,255,0.05)', 
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(21, 101, 192, 0.2)';
                        (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                        (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '28px';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                        (e.currentTarget as HTMLAnchorElement).style.color = pathname === child.href ? '#fff' : 'rgba(255,255,255,0.7)';
                        (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '24px';
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ padding: '24px 24px 0' }}>
            <a
              href="https://www.solenzara.co.uk/vizorastart.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                width: '100%', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: 8,
                padding: '14px 24px',
                background: 'linear-gradient(135deg, #1565c0, #0097c7)',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(21, 101, 192, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Order Online
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Tablet */
        @media (max-width: 1024px) {
          header {
            margin: isHero ? '16px 24px' : '0 24px' !important;
            border-radius: isHero ? '12px' : '0 0 12px 12px' !important;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          header {
            margin: isHero ? '12px' : '0' !important;
            border-radius: isHero ? '8px' : '0' !important;
          }
          
          .container.flex-between {
            padding: 0 16px !important;
          }
          
          .desktop-nav { 
            display: none !important; 
          }
          
          .mobile-menu-btn { 
            display: flex !important; 
            align-items: center;
            justify-content: center;
          }
          
          /* Logo adjustments for mobile */
          .container.flex-between img {
            height: 60px !important;
            width: auto !important;
          }
        }
        
        /* Small mobile */
        @media (max-width: 480px) {
          header {
            margin: isHero ? '8px' : '0' !important;
            border-radius: isHero ? '8px' : '0' !important;
          }
          
          .container.flex-between {
            height: 60px !important;
            padding: 0 12px !important;
          }
          
          .container.flex-between img {
            height: 50px !important;
            width: auto !important;
          }
          
          /* Mobile menu adjustments */
          header > div:last-child {
            margin: isHero ? '0 8px' : '0' !important;
            padding: 16px 0 24px !important;
          }
          
          header > div:last-child > div > div {
            padding: 14px 16px !important;
          }
          
          header > div:last-child > div > div > div {
            padding-left: 16px !important;
          }
          
          header > div:last-child > div > div > div a {
            padding: 12px 16px !important;
            font-size: 0.85rem !important;
          }
        }
        
        @media (min-width: 961px) {
          .desktop-order-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
