import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiGithubFill,
  RiYoutubeFill,
} from 'react-icons/ri';

import './Footer.scss';

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],

  Services: [
    { label: 'AI & Automation', href: '/services/ai-automation' },
    { label: 'Data Engineering', href: '/services/data-engineering' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'Custom Software', href: '/services/custom-software' },
    { label: 'Product Engineering', href: '/services/product-engineering' },
  ],


};

const FOOTER_SOCIALS = [
  {
    icon: <RiTwitterXFill size={16} />,
    href: '#',
    label: 'Twitter/X',
  },

  {
    icon: <RiLinkedinFill size={16} />,
    href: 'https://www.linkedin.com/company/fropx-globaltech',
    label: 'LinkedIn',
  }
];

export default function Footer() {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (event, href) => {
    if (href.startsWith('/')) {
      event.preventDefault();
      navigate(href);
      return;
    }
    if (href.startsWith('#') && href.length > 1) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">

      {/* Top CTA */}
      <div className="footer-cta-wrapper">

        <div className="footer-cta-content">

          <div>
            <div className="footer-mini-label">
              READY TO BUILD?
            </div>

            <h2 className="footer-cta-title">
              Let&apos;s create the next
              <span> digital breakthrough.</span>
            </h2>
          </div>

          <button
            className="footer-cta-button"
            onClick={() => navigate('/contact-us')}
          >
            Start Your Project
            <ArrowUpRight size={16} />
          </button>

        </div>

      </div>

      {/* Main */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <a
            className="footer-logo"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
          >

            <div className="footer-logo-icon">
              NX
            </div>

            <div className="footer-logo-text">
              FROPX GlobalTech
            </div>

          </a>

          <p className="footer-tagline">
            Building AI-first, secure, and scalable digital
            solutions that transform businesses and deliver
            measurable results globally.
          </p>

          <div className="footer-social-links">

            {FOOTER_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="footer-social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}

          </div>

        </div>

        {/* Link Columns */}
        {Object.entries(FOOTER_LINKS).map(([column, links]) => (
          <div
            className="footer-links-column"
            key={column}
          >

            <div className="footer-column-title">
              {column}
            </div>

            <ul className="footer-links-list">

              {links.map((link) => (
                <li key={link.label}>

                  <a
                    href={link.href}
                    onClick={(event) =>
                      handleNavClick(event, link.href)
                    }
                  >
                    {link.label}
                  </a>

                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} FROPX GlobalTech.
            All rights reserved.
          </div>

          <div className="footer-policy-links">

            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>

           

          </div>

          <button
            className="footer-scroll-button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>

    </footer>
  );
}