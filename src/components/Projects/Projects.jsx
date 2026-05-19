import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { RiBrainLine, RiDatabase2Line, RiShoppingCartLine, RiBarChartLine, RiRobotLine, RiCloudLine } from 'react-icons/ri';
import './Projects.scss';

const PROJECTS = [
  {
    id: 1,
    tags: ['AI Agents', 'Automation'],
    title: 'Intelligent SVOD Content Recommendation Engine',
    desc: 'Built an agentic AI system for a streaming platform that improved content discovery by 3x and reduced churn by 40% using collaborative filtering and LLM-powered personalization.',
    icon: <RiBrainLine size={32} />,
    client: 'Media & Streaming',
    year: '2024',
    size: 'lg',
  },
  {
    id: 2,
    tags: ['Data Engineering', 'Analytics'],
    title: 'Real-Time Logistics Analytics Platform',
    desc: 'End-to-end data lakehouse for a logistics firm processing 5M+ daily events with sub-second dashboards and predictive delay alerts.',
    icon: <RiDatabase2Line size={32} />,
    client: 'Logistics',
    year: '2024',
    size: 'sm',
  },
  {
    id: 3,
    tags: ['eCommerce', 'AI'],
    title: 'AI-Powered eCommerce Assistant & Order Automation',
    desc: 'Conversational AI assistant integrated with inventory, payments, and CRM systems — cutting manual order processing by 70%.',
    icon: <RiShoppingCartLine size={32} />,
    client: 'Retail',
    year: '2023',
    size: 'sm',
  },
  {
    id: 4,
    tags: ['Healthcare', 'RCM'],
    title: 'Healthcare Revenue Cycle Management Platform',
    desc: 'Automated medical billing and claims workflow for a multi-state healthcare network, reducing denial rates from 18% to 4%.',
    icon: <RiBarChartLine size={32} />,
    client: 'Healthcare',
    year: '2024',
    size: 'sm',
  },
  {
    id: 5,
    tags: ['Automation', 'RPA'],
    title: 'Enterprise Back-Office Automation Suite',
    desc: 'Deployed 12 intelligent bots for finance, HR, and procurement workflows saving 3,200+ manual hours per month across 5 departments.',
    icon: <RiRobotLine size={32} />,
    client: 'Enterprise',
    year: '2023',
    size: 'sm',
  },
  {
    id: 6,
    tags: ['Cloud', 'DevOps'],
    title: 'Multi-Cloud Infrastructure Modernization',
    desc: 'Migrated a legacy monolith to microservices on AWS + GCP with zero-downtime deployment, achieving 99.99% uptime SLA.',
    icon: <RiCloudLine size={32} />,
    client: 'FinTech',
    year: '2024',
    size: 'full',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        {/* Header */}
        <div className="projects__header">
          <div>
            <div className="projects__label">Case Studies</div>
            <h2 className="projects__title">
              Our <em>Work</em>
            </h2>
          </div>
          <button className="projects__view-all">
            View All Projects <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className={`projects__card projects__card--${p.size}`}
            >
              {/* Image Area */}
              <div className="projects__card-image">
                <div className="projects__card-image-inner">
                  {p.icon}
                  <span>{p.client}</span>
                </div>
              </div>

              {/* Body */}
              <div className="projects__card-body">
                <div className="projects__card-tags">
                  {p.tags.map((t) => (
                    <span className="projects__card-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="projects__card-title">{p.title}</div>
                <div className="projects__card-desc">{p.desc}</div>
              </div>

              {/* Footer */}
              <div className="projects__card-footer">
                <span>{p.year}</span>
                <a href="#contact" className="projects__card-link" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  View Case Study <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
