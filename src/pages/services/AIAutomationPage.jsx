import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Brain, Zap, Settings, Shield, BarChart3, Code2, CheckCircle, Search, Layers, RefreshCw, Cpu } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import ServiceFooter from '../../components/ServiceFooter/ServiceFooter';
import './ServicePage.scss';

const CHIPS = ['OpenAI', 'LangChain', 'RAG', 'PyTorch', 'Ollama', 'HuggingFace'];

const BULLETS = [
  'Custom LLM & GenAI integrations tailored to your business',
  'Agentic AI & multi-step workflow orchestration',
  'Computer Vision & image processing pipelines',
  'NLP & conversational AI systems',
  'MLOps & model lifecycle management',
  'Retrieval-Augmented Generation (RAG) systems',
];

const FEATURES = [
  { icon: <Brain size={18} />, title: 'Custom LLM Integration', desc: 'Deploy and fine-tune large language models on your proprietary data for domain-specific intelligence.' },
  { icon: <Zap size={18} />, title: 'Agentic AI Systems', desc: 'Build autonomous AI agents that plan, reason, and execute multi-step tasks without human intervention.' },
  { icon: <Search size={18} />, title: 'RAG Pipelines', desc: 'Combine vector search with LLMs to give your AI accurate, up-to-date answers from your knowledge base.' },
  { icon: <Layers size={18} />, title: 'Computer Vision', desc: 'Image classification, object detection, and visual inspection systems for manufacturing and retail.' },
  { icon: <Code2 size={18} />, title: 'NLP & Conversational AI', desc: 'Intelligent chatbots, sentiment analysis, and document understanding at enterprise scale.' },
  { icon: <RefreshCw size={18} />, title: 'MLOps & Model Ops', desc: 'CI/CD for ML models — automated retraining, monitoring, drift detection, and deployment pipelines.' },
];

const PROCESS = [
  { step: '01', icon: <Search size={18} />, title: 'Discovery & Use Case', desc: 'We identify the highest-ROI AI opportunities in your business workflows.' },
  { step: '02', icon: <Layers size={18} />, title: 'Data & Architecture', desc: 'Design the data pipeline, model selection, and system architecture.' },
  { step: '03', icon: <Cpu size={18} />, title: 'Build & Train', desc: 'Develop, fine-tune, and validate models against your business KPIs.' },
  { step: '04', icon: <Zap size={18} />, title: 'Deploy & Monitor', desc: 'Production deployment with monitoring, alerting, and continuous improvement.' },
];

const STATS = [
  { value: '3x', label: 'Average ROI Improvement' },
  { value: '70%', label: 'Manual Task Reduction' },
  { value: '98.5%', label: 'Model Accuracy Rate' },
  { value: '40+', label: 'AI Projects Delivered' },
];

export default function AIAutomationPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="sp-main">

        {/* Hero */}
        <section className="sp-hero">
          
          <div className="sp-container sp-hero-inner">
            <button className="sp-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={14} /> Back to Home
            </button>
            <div className="sp-label">Our Services</div>
            <h1 className="sp-hero-title">
              AI &amp; <em>Intelligent Systems</em>
            </h1>
            <p className="sp-hero-subtitle">
              Build cutting-edge AI solutions that transform how your business operates — from custom LLM implementations to autonomous agentic workflows.
            </p>
            <div className="sp-hero-chips">
              {CHIPS.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="sp-overview">
          <div className="sp-container sp-overview-grid">
            <div>
              <div className="sp-label">What We Offer</div>
              <h2 className="sp-section-title">AI that <em>actually works</em> for your business</h2>
              <p className="sp-section-text">
                We don't just implement AI — we engineer intelligent systems that integrate deeply with your operations, learn from your data, and deliver measurable outcomes from day one.
              </p>
              <p className="sp-section-text">
                From proof-of-concept to production-grade deployment, our AI engineers handle the full lifecycle with a focus on reliability, security, and ROI.
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
              <div className="sp-visual-icon"><Brain size={36} /></div>
              <div className="sp-visual-chips">
                {CHIPS.map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="sp-features">
          <div className="sp-container">
            <div className="sp-features-header">
              <div className="sp-label">Capabilities</div>
              <h2 className="sp-section-title">Everything you need to <em>go AI-first</em></h2>
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

        {/* Stats */}
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

        {/* Process */}
        <section className="sp-process">
          <div className="sp-container">
            <div className="sp-features-header">
              <div className="sp-label">How It Works</div>
              <h2 className="sp-section-title">From idea to <em>production AI</em></h2>
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

        {/* CTA */}
        <section className="sp-cta">
          <div className="sp-container sp-cta-inner">
            <div>
              <h2 className="sp-cta-title">Ready to build your <em>AI advantage?</em></h2>
              <p className="sp-cta-sub">Talk to our AI architects — free 30-min strategy session.</p>
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
