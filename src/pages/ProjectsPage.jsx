import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import {
  RiBrainLine, RiDatabase2Line, RiShoppingCartLine,
  RiBarChartLine, RiRobotLine, RiCloudLine,
  RiCodeSSlashLine, RiSmartphoneLine, RiShieldLine,
  RiLineChartLine, RiSettings3Line, RiGlobalLine,
} from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './ProjectsPage.scss';

const ALL_PROJECTS = [
  {
    id: 1, tags: ['AI Agents', 'Automation'],
    title: 'Intelligent SVOD Content Recommendation Engine',
    desc: 'Built an agentic AI system for a streaming platform that improved content discovery by 3x and reduced churn by 40% using collaborative filtering and LLM-powered personalization.',
    icon: <RiBrainLine size={32} />, client: 'Media & Streaming', year: '2024',
  },
  {
    id: 2, tags: ['Data Engineering', 'Analytics'],
    title: 'Real-Time Logistics Analytics Platform',
    desc: 'End-to-end data lakehouse for a logistics firm processing 5M+ daily events with sub-second dashboards and predictive delay alerts.',
    icon: <RiDatabase2Line size={32} />, client: 'Logistics', year: '2024',
  },
  {
    id: 3, tags: ['eCommerce', 'AI'],
    title: 'AI-Powered eCommerce Assistant & Order Automation',
    desc: 'Conversational AI assistant integrated with inventory, payments, and CRM systems — cutting manual order processing by 70%.',
    icon: <RiShoppingCartLine size={32} />, client: 'Retail', year: '2023',
  },
  {
    id: 4, tags: ['Healthcare', 'RCM'],
    title: 'Healthcare Revenue Cycle Management Platform',
    desc: 'Automated medical billing and claims workflow for a multi-state healthcare network, reducing denial rates from 18% to 4%.',
    icon: <RiBarChartLine size={32} />, client: 'Healthcare', year: '2024',
  },
  {
    id: 5, tags: ['Automation', 'RPA'],
    title: 'Enterprise Back-Office Automation Suite',
    desc: 'Deployed 12 intelligent bots for finance, HR, and procurement workflows saving 3,200+ manual hours per month across 5 departments.',
    icon: <RiRobotLine size={32} />, client: 'Enterprise', year: '2023',
  },
  {
    id: 6, tags: ['Cloud', 'DevOps'],
    title: 'Multi-Cloud Infrastructure Modernization',
    desc: 'Migrated a legacy monolith to microservices on AWS + GCP with zero-downtime deployment, achieving 99.99% uptime SLA.',
    icon: <RiCloudLine size={32} />, client: 'FinTech', year: '2024',
  },
  {
    id: 7, tags: ['Custom Software', 'API'],
    title: 'Enterprise API Gateway & Developer Portal',
    desc: 'Designed and built a unified API gateway handling 50M+ requests/day with rate limiting, auth, and a self-serve developer portal.',
    icon: <RiCodeSSlashLine size={32} />, client: 'SaaS', year: '2023',
  },
  {
    id: 8, tags: ['Mobile', 'React Native'],
    title: 'Cross-Platform Field Service Mobile App',
    desc: 'React Native app for 2,000+ field technicians with offline-first sync, GPS tracking, and real-time job dispatch integration.',
    icon: <RiSmartphoneLine size={32} />, client: 'Utilities', year: '2024',
  },
  {
    id: 9, tags: ['Security', 'Compliance'],
    title: 'Zero-Trust Security Architecture Implementation',
    desc: 'Implemented zero-trust network access across a 5,000-employee enterprise, achieving ISO 27001 certification within 6 months.',
    icon: <RiShieldLine size={32} />, client: 'Insurance', year: '2023',
  },
  {
    id: 10, tags: ['Analytics', 'BI'],
    title: 'Executive BI Dashboard Suite',
    desc: 'Built a real-time executive dashboard consolidating data from 12 source systems, reducing reporting time from 3 days to 15 minutes.',
    icon: <RiLineChartLine size={32} />, client: 'Manufacturing', year: '2024',
  },
  {
    id: 11, tags: ['Automation', 'AI'],
    title: 'Intelligent Document Processing Pipeline',
    desc: 'OCR + LLM pipeline that extracts, classifies, and routes 100K+ documents/month with 98.5% accuracy, replacing a 20-person manual team.',
    icon: <RiSettings3Line size={32} />, client: 'Legal', year: '2024',
  },
  {
    id: 12, tags: ['Cloud', 'Global'],
    title: 'Global CDN & Edge Computing Platform',
    desc: 'Architected a multi-region edge platform serving 200M+ users with <50ms latency globally, built on AWS CloudFront + Lambda@Edge.',
    icon: <RiGlobalLine size={32} />, client: 'Media', year: '2023',
  },
];

const PER_PAGE = 6;

const ALL_TAGS = ['All', ...Array.from(new Set(ALL_PROJECTS.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.tags.includes(activeTag));

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setPage(1);
  };

  return (
    <>
      <Navbar />
      <main className="pp-main">

        {/* Hero */}
        <section className="pp-hero">
          <div className="pp-hero-bg-grid" />
          <div className="pp-container pp-hero-inner">
            <button className="pp-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={15} /> Back
            </button>
            <div className="pp-label">Case Studies</div>
            <h1 className="pp-hero-title">Our <em>Work</em></h1>
            <p className="pp-hero-subtitle">
              Real projects. Measurable outcomes. Explore our full portfolio of delivered solutions.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="pp-content">
          <div className="pp-container">

            {/* Filter Tags */}
            <div className="pp-filters">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  className={`pp-filter-btn${activeTag === tag ? ' active' : ''}`}
                  onClick={() => handleTagChange(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="pp-grid">
              {paginated.map((p) => (
                <div className="pp-card" key={p.id}>
                  <div className="pp-card-image">
                    <div className="pp-card-image-inner">
                      {p.icon}
                      <span>{p.client}</span>
                    </div>
                  </div>
                  <div className="pp-card-body">
                    <div className="pp-card-tags">
                      {p.tags.map((t) => (
                        <span className="pp-card-tag" key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="pp-card-title">{p.title}</div>
                    <div className="pp-card-desc">{p.desc}</div>
                  </div>
                  <div className="pp-card-footer">
                    <span>{p.year}</span>
                    <a
                      href="/contact-us"
                      className="pp-card-link"
                      onClick={(e) => { e.preventDefault(); navigate('/contact-us'); }}
                    >
                      View Case Study <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pp-pagination">
                <button
                  className="pp-page-btn"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    className={`pp-page-btn${page === n ? ' active' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}

                <button
                  className="pp-page-btn"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next →
                </button>
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
