import { CheckCircle, ArrowUpRight, TrendingUp } from 'lucide-react';
import './Metrics.scss';

const BULLETS = [
  '10+ Years of Industry Experience',
  '100% Security Compliant (ISO 27001 & SOC 2)',
  '100% Collaborative & Transparent Teams',
  '1.5x Faster Time-to-Market with prebuilt packages',
  '80+ outcome-driven enterprise projects delivered',
];

const CARDS = [
  { value: '500+', label: 'Delivered Applications' },
  { value: '95%', label: 'Faster Time-to-Market' },
  { value: '97%', label: 'Client Trust & Support Rate' },
  { value: '3+', label: 'GenAI & Agentic Use Cases' },
  { value: '60%', label: 'Technical Debt Reduction' },
  { value: '200+', label: 'Global Clients Served' },
];

export default function Metrics() {
  return (
    <section className="metrics" id="metrics">
      <div className="metrics__inner">
        <div className="metrics__top">
          {/* Left */}
          <div className="metrics__left">
            <div className="metrics__label">Why Choose Us</div>
            <h2 className="metrics__title">
              Why High-Growth Companies <em>Trust NEXAVATE</em>
            </h2>
            <div className="metrics__bullets">
              {BULLETS.map((b) => (
                <div className="metrics__bullet" key={b}>
                  <div className="metrics__bullet-icon">
                    <CheckCircle size={14} />
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="metrics__right">
            {CARDS.map((card) => (
              <div className="metrics__card" key={card.label}>
                <div className="metrics__card-value">{card.value}</div>
                <div className="metrics__card-label">{card.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="metrics__cta-bar">
          <div className="metrics__cta-text">
            Let&apos;s build something that delivers results &mdash; not just software
          </div>
          <div className="metrics__cta-actions">
            <a
              className="metrics__btn metrics__btn--primary"
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <TrendingUp size={15} /> View Case Studies
            </a>
            <a
              className="metrics__btn metrics__btn--outline"
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Talk to Our Experts <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
