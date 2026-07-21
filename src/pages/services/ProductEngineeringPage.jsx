import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Rocket, CheckCircle, Search, Layers, Code2, BarChart3, RefreshCw, Users, Zap, GitBranch } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import ServiceFooter from '../../components/ServiceFooter/ServiceFooter';
import './ServicePage.scss';

const CHIPS = ['Figma', 'Agile', 'React Native', 'Next.js', 'Flutter', 'Storybook'];

const BULLETS = [
  'Product discovery, roadmap planning & prioritization',
  'MVP development & rapid market validation',
  'Agile sprint-based delivery with weekly demos',
  'User research, UX testing & design systems',
  'Post-launch growth, analytics & optimization',
  'Investor-ready product documentation & demos',
];

const FEATURES = [
  { icon: <Search size={18} />, title: 'Product Discovery', desc: 'Structured discovery sprints to validate assumptions, define scope, and align stakeholders before writing a line of code.' },
  { icon: <Layers size={18} />, title: 'MVP Development', desc: 'Ship a lean, functional MVP in 6–10 weeks to validate your market and attract early adopters or investors.' },
  { icon: <Users size={18} />, title: 'UX Research & Design', desc: 'User interviews, journey mapping, and iterative design in Figma — validated with real users before development.' },
  { icon: <GitBranch size={18} />, title: 'Agile Delivery', desc: 'Two-week sprints with daily standups, sprint reviews, and transparent velocity tracking via Jira or Linear.' },
  { icon: <BarChart3 size={18} />, title: 'Growth & Analytics', desc: 'Instrument your product with analytics, A/B testing, and funnel tracking to drive data-informed growth.' },
  { icon: <RefreshCw size={18} />, title: 'Continuous Iteration', desc: 'Post-launch feature development, performance optimization, and product evolution based on user feedback.' },
];

const PROCESS = [
  { step: '01', icon: <Search size={18} />, title: 'Discovery Sprint', desc: 'Define the problem, user personas, and success metrics in a focused 1-week sprint.' },
  { step: '02', icon: <Layers size={18} />, title: 'Design & Prototype', desc: 'High-fidelity Figma designs and clickable prototypes tested with real users.' },
  { step: '03', icon: <Code2 size={18} />, title: 'Build MVP', desc: 'Agile development with bi-weekly demos and continuous stakeholder feedback.' },
  { step: '04', icon: <Zap size={18} />, title: 'Launch & Grow', desc: 'Go-to-market support, analytics setup, and iterative feature development.' },
];

const STATS = [
  { value: '6wks', label: 'Average MVP Timeline' },
  { value: '3x', label: 'Faster Market Validation' },
  { value: '85%', label: 'MVPs Reaching Product-Market Fit' },
  { value: '60+', label: 'Products Launched' },
];

export default function ProductEngineeringPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="sp-main">

        <section className="sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="sp-container sp-hero-inner">
            <button className="sp-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={14} /> Back to Home
            </button>
            <div className="sp-label">Our Services</div>
            <h1 className="sp-hero-title">
              Product Engineering <em>&amp; Innovation</em>
            </h1>
            <p className="sp-hero-subtitle">
              From idea to market-ready product. We combine design thinking, agile delivery, and technical excellence to build products users love.
            </p>
            <div className="sp-hero-chips">
              {CHIPS.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </section>

        <section className="sp-overview">
          <div className="sp-container sp-overview-grid">
            <div>
              <div className="sp-label">What We Offer</div>
              <h2 className="sp-section-title">Ideas turned into <em>real products</em></h2>
              <p className="sp-section-text">
                Great products don't happen by accident. They're the result of deep user understanding, disciplined engineering, and relentless iteration. That's exactly how we work.
              </p>
              <p className="sp-section-text">
                Whether you're a founder with a napkin sketch or an enterprise team launching a new product line, we bring the process, the team, and the tools to make it real.
              </p>
              <div className="sp-bullets">
                {BULLETS.map((b) => (
                  <div className="sp-bullet" key={b}>
                    <div className="sp-bullet-icon"><CheckCircle size={12} /></div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="sp-visual-box">
              <div className="sp-visual-icon"><Rocket size={36} /></div>
              <div className="sp-visual-chips">
                {CHIPS.map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="sp-features">
          <div className="sp-container">
            <div className="sp-features-header">
              <div className="sp-label">Capabilities</div>
              <h2 className="sp-section-title">Everything to <em>launch & grow</em></h2>
            </div>
            <div className="sp-features-grid">
              {FEATURES.map((f) => (
                <div className="sp-feature-card" key={f.title}>
                  <div className="sp-feature-icon">{f.icon}</div>
                  <div className="sp-feature-title">{f.title}</div>
                  <div className="sp-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-stats">
          <div className="sp-container">
            <div className="sp-stats-grid">
              {STATS.map((s) => (
                <div className="sp-stat-card" key={s.label}>
                  <div className="sp-stat-value">{s.value}</div>
                  <div className="sp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-process">
          <div className="sp-container">
            <div className="sp-features-header">
              <div className="sp-label">How It Works</div>
              <h2 className="sp-section-title">From napkin sketch to <em>live product</em></h2>
            </div>
            <div className="sp-process-grid">
              {PROCESS.map((p, i) => (
                <div className="sp-process-card" key={p.step}>
                  <div className="sp-process-step">{p.step}</div>
                  <div className="sp-process-icon">{p.icon}</div>
                  <div className="sp-process-title">{p.title}</div>
                  <div className="sp-process-desc">{p.desc}</div>
                  {i < PROCESS.length - 1 && <div className="sp-process-arrow">→</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-cta">
          <div className="sp-container sp-cta-inner">
            <div>
              <h2 className="sp-cta-title">Got a product idea? Let's <em>validate it fast.</em></h2>
              <p className="sp-cta-sub">Free product discovery session — we'll map out your MVP in 30 mins.</p>
            </div>
            <button className="sp-cta-btn" onClick={() => navigate('/contact-us')}>
              Get Free Consultation <ArrowUpRight size={15} />
            </button>
          </div>
        </section>

      </main>
      <ServiceFooter />
    </>
  );
}
