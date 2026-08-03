import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri';
import './ServiceFooter.scss';

const SERVICE_LINKS = [
  { label: 'AI & Automation', href: '/services/ai-automation' },
  { label: 'Data Engineering', href: '/services/data-engineering' },
  { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { label: 'Custom Software', href: '/services/custom-software' },
  { label: 'Product Engineering', href: '/services/product-engineering' },
];

const SOCIALS = [
  { icon: <RiTwitterXFill size={15} />, href: '#', label: 'Twitter' },
  { icon: <RiLinkedinFill size={15} />, href: '#', label: 'LinkedIn' },
  { icon: <RiGithubFill size={15} />, href: '#', label: 'GitHub' },
];

export default function ServiceFooter() {
  const navigate = useNavigate();
  return (
    <footer className="sf-footer">
      <div className="sf-top">
        <div className="sf-container">

          <div className="sf-brand">
            <div className="sf-logo" onClick={() => navigate('/')}>
              <div className="sf-logo-icon">NX</div>
              <span>FROPX GlobalTech</span>
            </div>
            <p className="sf-tagline">
              AI-first digital solutions that transform businesses globally.
            </p>
            <div className="sf-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="sf-social">{s.icon}</a>
              ))}
            </div>
          </div>

          <div className="sf-links">
            <div className="sf-col-title">Services</div>
            <ul>
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); navigate(l.href); }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sf-contact">
            <div className="sf-col-title">Contact</div>
            <a href="mailto:contact@fropxglobal.com" className="sf-contact-item">
              <Mail size={14} /> contact@fropxglobal.com
            </a>
            <a href="tel:+15551234567" className="sf-contact-item">
              <Phone size={14} /> +91 8248981175
            </a>
            <button className="sf-cta" onClick={() => navigate('/contact-us')}>
              Free Consultation <ArrowUpRight size={14} />
            </button>
          </div>

        </div>
      </div>

      <div className="sf-bottom">
        <div className="sf-container sf-bottom-inner">
          <span>© {new Date().getFullYear()} FROPX GlobalTech. All rights reserved.</span>
          <div className="sf-policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
