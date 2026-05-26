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
    <section className="metrics-section" id="metrics">
      <div className="metrics-inner">
        <div className="metrics-top">
          {/* Left */}
          <div className="metrics-left">
            <div className="metrics-label">Why Choose Us</div>
            <h2 className="metrics-title">
              Why High-Growth Companies <em>Trust FROPX Global</em>
            </h2>
            <div className="metrics-bullets">
              {BULLETS.map((b) => (
                <div className="metrics-bullet" key={b}>
                  <div className="metrics-bullet-icon">
                    <CheckCircle size={14} />
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="metrics-right">
            {CARDS.map((card) => (
              <div className="metrics-card" key={card.label}>
                <div className="metrics-card-value">{card.value}</div>
                <div className="metrics-card-label">{card.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="metrics-cta-bar">
          <div className="metrics-cta-text">
            Let&apos;s build something that delivers results &mdash; not just software
          </div>
          <div className="metrics-cta-actions">
            <a
              className="metrics-btn metrics-btn-primary"
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <TrendingUp size={15} /> View Case Studies
            </a>
            <a
              className="metrics-btn metrics-btn-outline"
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
