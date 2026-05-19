import { useState, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X, Zap, Globe, Shield, HeartHandshake } from 'lucide-react';
import './Navbar.scss';

const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'AI & Intelligent Systems', icon: <Zap size={14} />, href: '#services' },
      { label: 'Data Engineering', icon: <Globe size={14} />, href: '#services' },
      { label: 'Cloud & DevOps', icon: <Shield size={14} />, href: '#services' },
      { label: 'Custom Software', icon: <HeartHandshake size={14} />, href: '#services' },
    ],
  },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="navbar__topbar">
        <div className="navbar__topbar-inner">
          <div className="navbar__topbar-left">
            <a href="mailto:contact@nexavate.com">
              <Globe size={12} /> contact@nexavate.com
            </a>
            <a href="tel:+15551234567">
              <Shield size={12} /> +1 (555) 123-4567
            </a>
          </div>
          <div className="navbar__topbar-right">
            <span><Zap size={12} /> Global Digital Transformation Partner</span>
            <span><Shield size={12} /> 24/7 Managed Support</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="navbar__main">
        <a className="navbar__logo" href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }}>
          <div className="navbar__logo-icon">NX</div>
          <div className="navbar__logo-text">NEXAVATE <span>Technologies</span></div>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </a>
              {link.dropdown && (
                <div className="navbar__dropdown">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="navbar__dropdown-item"
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    >
                      <div className="navbar__dropdown-icon">{item.icon}</div>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            className="navbar__cta"
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Free Consultation <ArrowUpRight size={15} />
          </a>
          <button
            className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          className="navbar__mobile-cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Free Consultation
        </a>
      </div>
    </nav>
  );
}
