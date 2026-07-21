import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, Zap, Globe, Shield, HeartHandshake, Rocket } from 'lucide-react';
import './Navbar.scss';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'AI & Intelligent Systems', icon: <Zap size={14} />, href: '/services/ai-automation', isPage: true },
      { label: 'Data Engineering', icon: <Globe size={14} />, href: '/services/data-engineering', isPage: true },
      { label: 'Cloud & DevOps', icon: <Shield size={14} />, href: '/services/cloud-devops', isPage: true },
      { label: 'Custom Software', icon: <HeartHandshake size={14} />, href: '/services/custom-software', isPage: true },
      { label: 'Product Engineering', icon: <Rocket size={14} />, href: '/services/product-engineering', isPage: true },
    ],
  },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '/contact-us', isPage: true },
];

export default function Navbar({ isContactPage = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => {
    if (href.startsWith('/')) return location.pathname === href;
    if (href === '#services') return location.pathname.startsWith('/services');
    return false;
  };

  const handleNavClick = (href, isPage) => {
    setMobileOpen(false);
    if (isPage) {
      navigate(href);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="navbar-topbar">
        <div className="navbar-topbar-inner">
          <div className="navbar-topbar-left">
            <a href="mailto:contact@FROPXGlobal.com">
              <Globe size={12} /> contact@FROPXGlobal.com
            </a>
            <a href="tel:+15551234567">
              <Shield size={12} /> +1 (555) 123-4567
            </a>
          </div>
          <div className="navbar-topbar-right">
            <span><Zap size={12} /> Global Digital Transformation Partner</span>
            <span><Shield size={12} /> 24/7 Managed Support</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="navbar-main">
        <a className="navbar-logo" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <div className="navbar-logo-icon">NX</div>
          <div className="navbar-logo-text">FROPX Global <span>Technologies</span></div>
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.isPage); }} className={isActive(link.href) ? 'active' : ''}>
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </a>
              {link.dropdown && (
                <div className="navbar-dropdown">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="navbar-dropdown-item"
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.isPage); }}
                    >
                      <div className="navbar-dropdown-icon">{item.icon}</div>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            className="navbar-cta"
            href="/contact-us"
            onClick={(e) => { e.preventDefault(); navigate('/contact-us'); }}
          >
            Free Consultation <ArrowUpRight size={15} />
          </a>
          <button
            className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <div key={link.label}>
            <a
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.isPage); }}
            >
              {link.label}
            </a>
            {link.dropdown && link.dropdown.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navbar-mobile-sub"
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.isPage); }}
              >
                {item.icon} {item.label}
              </a>
            ))}
          </div>
        ))}
        <a
          className="navbar-mobile-cta"
          href="/contact-us"
          onClick={(e) => { e.preventDefault(); navigate('/contact-us'); }}
        >
          Free Consultation
        </a>
      </div>
    </nav>
  );
}
