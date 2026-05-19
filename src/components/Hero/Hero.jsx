import { ArrowUpRight, Play, Brain, BarChart3, Settings, Cloud } from 'lucide-react';
import './Hero.scss';

const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '97%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
  { value: '60%', label: 'Cost Reduction' },
];

const CARDS = [
  {
    icon: <Brain size={20} />,
    title: 'AI Solutions',
    desc: 'Intelligent automation & machine learning',
    value: '3x',
    subLabel: 'Faster ROI',
    bar: 85,
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Data Analytics',
    desc: 'Real-time insights & business intelligence',
    value: '99.9%',
    subLabel: 'Uptime SLA',
    bar: 99,
  },
  {
    icon: <Settings size={20} />,
    title: 'Automation',
    desc: 'Process optimization & workflow automation',
    value: '60%',
    subLabel: 'Cost Saved',
    bar: 60,
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure & CI/CD pipelines',
    value: '1.5x',
    subLabel: 'Speed to Market',
    bar: 75,
  },
];

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__bg-grid" />
        <div className="hero__bg-glow hero__bg-glow--1" />
        <div className="hero__bg-glow hero__bg-glow--2" />
      </div>

      <div className="hero__inner">
        {/* Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span />
            Fast-Forward Business Growth
          </div>

          <h1 className="hero__title">
            Transforming Businesses Through <em>AI, Automation</em> &amp; Advanced Analytics
          </h1>

          <p className="hero__subtitle">
            Specialized in building secure, AI-first solutions that automate operations, unlock insights, and accelerate business growth across every industry.
          </p>

          <div className="hero__actions">
            <a
              className="hero__btn hero__btn--primary"
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
            >
              Get a Free Quote <ArrowUpRight size={16} />
            </a>
            <a
              className="hero__btn hero__btn--secondary"
              href="#projects"
              onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}
            >
              <Play size={14} /> See Our Work
            </a>
          </div>

          <div className="hero__stats">
            {STATS.map((s) => (
              <div className="hero__stat" key={s.label}>
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Cards */}
        <div className="hero__visual">
          <div className="hero__card-grid">
            {CARDS.map((card) => (
              <div className="hero__card" key={card.title}>
                <div className="hero__card-icon">{card.icon}</div>
                <div className="hero__card-title">{card.title}</div>
                <div className="hero__card-desc">{card.desc}</div>
                <div className="hero__card-value">{card.value}</div>
                <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>{card.subLabel}</div>
                <div className="hero__card-bar">
                  <div className="hero__card-bar-fill" style={{ width: `${card.bar}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        scroll
      </div>
    </section>
  );
}
