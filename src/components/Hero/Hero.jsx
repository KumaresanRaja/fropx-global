import { ArrowUpRight, Play, Brain, BarChart3, Settings, Cloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
    route: '/services/ai-automation',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Data Analytics',
    desc: 'Real-time insights & business intelligence',
    value: '99.9%',
    subLabel: 'Uptime SLA',
    bar: 99,
    route: '/services/data-engineering',
  },
  {
    icon: <Settings size={20} />,
    title: 'Automation',
    desc: 'Process optimization & workflow automation',
    value: '60%',
    subLabel: 'Cost Saved',
    bar: 60,
    route: '/services/ai-automation',
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure & CI/CD pipelines',
    value: '1.5x',
    subLabel: 'Speed to Market',
    bar: 75,
    route: '/services/cloud-devops',
  },
];

export default function Hero() {
  const navigate = useNavigate();
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">


      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span />
            Fast-Forward Business Growth
          </div>

          <h1 className="hero-title">
            Transforming Businesses Through <em>AI, Automation</em> &amp; Advanced Analytics
          </h1>

          <p className="hero-subtitle">
            Specialized in building secure, AI-first solutions that automate operations, unlock insights, and accelerate business growth across every industry.
          </p>

          <div className="hero-actions">
            <a
              className="hero-btn hero-btn-primary"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#contact');
              }}
            >
              Get a Free Quote <ArrowUpRight size={16} />
            </a>

            <a
              className="hero-btn hero-btn-secondary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#projects');
              }}
            >
              <Play size={14} /> See Our Work
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Cards */}
        <div className="hero-visual">
          <div className="hero-card-grid">
            {CARDS.map((card) => (
              <div className="hero-card" key={card.title} onClick={() => navigate(card.route)} style={{ cursor: 'pointer' }}>
                <div className="hero-card-icon">{card.icon}</div>
                <div className="hero-card-title">{card.title}</div>
                <div className="hero-card-desc">{card.desc}</div>
                <div className="hero-card-value">{card.value}</div>

                <div
                  style={{
                    fontSize: 11,
                    color: '#555',
                    marginTop: 2,
                  }}
                >
                  {card.subLabel}
                </div>

                <div className="hero-card-bar">
                  <div
                    className="hero-card-bar-fill"
                    style={{ width: `${card.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        scroll
      </div>
    </section>
  );
}