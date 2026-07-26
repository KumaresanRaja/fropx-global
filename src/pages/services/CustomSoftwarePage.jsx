import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Code2, CheckCircle, Layers, Smartphone, Globe, Database, GitBranch, Zap, RefreshCw } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import ServiceFooter from '../../components/ServiceFooter/ServiceFooter';
import './ServicePage.scss';

const CHIPS = ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'GraphQL', 'Next.js'];

const BULLETS = [
  'Full-stack web & mobile application development',
  'API design, development & third-party integrations',
  'UI/UX design & product strategy',
  'Scalable microservices & event-driven architecture',
  'Legacy system modernization & re-platforming',
  'Performance optimization & technical debt reduction',
];

const FEATURES = [
  { icon: <Globe size={18} />, title: 'Web Applications', desc: 'Performant, accessible, and scalable web apps built with React, Next.js, and modern frontend stacks.' },
  { icon: <Smartphone size={18} />, title: 'Mobile Development', desc: 'Cross-platform iOS & Android apps with React Native and Flutter — one codebase, native performance.' },
  { icon: <Code2 size={18} />, title: 'API & Backend', desc: 'RESTful and GraphQL APIs built with Node.js, FastAPI, or Go — designed for scale and security.' },
  { icon: <Database size={18} />, title: 'Database Architecture', desc: 'Relational, NoSQL, and vector database design with optimized schemas and query performance.' },
  { icon: <Layers size={18} />, title: 'Microservices', desc: 'Decompose monoliths into independently deployable services with event-driven communication.' },
  { icon: <RefreshCw size={18} />, title: 'Legacy Modernization', desc: 'Migrate and modernize legacy systems without disrupting business operations.' },
];

const PROCESS = [
  { step: '01', icon: <Zap size={18} />, title: 'Discovery & Scoping', desc: 'Define requirements, user stories, and technical architecture with your team.' },
  { step: '02', icon: <Code2 size={18} />, title: 'Design & Prototype', desc: 'UI/UX design, wireframes, and interactive prototypes validated with real users.' },
  { step: '03', icon: <GitBranch size={18} />, title: 'Agile Development', desc: 'Sprint-based delivery with weekly demos, continuous integration, and transparent progress.' },
  { step: '04', icon: <RefreshCw size={18} />, title: 'Launch & Support', desc: 'Production deployment, performance monitoring, and ongoing feature development.' },
];

const STATS = [
  { value: '200+', label: 'Applications Shipped' },
  { value: '1.5x', label: 'Faster Time-to-Market' },
  { value: '60%', label: 'Technical Debt Reduced' },
  { value: '99%', label: 'On-Time Delivery Rate' },
];

export default function CustomSoftwarePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="sp-main">

        <section className="sp-hero">
          
          <div className="sp-container sp-hero-inner">
            <button className="sp-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={14} /> Back to Home
            </button>
            <div className="sp-label">Our Services</div>
            <h1 className="sp-hero-title">
              Custom Software <em>Development</em>
            </h1>
            <p className="sp-hero-subtitle">
              End-to-end product engineering from design to deployment. Web, mobile, and enterprise platforms built for scale, performance, and longevity.
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
              <h2 className="sp-section-title">Software built to <em>last and scale</em></h2>
              <p className="sp-section-text">
                Off-the-shelf software rarely fits your exact needs. We build custom solutions that align perfectly with your business processes, integrate with your existing tools, and grow with you.
              </p>
              <p className="sp-section-text">
                Our engineers write clean, tested, documented code — and we treat your codebase like it's our own long-term investment.
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
              <div className="sp-visual-icon"><Code2 size={36} /></div>
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
              <h2 className="sp-section-title">Full-stack engineering <em>end to end</em></h2>
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
              <h2 className="sp-section-title">From requirements to <em>production</em></h2>
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
              <h2 className="sp-cta-title">Have a product idea? Let's <em>build it.</em></h2>
              <p className="sp-cta-sub">Free technical scoping session with our senior engineers.</p>
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
