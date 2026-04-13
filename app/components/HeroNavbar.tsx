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
        margin: '20px 200px',
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
            width={160}
            height={100}
            unoptimized
            style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-nav">
          {NAV.map((item) => (
            <div
              key={item.href}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setOpenDropdown(item.href)}
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
              {item.children && openDropdown === item.href && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, minWidth: 200,
                  background: 'rgba(10, 22, 40, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '8px 0',
                  marginTop: '8px',
                  animation: 'fadeInUp 0.18s ease both',
                  zIndex: 100,
                }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: 'block', padding: '10px 20px',
                        fontSize: '0.85rem', fontWeight: 400,
                        color: pathname === child.href ? '#fff' : 'rgba(255,255,255,0.7)',
                        transition: 'all 0.2s',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        margin: '2px 8px',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)';
                        (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                        (e.currentTarget as HTMLAnchorElement).style.color = pathname === child.href ? '#fff' : 'rgba(255,255,255,0.7)';
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
            <div key={item.href}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <Link
                  href={item.href}
                  style={{ fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setMobileOpen(mobileOpen === item.href ? null : item.href)}
                    style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: 4 }}
                  >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d={mobileOpen === item.href ? 'M1 7l5-5 5 5' : 'M1 1l5 5 5-5'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
              {item.children && mobileOpen === item.href && (
                <div style={{ background: 'rgba(0, 0, 0, 0.2)', paddingLeft: 16 }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
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
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
