import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Cloud, CheckCircle, Shield, GitBranch, Layers, RefreshCw, Server, Zap, Settings } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import ServiceFooter from '../../components/ServiceFooter/ServiceFooter';
import './ServicePage.scss';

const CHIPS = ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'];

const BULLETS = [
  'Multi-cloud architecture design (AWS, GCP, Azure)',
  'Kubernetes & container orchestration at scale',
  'CI/CD pipeline setup, optimization & automation',
  'Infrastructure as Code with Terraform & Pulumi',
  'Site reliability engineering & 24/7 monitoring',
  'Cloud cost optimization & FinOps practices',
];

const FEATURES = [
  { icon: <Cloud size={18} />, title: 'Multi-Cloud Architecture', desc: 'Design resilient, vendor-agnostic cloud architectures across AWS, GCP, and Azure for maximum flexibility.' },
  { icon: <Layers size={18} />, title: 'Kubernetes & Containers', desc: 'Production-grade Kubernetes clusters with auto-scaling, service mesh, and zero-downtime deployments.' },
  { icon: <GitBranch size={18} />, title: 'CI/CD Pipelines', desc: 'Automated build, test, and deploy pipelines that ship code to production safely and frequently.' },
  { icon: <Settings size={18} />, title: 'Infrastructure as Code', desc: 'Terraform and Pulumi modules for reproducible, version-controlled infrastructure across all environments.' },
  { icon: <Shield size={18} />, title: 'Security & Compliance', desc: 'Zero-trust networking, secrets management, vulnerability scanning, and compliance automation.' },
  { icon: <Zap size={18} />, title: 'SRE & Observability', desc: 'Full-stack observability with Prometheus, Grafana, and PagerDuty — 99.99% uptime SLA guaranteed.' },
];

const PROCESS = [
  { step: '01', icon: <Server size={18} />, title: 'Infrastructure Audit', desc: 'Assess your current setup, identify bottlenecks, security gaps, and cost inefficiencies.' },
  { step: '02', icon: <Layers size={18} />, title: 'Architecture Design', desc: 'Design the target cloud architecture with security, scalability, and cost in mind.' },
  { step: '03', icon: <RefreshCw size={18} />, title: 'Migration & Build', desc: 'Execute migration with zero downtime using blue-green and canary deployment strategies.' },
  { step: '04', icon: <Shield size={18} />, title: 'Monitor & Optimize', desc: 'Ongoing SRE support, cost optimization, and continuous infrastructure improvements.' },
];

const STATS = [
  { value: '99.99%', label: 'Uptime SLA Delivered' },
  { value: '45%', label: 'Average Cost Reduction' },
  { value: '10x', label: 'Deployment Frequency' },
  { value: '50+', label: 'Cloud Migrations Done' },
];

export default function CloudDevOpsPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="sp-main">

        <section className="sp-hero">
          <div className="sp-hero-bg-grid" />
          <div className="sp-container sp-hero-inner">
            <button className="sp-back-btn" onClick={() => navigate('/')}>
              <ArrowLeft size={14} /> Back to Home
            </button>
            <div className="sp-label">Our Services</div>
            <h1 className="sp-hero-title">
              Cloud &amp; <em>DevOps Engineering</em>
            </h1>
            <p className="sp-hero-subtitle">
              Modernize your infrastructure with cloud-native architectures, automated CI/CD pipelines, and 24/7 managed operations that scale with your business.
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
              <h2 className="sp-section-title">Infrastructure that <em>never sleeps</em></h2>
              <p className="sp-section-text">
                Your infrastructure should be an accelerator, not a bottleneck. We build cloud platforms that are secure, scalable, and cost-efficient — so your engineering team can ship faster.
              </p>
              <p className="sp-section-text">
                From greenfield cloud builds to complex legacy migrations, we've done it all — with zero-downtime deployments and full knowledge transfer to your team.
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
              <div className="sp-visual-icon"><Cloud size={36} /></div>
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
              <h2 className="sp-section-title">Cloud-native from <em>day one</em></h2>
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
              <h2 className="sp-section-title">From legacy to <em>cloud-native</em></h2>
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
              <h2 className="sp-cta-title">Ready to modernize your <em>infrastructure?</em></h2>
              <p className="sp-cta-sub">Free cloud architecture review — no commitment required.</p>
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
