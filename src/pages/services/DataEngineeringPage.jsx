import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BarChart3, CheckCircle, Database, GitBranch, Layers, RefreshCw, Search, Shield } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import ServiceFooter from '../../components/ServiceFooter/ServiceFooter';
import './ServicePage.scss';

const CHIPS = ['Spark', 'dbt', 'Airflow', 'Snowflake', 'Tableau', 'BigQuery'];

const BULLETS = [
  'End-to-end data pipeline design, build & maintenance',
  'Real-time streaming & batch processing at scale',
  'Data warehouse & lakehouse architecture',
  'BI dashboards & automated reporting',
  'Data quality, lineage & governance frameworks',
  'Cloud-native data platform migrations',
];

const FEATURES = [
  { icon: <Database size={18} />, title: 'Data Lakehouse Architecture', desc: 'Unified storage and compute layer combining the best of data lakes and warehouses for analytics and ML.' },
  { icon: <RefreshCw size={18} />, title: 'Real-Time Streaming', desc: 'Kafka, Flink, and Spark Streaming pipelines processing millions of events per second with sub-second latency.' },
  { icon: <GitBranch size={18} />, title: 'dbt & Data Modeling', desc: 'Transform raw data into clean, tested, documented models that your analysts can trust.' },
  { icon: <BarChart3 size={18} />, title: 'BI & Dashboards', desc: 'Executive and operational dashboards in Tableau, Power BI, or Looker — connected to live data.' },
  { icon: <Shield size={18} />, title: 'Data Governance', desc: 'Data cataloging, lineage tracking, access controls, and compliance frameworks (GDPR, HIPAA).' },
  { icon: <Search size={18} />, title: 'Data Quality & Observability', desc: 'Automated data quality checks, anomaly detection, and alerting to catch issues before they reach production.' },
];

const PROCESS = [
  { step: '01', icon: <Search size={18} />, title: 'Data Audit', desc: 'Map your existing data sources, quality issues, and business requirements.' },
  { step: '02', icon: <Layers size={18} />, title: 'Architecture Design', desc: 'Design the optimal stack — warehouse, pipeline tools, and orchestration layer.' },
  { step: '03', icon: <Database size={18} />, title: 'Build & Migrate', desc: 'Build pipelines, migrate data, and validate end-to-end with zero data loss.' },
  { step: '04', icon: <BarChart3 size={18} />, title: 'Deliver Insights', desc: 'Launch dashboards and self-serve analytics for your business teams.' },
];

const STATS = [
  { value: '5M+', label: 'Daily Events Processed' },
  { value: '99.9%', label: 'Pipeline Uptime SLA' },
  { value: '80%', label: 'Reporting Time Reduction' },
  { value: '30+', label: 'Data Platforms Built' },
];

export default function DataEngineeringPage() {
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
              Data Engineering <em>&amp; Analytics</em>
            </h1>
            <p className="sp-hero-subtitle">
              Unlock the full potential of your data with enterprise-grade pipelines, warehouses, and real-time analytics that power smarter decisions.
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
              <h2 className="sp-section-title">Turn raw data into <em>business intelligence</em></h2>
              <p className="sp-section-text">
                Most companies are sitting on a goldmine of data they can't use. We build the infrastructure that makes your data reliable, accessible, and actionable — at any scale.
              </p>
              <p className="sp-section-text">
                From ingestion to visualization, we own the full data stack so your analysts and data scientists can focus on insights, not plumbing.
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
              <div className="sp-visual-icon"><BarChart3 size={36} /></div>
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
              <h2 className="sp-section-title">The full <em>data stack</em>, covered</h2>
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
              <h2 className="sp-section-title">From raw data to <em>trusted insights</em></h2>
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
              <h2 className="sp-cta-title">Ready to unlock your <em>data's potential?</em></h2>
              <p className="sp-cta-sub">Free data architecture review with our senior engineers.</p>
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
