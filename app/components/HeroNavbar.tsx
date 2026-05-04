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
  { label: 'Contact', href: '/' },
];

export default function HeroNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  useEffect(() => { setMenuOpen(false); setMobileOpen(null); }, [pathname]);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(10, 22, 40, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        margin: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
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
          background: 'rgba(10, 22, 40, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '0 0 16px 16px',
          margin: '0 20px',
          padding: '20px 0 32px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
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
            margin: 16px 24px !important;
            border-radius: 12px !important;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          header {
            margin: 12px !important;
            border-radius: 8px !important;
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
            margin: 8px !important;
            border-radius: 8px !important;
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
            margin: 0 8px !important;
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
      `}</style>
    </header>
  );
}
