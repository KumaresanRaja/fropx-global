import { useState } from 'react';
import {
  Brain, BarChart3, Settings, Cloud, Code2, Rocket,
  CheckCircle, ArrowUpRight, ChevronRight
} from 'lucide-react';
import './Services.scss';

const SERVICES = [
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: <Brain size={16} />,
    title: 'AI & Intelligent Systems',
    desc: 'Build cutting-edge AI solutions that transform how your business operates. From custom LLM implementations to computer vision and NLP pipelines.',
    bullets: [
      'Custom LLM & GenAI integrations',
      'Agentic AI & workflow orchestration',
      'Computer Vision & image processing',
      'NLP & conversational AI systems',
      'MLOps & model lifecycle management',
    ],
    chips: ['OpenAI', 'LangChain', 'RAG', 'PyTorch', 'Ollama'],
  },
  {
    id: 'data',
    label: 'Data Engineering',
    icon: <BarChart3 size={16} />,
    title: 'Data Engineering & Analytics',
    desc: 'Unlock the full potential of your data with enterprise-grade pipelines, warehouses, and real-time analytics dashboards.',
    bullets: [
      'End-to-end data pipeline design & build',
      'Real-time streaming & batch processing',
      'Data warehouse & lakehouse architecture',
      'BI dashboards & reporting automation',
      'Data quality & governance frameworks',
    ],
    chips: ['Spark', 'dbt', 'Airflow', 'Snowflake', 'Tableau'],
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: <Settings size={16} />,
    title: 'Automation & Process Optimization',
    desc: 'Eliminate repetitive tasks, reduce errors, and scale operations efficiently through intelligent process automation.',
    bullets: [
      'RPA implementation & bot development',
      'Business process mapping & redesign',
      'ERP & CRM integration automation',
      'Intelligent document processing',
      'Workflow orchestration & monitoring',
    ],
    chips: ['UiPath', 'Power Automate', 'Zapier', 'n8n', 'Make'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: <Cloud size={16} />,
    title: 'Cloud & DevOps Engineering',
    desc: 'Modernize your infrastructure with cloud-native architectures, CI/CD pipelines, and 24/7 managed operations.',
    bullets: [
      'Multi-cloud architecture design (AWS, GCP, Azure)',
      'Kubernetes & container orchestration',
      'CI/CD pipeline setup & optimization',
      'Infrastructure as code (Terraform)',
      'Site reliability & 24/7 monitoring',
    ],
    chips: ['AWS', 'GCP', 'Docker', 'Terraform', 'Kubernetes'],
  },
  {
    id: 'software',
    label: 'Custom Software',
    icon: <Code2 size={16} />,
    title: 'Custom Software Development',
    desc: 'End-to-end product engineering from design to deployment. Web, mobile, and enterprise platforms built for scale.',
    bullets: [
      'Full-stack web & mobile application development',
      'API design, development & integration',
      'UI/UX design & product strategy',
      'Scalable microservices architecture',
      'Legacy system modernization',
    ],
    chips: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'GraphQL'],
  },
  {
    id: 'product',
    label: 'Product Engineering',
    icon: <Rocket size={16} />,
    title: 'Product Engineering & Innovation',
    desc: 'From idea to market-ready product. We combine design thinking, agile delivery, and technical excellence.',
    bullets: [
      'Product discovery & roadmap planning',
      'MVP development & market validation',
      'Agile sprint-based delivery model',
      'User research & UX testing',
      'Post-launch growth & optimization',
    ],
    chips: ['Figma', 'Agile', 'React Native', 'Next.js', 'Flutter'],
  },
];

const CARDS = SERVICES.slice(0, 6);

export default function Services() {
  const [active, setActive] = useState('ai');
  const panel = SERVICES.find((s) => s.id === active);

  return (
    <section className="services" id="services">
      <div className="services__inner">
        {/* Header */}
        <div className="services__header">
          <div className="services__label">What We Do</div>
          <h2 className="services__title">
            Our <em>Services</em>
          </h2>
          <p className="services__subtitle">
            From AI strategy to full-scale implementation, we deliver end-to-end technology solutions that drive measurable business results.
          </p>
        </div>

        {/* Tabs */}
        <div className="services__tabs">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              className={`services__tab${active === s.id ? ' active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        {panel && (
          <div className="services__panel" key={panel.id}>
            <div>
              <div className="services__panel-label">Our Expertise</div>
              <h3 className="services__panel-title">{panel.title}</h3>
              <p className="services__panel-desc">{panel.desc}</p>
              <ul className="services__panel-list">
                {panel.bullets.map((b) => (
                  <li key={b}>
                    <CheckCircle size={15} />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                className="services__panel-cta"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="services__panel-visual">
              <div className="services__panel-icon-wrap">
                <div className="services__panel-icon-main">
                  {SERVICES.find((s) => s.id === active)?.icon &&
                    (() => {
                      const S = SERVICES.find((s) => s.id === active);
                      return <span style={{ transform: 'scale(2)', display: 'flex' }}>{S.icon}</span>;
                    })()
                  }
                </div>
                <div className="services__panel-chips">
                  {panel.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cards Grid */}
        <div className="services__grid">
          {CARDS.map((card) => (
            <div
              className="services__card"
              key={card.id}
              onClick={() => setActive(card.id)}
            >
              <div className="services__card-icon">{card.icon}</div>
              <div className="services__card-title">{card.title}</div>
              <div className="services__card-desc">{card.bullets[0]}</div>
              <div className="services__card-arrow">
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
